/**
 * 处理升级
 */
import * as driver from './hxdriver';
declare class Update {
    private version;
    constructor(version: string);
    /**
     * 强制结束所有具有指定名称的进程
     * @param processName 要结束的进程的名称
     * @returns 返回终止的进程数
     */
    killAllProcessesByName(processName: string): number;
    restartAndClose(hx: driver.HBuilderX): Promise<boolean>;
    update(hx: driver.HBuilderX, forceUpdates?: boolean): Promise<boolean | undefined>;
    checkAutoUpdate(hx: driver.HBuilderX, delay?: number): Promise<boolean>;
}
export { Update };
