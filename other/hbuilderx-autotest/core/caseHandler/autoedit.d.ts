import { AutoTestAutoEditCase } from '../autoTestHandler/autoTestDef';
import { Editor } from '../editor';
import { HBuilderX } from '../hxdriver';
declare class AutoEdit {
    readonly hx: HBuilderX;
    constructor(hx: HBuilderX);
    input(editor: Editor, input: string, range?: any): Promise<void>;
    /**
     * 执行自动编辑测试用例
     */
    runAutoEditCase(test: AutoTestAutoEditCase, editor: Editor): Promise<any[]>;
}
export { AutoEdit };
