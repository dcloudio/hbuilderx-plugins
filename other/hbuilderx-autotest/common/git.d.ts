import { SimpleGit } from 'simple-git';
/**
 * 基于simple-git封装的git操作
*/
export default class Git {
    private options;
    private localDir;
    private url;
    private gitExample;
    constructor(localDir: string, url: string);
    get git(): SimpleGit;
    clone(): Promise<void>;
    status(): Promise<void>;
    clean(): Promise<void>;
    reset(): Promise<void>;
    checkout(branch?: string): Promise<void>;
    pull(): Promise<void>;
    fetch(): Promise<void>;
    resetCodeToLatestByBranch(branch?: string): Promise<void>;
    checkIfRepoHasUpdates(): Promise<boolean>;
}
