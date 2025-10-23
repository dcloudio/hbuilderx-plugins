const { spawn, exec } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * 通过进程查找 HBuilderX 可执行文件路径
 * @returns {Promise<string|null>} HBuilderX 可执行文件路径，如果找不到返回 null
 */
function findHBuilderXFromProcess() {
  return new Promise((resolve) => {
    const isWindows = process.platform === 'win32';
    const isMac = process.platform === 'darwin';

    let command;
    if (isWindows) {
      // Windows: 查找 HBuilderX.exe 进程
      command = 'wmic process where "name=\'HBuilderX.exe\'" get executablepath /format:csv';
    } else if (isMac) {
      // macOS: 查找 HBuilderX 进程，使用更精确的匹配
      command = 'ps -ax | grep -i "HBuilderX" | grep -v grep';
    } else {
      // Linux: 查找 HBuilderX 进程
      command = 'ps -ax | grep -i "HBuilderX" | grep -v grep';
    }

    exec(command, (error, stdout, stderr) => {
      if (error) {
        resolve(null);
        return;
      }

      try {
        if (isWindows) {
          // Windows 输出解析
          const lines = stdout.split('\n').filter(line => line.trim() && !line.includes('ExecutablePath'));
          for (const line of lines) {
            const parts = line.split(',');
            if (parts.length > 1) {
              const executablePath = parts[parts.length - 1].trim();
              if (executablePath && fs.existsSync(executablePath)) {
                // Windows 使用同目录下的 cli.exe
                const cliPath = path.join(path.dirname(executablePath), 'cli.exe');
                if (fs.existsSync(cliPath)) {
                  resolve(cliPath);
                  return;
                }
              }
            }
          }
        } else {
          // macOS/Linux 输出解析
          const lines = stdout.split('\n');
          for (const line of lines) {
            const match = line.match(/\d+\s+\?\?\s+[\d:.]+\s+(.+)/);
            if (match && match[1]) {
              const executablePath = match[1].trim();
              if (executablePath && fs.existsSync(executablePath)) {
                const cliPath = path.join(path.dirname(executablePath), 'cli');
                if (fs.existsSync(cliPath)) {
                  resolve(cliPath);
                  return;
                }
              }
            }
          }
        }
        resolve(null);
      } catch (parseError) {
        resolve(null);
      }
    });
  });
}

/**
 * 检查 HBuilderX 环境
 * @returns {Promise<{path: string, isRunning: boolean}>} HBuilderX 可执行文件路径和是否已运行
 */
async function checkHBuilderXEnvironment() {
  // 1. 优先通过进程查找已启动的 HBuilderX
  const processPath = await findHBuilderXFromProcess();
  if (processPath) {
    return { path: processPath, isRunning: true };
  }

  // 2. 检查环境变量
  const hbuilderxCliPath = process.env.HBUILDERX_CLI_PATH;
  if (hbuilderxCliPath && fs.existsSync(hbuilderxCliPath)) {
    return { path: hbuilderxCliPath, isRunning: false };
  }

  // 3. 都没有找到，报错
  console.error('HBuilderX not found:');
  console.error('1. No running HBuilderX process detected');
  console.error('2. HBUILDERX_CLI_PATH environment variable is not set or path is invalid');
  console.error('');
  console.error('Please either:');
  console.error('- Start HBuilderX application first');
  console.error('- Set HBUILDERX_CLI_PATH environment variable to the HBuilderX CLI path');
  if (process.platform === 'darwin' || process.platform === 'linux') {
    console.error('  Example: export HBUILDERX_CLI_PATH="/Applications/HBuilderX.app/Contents/MacOS/cli"');
  } else {
    console.error('  Example: set HBUILDERX_CLI_PATH="C:\\Program Files\\HBuilderX\\cli.exe"');
  }
  process.exit(1);
}

/**
 * 执行 HBuilderX 命令
 * @param {string} hbuilderxCli - HBuilderX CLI 工具路径
 * @param {string[]} args - 命令参数
 * @returns {Promise<number>} 退出码
 */
function executeCommand(hbuilderxCli, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(hbuilderxCli, args, {
      stdio: 'inherit'
    });

    child.on('error', (error) => {
      reject(error);
    });

    child.on('exit', (code, signal) => {
      if (signal) {
        reject(new Error(`Process killed with signal: ${signal}`));
      } else {
        resolve(code ?? 0);
      }
    });
  });
}

/**
 * 获取当前项目路径
 * @returns {string} 项目路径
 */
function getCurrentProjectPath() {
  return process.cwd();
}

/**
 * 处理命令执行错误
 * @param {Error} error - 错误对象
 * @param {string} commandName - 命令名称
 */
function handleCommandError(error, commandName) {
  console.error(`Failed to execute ${commandName} command: ${error.message}`);
  process.exit(1);
}

module.exports = {
  checkHBuilderXEnvironment,
  executeCommand,
  getCurrentProjectPath,
  handleCommandError
};

