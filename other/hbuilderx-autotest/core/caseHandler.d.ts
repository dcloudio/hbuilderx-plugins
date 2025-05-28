import { AutoTestAutoEditCase, AutoTestCheckEditorCase, AutoTestCommandCase, AutoTestCompletionCase, AutoTestDbClickCase, AutoTestDefinitionCase, AutoTestFoldCase, AutoTestFormatCase, AutoTestHoverCase, AutoTestKeybindCase, AutoTestOpenFileCase, AutoTestOutlineCase, AutoTestPerformanceCase, AutoTestReferencesCase, AutoTestRetriggerCase, AutoTestSameWordCase } from './autoTestHandler/autoTestDef';
import { Editor } from './editor';
declare function runDbClickCase(test: AutoTestDbClickCase, editor: Editor): Promise<({
    casename: string;
    passed: boolean;
    message: string;
} | {
    casename: string;
    passed: boolean;
    message?: undefined;
})[]>;
declare function runCompletionCase(test: AutoTestCompletionCase, editor: Editor, config?: any): Promise<any[]>;
declare function runKeybindCase(test: AutoTestKeybindCase, editor: Editor): Promise<any[]>;
declare function runDefinitionCase(test: AutoTestDefinitionCase, editor: Editor, config?: any): Promise<({
    casename: string;
    passed: boolean;
    message: string;
} | {
    casename: string;
    passed: boolean;
    message?: undefined;
})[]>;
declare function runHoverCase(test: AutoTestHoverCase, editor: Editor): Promise<any[]>;
declare function runNoErrorCase(test: AutoTestHoverCase, editor: Editor): Promise<any[]>;
declare function runCheckEditor(test: AutoTestCheckEditorCase, editor: Editor): Promise<void>;
declare function runErrorCase(test: AutoTestHoverCase, editor: Editor): Promise<any[]>;
declare function runPerformanceCase(test: AutoTestPerformanceCase, editor: Editor): Promise<({
    casename: string;
    passed: boolean;
    timer: any;
    message: string;
} | {
    casename: string;
    timer: any;
    passed: boolean;
    message?: undefined;
} | {
    casename: string;
    passed: boolean;
    message: string;
    timer?: undefined;
})[]>;
declare function runOutlineCase(test: AutoTestOutlineCase, editor: Editor): Promise<any[]>;
declare function runFoldCase(test: AutoTestFoldCase, editor: Editor): Promise<any[]>;
declare function runFormatCase(test: AutoTestFormatCase, editor: Editor): Promise<any[]>;
declare function runReferencesCase(test: AutoTestReferencesCase, editor: Editor): Promise<any[]>;
declare function runSameWordCase(test: AutoTestSameWordCase, editor: Editor): Promise<any[]>;
declare function runAutoEditCase(test: AutoTestAutoEditCase, editor: Editor): Promise<any[]>;
declare function runRetriggerCase(test: AutoTestRetriggerCase, editor: Editor): Promise<any[]>;
declare function runTypeAheadCase(test: AutoTestCompletionCase, editor: Editor): Promise<void>;
declare function runOpenFileCase(test: AutoTestOpenFileCase, config?: any): Promise<({
    casename: string;
    passed: boolean;
    message: string;
    context: any;
} | {
    casename: string;
    passed: boolean;
    context: any;
    message?: undefined;
})[]>;
declare function runCommandCase(test: AutoTestCommandCase, editor: Editor): Promise<any[]>;
export { runAutoEditCase, runCheckEditor, runCommandCase, runCompletionCase, runDbClickCase, runDefinitionCase, runErrorCase, runFoldCase, runFormatCase, runHoverCase, runKeybindCase, runNoErrorCase, runOpenFileCase, runOutlineCase, runPerformanceCase, runReferencesCase, runRetriggerCase, runSameWordCase, runTypeAheadCase, };
