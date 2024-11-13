import * as driver from '../core/hxdriver';
export declare const openTextDocumentGoToLine: (link: string, line: string, row?: string) => Promise<void>;
export declare const appendLine: (obj: any, output: any, config: any) => Promise<unknown>;
export declare const getConfig: () => {
    programData: any;
    programPlugin: string;
    lsDir: any;
    tag: any;
    sleep: any;
    showPass: any;
    shutOff: any;
    storagePath: any;
    completionsRetryCount: any;
    openFile: any;
    screenshotStoragePath: string;
};
export declare const openhx: (config: any) => driver.HBuilderX;
