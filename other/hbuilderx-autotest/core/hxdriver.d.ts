export interface IElement {
    className: string;
    objectName?: string;
    textContent?: string;
    hasFocus?: boolean;
    rect: {
        left: number;
        top: number;
        width: number;
        height: number;
    };
    attributes: {
        [name: string]: any;
    };
    hasChildren: boolean;
}
interface SelectorItem {
    objectName: string;
    className: string;
    sub_control: string;
    properties: Record<string, string>;
    pseudos: any[];
}
interface HBuilderOption {
    program: string;
    args: string[];
    platform?: string;
    env?: any;
}
/**
 * 轮询
 * @param fn 核心处理逻辑
 * @param acceptFn 判断是否接受结果
 * @param timeoutMessage 超时消息
 * @param retryCount 重试次数
 * @param retryInterval 重试间隔
 * @returns
 */
export declare function poll<T>(fn: () => Promise<T>, acceptFn: (result: T) => boolean, timeoutMessage: string, retryCount: number, retryInterval?: number): Promise<T>;
export declare function parseSelector(selector: string): SelectorItem[];
export declare class HBuilderX {
    readonly option: HBuilderOption;
    private connection;
    private programHandle;
    private program;
    private fakeDriver;
    private peocess;
    private platform;
    applicationActive: boolean;
    constructor(option: HBuilderOption);
    /**
     * 获取当前启动程序
    */
    getProgram(): string;
    /**
     * 获取当前启动程序的cli
    */
    getCliProgram(): string;
    /**
     * 获取当前启动程序的env
    */
    getEnv(): any;
    /**
     * 检验通讯链接状态
    */
    private checkConnection;
    /**
     * 执行command
    */
    executeCommand(command: string, commandArgs?: any): Promise<unknown>;
    /**
     * 发送request
    */
    request(key: string, params: Record<string, any>): Promise<unknown>;
    /**
     * 关闭测试实例
    */
    waitForClose(): Promise<void>;
    /**
     * delay方法
    */
    delay<T>(delay: number, fn?: () => Promise<T>): Promise<T>;
    /**
     * 关闭测试实例,和waitForClose类似
    */
    hxClose(): void;
    /**
     * 判断测试实例是否已关闭
    */
    hxClosed(): boolean;
    /**
     * 等待测试实例启动并建立通讯完成
    */
    waitForStartAndConnect(): Promise<void>;
    /**
     * 获取当前Windows的列表
    */
    getWindowsIds(): Promise<number[]>;
    /**
     * 获取当前激活的Windows
    */
    getActiveWindowId(): Promise<number>;
    /**
     * 对当前界面做截图
    */
    capturePage(output: string, selector: string, windowId?: number): Promise<string>;
    /**
     * 执行指定的快捷键
    */
    dispatchKeybinding(keybinding: string, selector?: string, windowId?: number, useCommandOnWindows?: boolean): Promise<void>;
    /**
     * 等待点击（点击）操作完成，不等待点击的后续任务是否执行，xy不传，默认是选中控件的中心
     */
    waitAndClick(selector: string, xy?: {
        x: number;
        y: number;
    }, tryCount?: number): Promise<void>;
    /**
     * 等待点击（双击）操作完成，不等待点击的后续任务是否执行，xy不传，默认是选中控件的中心
     */
    waitAndDbClick(selector: string, xy?: {
        x: number;
        y: number;
    }): Promise<void | undefined>;
    /**
    * 等待点击（右键单击）操作完成，不等待点击的后续任务是否执行，xy不传，默认是选中控件的中心
    */
    waitAndRightClick(selector: string, xy?: {
        x: number;
        y: number;
    }, keyModifier?: string): Promise<void | undefined>;
    /**
    * 移动鼠标到指定位置，xy不传，默认是选中控件的中心
    */
    waitForMouseMove(selector: string, xy: {
        x: number;
        y: number;
    }): Promise<void | undefined>;
    /**
    * 在指定的元素上输入指定的内容
    */
    waitForTypeInElement(selector: string, input: string): Promise<void | undefined>;
    /**
    * 获取指定元素上的Content属性的值
    */
    waitForTextContent(selector: string, acceptFn?: (text: string) => boolean, tryCount?: number): Promise<string>;
    /**
    * 获取指定选择器的第一个元素，必须是激活的状态
    */
    waitForActiveElement(selector: string, tryCount?: number): Promise<IElement>;
    /**
    * 获取指定选择器的第全部元素
    */
    waitForElements(selector: string, tryCount?: number): Promise<IElement[]>;
    /**
    * 获取指定选择器的第一个元素
    */
    waitForElement(selector: string, tryCount?: number): Promise<IElement | undefined>;
    /**
    * 获取指定选择器指定属性，返回的是全部元素
    */
    waitForElementsWithAttrs(selector: string, containAttributes?: string[], tryCount?: number): Promise<IElement[]>;
    /**
    * 获取指定选择器指定属性，返回的是第一个元素
    */
    waitForElementWithAttrs(selector: string, containAttributes?: string[], tryCount?: number): Promise<IElement | undefined>;
    /**
    * 指定元素设置属性值
    */
    waitForSetValue(selector: string, property: string, value: any): Promise<void | undefined>;
    /**
    * 指定元素获取属性值
    */
    waitForGetValue(selector: string, property: string, tryCount?: number): Promise<any>;
    /**
    * 启动录制
    */
    startRecording(path?: string, detail?: boolean): Promise<void | undefined>;
    /**
    * 停止录制
    */
    stopRecording(): Promise<any>;
    /**
    * 通过插件名称，导入插件市场的插件
    */
    importPlugins(name: string, installed?: boolean, dirName?: string): Promise<boolean>;
    /**
    * 等待重启hx
    */
    withRestart(call: Function): Promise<void>;
    resetDoc(): Promise<void>;
}
export {};
