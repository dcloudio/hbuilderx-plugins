import * as autotest from './autotest';
export declare const extServer: import("axios").AxiosInstance;
export declare function closeHBuilderX(cmd: string): Promise<void>;
export declare function getProjectTestFiles(autotestOptions: any, getProjectList: any): string[];
export declare const average: (arr: number[]) => number;
export declare const performanceCompute: any;
export declare function fileCase(project: string, openfile: string, workbench: any, config: any, opt?: any): Promise<{
    count: number;
    caseFail: any[];
    cassAll: any[];
} | {
    count: number;
    caseFail: any[];
    cassAll: any[];
    error: unknown;
    openfile?: undefined;
    documentSyncAttr?: undefined;
    allTextCases?: undefined;
    runFaliTime?: undefined;
    runSuccessTime?: undefined;
    runFailCase?: undefined;
    runSuccessCase?: undefined;
} | {
    count: number;
    openfile: string;
    documentSyncAttr: any;
    caseFail: any[];
    cassAll: any[];
    allTextCases: autotest.AutoTestCase<any>[];
    runFaliTime: number;
    runSuccessTime: number;
    runFailCase: number;
    runSuccessCase: number;
    error?: undefined;
} | {
    error: string;
    count?: undefined;
    openfile?: undefined;
    documentSyncAttr?: undefined;
    caseFail?: undefined;
    cassAll?: undefined;
    allTextCases?: undefined;
    runFaliTime?: undefined;
    runSuccessTime?: undefined;
    runFailCase?: undefined;
    runSuccessCase?: undefined;
}>;
export declare function traverseDirectory(dir: string, includes?: string[], needSort?: boolean): string[];
export declare function moveItemToFront(arr: string[], key: string): string[];
export declare const directoryList: (dirPath: string) => string[];
/**
 * 解析测试用例的期望路径
 * @param expectUri
 * @returns
 */
export declare function parseExpectUri(expectUri: string, project: string, lsDir: string, programData: string, programPlugin: string): string;
export declare function normalizedPath(filePath: string): string;
