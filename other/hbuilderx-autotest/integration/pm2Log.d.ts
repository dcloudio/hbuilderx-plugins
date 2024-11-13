export declare const logStart: (id: string) => string;
export declare const logEnd: (id: string) => string;
export declare const getPm2RunLog: (id: string) => Promise<string>;
export declare const getPm2Log: (filePath: string, id: string) => Promise<string>;
