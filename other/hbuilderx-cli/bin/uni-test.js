#!/usr/bin/env node

const {
  checkHBuilderXEnvironment,
  executeCommand,
  getCurrentProjectPath,
  handleCommandError
} = require('../lib/hbuilderx');

const [...extraArgs] = process.argv.slice(2);

// 解析命令行参数
function parseArgs(args) {
  const parsedArgs = {
    platform: args[0],
    browser: 'chrome', // 默认浏览器
    otherArgs: []
  };

  // 查找 --browser 参数
  for (let i = 1; i < args.length; i++) {
    if (args[i] === '--browser' && i + 1 < args.length) {
      parsedArgs.browser = args[i + 1].toLowerCase();
      i++; // 跳过下一个参数
    } else {
      parsedArgs.otherArgs.push(args[i]);
    }
  }

  return parsedArgs;
}

// 根据浏览器类型转换平台名称
function getPlatformName(platform, browser) {
  if (platform === "app-ios") {
    return 'app-ios-simulator';
  }

  if (platform === "web") {
    const browserMap = {
      'Chrome': 'web-chrome',
      'Safari': 'web-firefox',
      'Firefox': 'web-safari'
    };
    return browserMap[browser] || 'web-chrome';
  }

  return platform;
}

async function main() {
  try {
    const { path: hbuilderxCli, isRunning } = await checkHBuilderXEnvironment();
    const currentProjectPath = getCurrentProjectPath();

    const { platform, browser, otherArgs } = parseArgs(extraArgs);

    if (!platform) {
      console.error('Usage: uni-test <platform> [options]');
      process.exit(1);
    }

    const finalPlatform = getPlatformName(platform, browser);
    // 如果 HBuilderX 未运行，先执行 open
    if (!isRunning) {
      console.log('Opening HBuilderX...');
      await executeCommand(hbuilderxCli, ['open']);
    }

    // 再执行 project open
    console.log('Opening project...');
    await executeCommand(hbuilderxCli, ['project', 'open', '--path', currentProjectPath]);

    // 最后执行测试
    console.log(`Running ${finalPlatform} tests...`);
    await executeCommand(hbuilderxCli, ['uniapp.test', finalPlatform, '--project', currentProjectPath, ...otherArgs]);
  } catch (error) {
    handleCommandError(error, 'uniapp.test');
  }
}

main();
