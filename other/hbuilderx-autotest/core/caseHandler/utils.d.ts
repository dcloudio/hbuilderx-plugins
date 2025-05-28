import { AutoTestCase } from '../autoTestHandler/autoTestDef';
import { Range } from 'vscode-languageserver';
interface ShowDiffInfo {
    title: string;
    text: string;
    fileName: string;
}
declare function sleepCase(res: any, testCase: any): Promise<any>;
declare function getDiffMessage(mainInfo: ShowDiffInfo, subInfo: ShowDiffInfo): string[];
/**
 * 判断Lines的内容对不对
 */
declare function expectLines(test: AutoTestCase<any>, editor: any, inputRange: Range): Promise<any[]>;
/**
 * 判断光标位置是否正确
 */
declare function expectCursor(test: AutoTestCase<any>, editor: any): Promise<any[]>;
export { sleepCase, getDiffMessage, expectLines, expectCursor, ShowDiffInfo };
