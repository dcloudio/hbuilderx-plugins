import { AutoTestExpandSelectionCase } from '../autoTestHandler/autoTestDef';
import { Editor } from '../editor';
declare class ExpandSelectionHandler {
    private getTargetInfo;
    private getMainInfo;
    private isSameRange;
    private getSortPosition;
    /**
     * 对比结果
     */
    private comparativeData;
    private getSimplifiedTargetInfo;
    /**
     * 执行扩大选区测试用例
     * @param test
     * @param editor
     * @returns
     */
    runExpandSelectionCase(test: AutoTestExpandSelectionCase, editor: Editor): Promise<any[]>;
}
export { ExpandSelectionHandler };
