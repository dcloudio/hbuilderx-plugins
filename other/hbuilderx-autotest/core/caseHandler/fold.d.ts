import { Editor, FoldData } from '../editor';
import { HBuilderX } from '../hxdriver';
import { AutoTestFoldCase } from '../autoTestHandler/autoTestDef';
declare class Fold {
    readonly hx: HBuilderX;
    constructor(hx: HBuilderX);
    private getFilePath;
    /**
     * 获取折叠文件数据
     */
    private getFoldFileData;
    /**
     * 对比结果
     */
    comparativeData(mainData: FoldData, targetData: FoldData): Promise<string>;
    /**
     * 执行测试用例
     */
    runFoldCase(test: AutoTestFoldCase, editor: Editor): Promise<any[]>;
}
export { Fold };
