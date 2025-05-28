import { AutoTestCommandCase } from '../autoTestHandler/autoTestDef';
import { Editor } from '../editor';
declare class CommandHandler {
    /**
     * 执行测试用例
     */
    runCommandCase(test: AutoTestCommandCase, editor: Editor): Promise<any[]>;
}
export { CommandHandler };
