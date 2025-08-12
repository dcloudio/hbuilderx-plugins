/**
 * 运行单个测试用例
 */
declare function runSingleCase(params: any, output: any): Promise<void>;
/**
 * 运行某个文件夹的测试用例(确定不为项目根文件夹)
 * @param params
 * @param output
 */
declare function runFolderCase(params: any, output: any): Promise<void>;
declare function runProjectCase(params: any, output: any): Promise<void>;
declare function openFileToRange(baseUri: any, output: any): Promise<void>;
export { runProjectCase, runFolderCase, runSingleCase, openFileToRange };
