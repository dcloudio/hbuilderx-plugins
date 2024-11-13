export declare function getLocalIP(): string;
export declare function purgeCache(moduleName: string): any;
export declare const getInitTestFile: (fileOrProjectKey: string) => string;
export declare const sleep: (time?: number) => Promise<unknown>;
export declare const getTmpdir: (time?: number) => string;
export declare const isWin: () => boolean;
export declare const getPlatform: () => string;
export declare const generateCode: (file: any, recordOpt: any) => string;
export declare const requireFunc: any;
