declare class KeepSnapshotVersionBase {
    taskId: string;
    testTaskInfo: any;
    HX_SNAPSHOT_ROOT_DIR: string;
    funcId: string;
    pcOsname: string;
    testPcIp: string;
    hx_version: string;
    hxCurrentMainVersion: string;
    currentTaskSnapshotOutputDir: string;
    constructor(taskId?: string, testTaskInfo?: any);
    get hxTestVersionStoreDir(): string;
    initSetup(): boolean;
    copyFileToBaseVersionDir(): void;
    summaryOutputInfoToFile(thisTestFileData?: any[]): void;
    calcURL(item: any): string;
    summaryBaseVersionInfoToFile(thisTestFileData?: any[]): void;
    main(): void;
}
export default KeepSnapshotVersionBase;
