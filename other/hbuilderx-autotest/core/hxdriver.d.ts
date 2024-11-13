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
    applicationActive: boolean;
    constructor(option: HBuilderOption);
    getProgram(): string;
    getEnv(): any;
    private checkConnection;
    executeCommand(command: string, commandArgs?: any): Promise<unknown>;
    request(key: string, params: Record<string, any>): Promise<unknown>;
    waitForClose(): Promise<void>;
    delay<T>(delay: number, fn?: () => Promise<T>): Promise<T>;
    hxClose(): void;
    hxClosed(): boolean;
    waitForStartAndConnect(): Promise<void>;
    getWindowsIds(): Promise<number[]>;
    getActiveWindowId(): Promise<number>;
    capturePage(output: string, selector: string, windowId?: number): Promise<string>;
    dispatchKeybinding(keybinding: string, selector?: string, windowId?: number, useCommandOnWindows?: boolean): Promise<void>;
    /**
     * xy不传，默认是选中控件的中心
     */
    waitAndClick(selector: string, xy?: {
        x: number;
        y: number;
    }, tryCount?: number): Promise<void>;
    /**
     * xy不传，默认是选中控件的中心
     */
    waitAndDbClick(selector: string, xy?: {
        x: number;
        y: number;
    }): Promise<void | undefined>;
    /**
    * xy不传，默认是选中控件的中心
    */
    waitAndRightClick(selector: string, xy?: {
        x: number;
        y: number;
    }, keyModifier?: string): Promise<void | undefined>;
    waitForMouseMove(selector: string, xy: {
        x: number;
        y: number;
    }): Promise<void | undefined>;
    waitForTypeInElement(selector: string, input: string): Promise<void | undefined>;
    waitForTextContent(selector: string, acceptFn?: (text: string) => boolean, tryCount?: number): Promise<string>;
    waitForActiveElement(selector: string, tryCount?: number): Promise<IElement>;
    waitForElements(selector: string, tryCount?: number): Promise<IElement[]>;
    waitForElement(selector: string, tryCount?: number): Promise<IElement | undefined>;
    waitForElementsWithAttrs(selector: string, containAttributes?: string[], tryCount?: number): Promise<IElement[]>;
    waitForElementWithAttrs(selector: string, containAttributes?: string[], tryCount?: number): Promise<IElement | undefined>;
    waitForSetValue(selector: string, property: string, value: any): Promise<void | undefined>;
    waitForGetValue(selector: string, property: string, tryCount?: number): Promise<any>;
    startRecording(path?: string, detail?: boolean): Promise<void | undefined>;
    stopRecording(): Promise<any>;
    importPlugins(name: string): Promise<void>;
    withRestart(call: Function): Promise<void>;
}
export {};
