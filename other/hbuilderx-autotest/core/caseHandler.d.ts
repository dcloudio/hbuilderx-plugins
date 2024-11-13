import { AutoTestCheckEditorCase, AutoTestCompletionCase, AutoTestDbClickCase, AutoTestDefinitionCase, AutoTestHoverCase, AutoTestKeybindCase, AutoTestOutlineCase, AutoTestPerformanceCase, AutoTestReferencesCase } from './autotest';
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
declare function runDefinitionCase(test: AutoTestDefinitionCase, editor: Editor): Promise<({
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
declare function runReferencesCase(test: AutoTestReferencesCase, editor: Editor): Promise<any[]>;
export { runCheckEditor, runCompletionCase, runDbClickCase, runDefinitionCase, runErrorCase, runHoverCase, runKeybindCase, runNoErrorCase, runOutlineCase, runPerformanceCase, runReferencesCase };
