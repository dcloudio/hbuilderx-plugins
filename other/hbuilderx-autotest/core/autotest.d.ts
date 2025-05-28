import { AutoTestCase } from './autoTestHandler/autoTestDef';
import { Editor, TextDocument } from './editor';
interface TestCaseResult {
    casename: string;
    passed: boolean;
    message?: string;
    filePath?: string;
}
export declare function getTestMergedResults(testResults: TestCaseResult[], project_name: string, autotestOptions: any): unknown[];
export declare function generateTestReport(testResults: TestCaseResult[], testBaseInfo: any, allCase: number): any;
export declare function matchTestcaseContent(line: string): string | undefined;
export declare function scan(doc: TextDocument, project: string, config: any, range?: {
    startLine: number;
    endLine: number;
}): AutoTestCase<any>[][];
export declare function runCaseItem(testcase: AutoTestCase<any>, editor: Editor, config?: any): Promise<any[]>;
export declare function runcase(testcase: AutoTestCase<any>, editor: Editor, config?: any): Promise<any[]>;
export {};
