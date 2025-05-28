import { Editor } from '../editor';
import { AutoTestFormatCase } from '../autoTestHandler/autoTestDef';
declare class Format {
    private getFilePath;
    /**
     * 获取文件数据
     */
    private getFileData;
    /**
     * 对比结果
     */
    private comparativeData;
    /**
     * 执行测试用例
     */
    runFormatCase(test: AutoTestFormatCase, editor: Editor): Promise<any[]>;
}
export { Format };
