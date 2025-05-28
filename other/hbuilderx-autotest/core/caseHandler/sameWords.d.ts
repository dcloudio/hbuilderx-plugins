import { Range } from 'vscode-languageserver';
import { Editor } from '../editor';
import { HBuilderX } from '../hxdriver';
import { AutoTestSameWordCase } from '../autoTestHandler/autoTestDef';
declare class SameWord {
    readonly hx: HBuilderX;
    constructor(hx: HBuilderX);
    private isSameRange;
    private getFilePath;
    /**
     * 获取文件数据
     */
    getFileSameWordData(jsonFilePath: string, needCreate: boolean): Range[] | undefined;
    /**
     * 对比结果
     */
    comparativeData(mainData: Range[], targetData: Range[], title: string, result: any[]): Promise<boolean>;
    /**
     * 执行查找相同词测试用例
     * @param test
     * @param editor
     * @returns
     */
    runSameWordCase(test: AutoTestSameWordCase, editor: Editor): Promise<any[]>;
}
export { SameWord };
