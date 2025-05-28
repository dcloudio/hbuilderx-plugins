import { Editor } from '../editor';
import { HBuilderX } from '../hxdriver';
import { AutoTestRetriggerCase } from '../autoTestHandler/autoTestDef';
declare class Retrigger {
    readonly hx: HBuilderX;
    constructor(hx: HBuilderX);
    /**
     * 获取代码提示的数据
     * @param editor
     * @returns
     */
    private getContentAssistData;
    /**
     * 运行测试用例
     * @param test
     * @param editor
     * @param config
     * @returns
     */
    private runTest;
    /**
     * 判断提示项是否匹配
     */
    private runSameItem;
    /**
     * 判断提示的detail是否匹配
     */
    private runDetail;
    /**
     * 判断提示后的内容对不对
     */
    private runContent;
    /**
     * 判断光标位置是否正确
     */
    private runCursor;
    /**
     * 二次触发测试用例
     */
    runRetriggerCase(test: AutoTestRetriggerCase, editor: Editor, config?: any): Promise<any[]>;
}
export { Retrigger };
