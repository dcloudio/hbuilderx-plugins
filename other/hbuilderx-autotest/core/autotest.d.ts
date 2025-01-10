import { Position, Range } from 'vscode-languageserver';
import { Editor, TextDocument } from './editor';
export interface AutoTestCase<T> {
    kind: string;
    title: string;
    tag?: string;
    expect: T;
    error?: {
        message: string;
        cause: string;
    };
}
export interface KeybindingExpect {
    /**
     * apply之后对应的函内容匹配
     */
    lines: string[] | RegExp[];
    /**
     * apply之后对应的光标位置
     */
    cursor?: Position;
}
export interface AutoTestKeybindCase extends AutoTestCase<KeybindingExpect> {
    kind: 'keybind';
    range: Range;
    input: string;
    typeInNewLine?: boolean;
    keybind: string;
}
export interface AutoTestCheckEditorCase extends AutoTestCase<KeybindingExpect> {
    kind: 'checkEditor';
}
export interface AutoEditExpect {
    /**
     * apply之后对应的函内容匹配
     */
    lines: string[] | RegExp[];
    /**
     * apply之后对应的光标位置
     */
    cursor?: Position;
}
export interface AutoTestAutoEditCase extends AutoTestCase<AutoEditExpect> {
    kind: 'autoedit';
    range: Range;
    typeInNewLine?: boolean;
    input: string;
}
export interface DefinitionExpect {
    continueAfterjumping: any;
    uri: string;
    line: string | RegExp;
    cursor?: number;
}
export interface AutoTestDefinitionCase extends AutoTestCase<DefinitionExpect> {
    kind: 'definition';
    continueAfterjumping?: boolean;
    range: Range;
}
export interface HoverExpect {
    /**
     * hover的内容
     */
    content: string | RegExp;
    /**
     * 是否支持F1打开帮助文档
     */
    supportF1?: boolean;
}
export interface AutoTestHoverCase extends AutoTestCase<HoverExpect> {
    kind: 'hover' | 'noerror' | 'error';
    range: Range;
    docOffsetAt: number;
    type: 'string';
}
export interface OutlineExpect {
    filePath: string;
}
export interface AutoTestOutlineCase extends AutoTestCase<OutlineExpect> {
    kind: 'outline';
    needCreate?: boolean;
    project: string;
    lsDir: string;
    programData: string;
    programPlugin: string;
}
export interface FoldExpect {
    filePath: string;
}
export interface AutoTestFoldCase extends AutoTestCase<FoldExpect> {
    kind: 'fold';
    needCreate?: boolean;
    project: string;
    lsDir: string;
    programData: string;
    programPlugin: string;
}
export interface OpenFileExpect {
    uri: string;
}
export interface AutoTestOpenFileCase extends AutoTestCase<OpenFileExpect> {
}
export interface ReferencesExpect {
    filePath: string;
}
export interface AutoTestReferencesCase extends AutoTestCase<ReferencesExpect> {
    kind: 'references';
    needCreate?: boolean;
    range: Range;
    docOffsetAt: number;
    project: string;
    lsDir: string;
    programData: string;
    programPlugin: string;
}
export interface ErrorExpect {
    content: string | RegExp;
}
export interface CompletionExpect {
    /**
     * 代码助手列表项
     */
    items: string[];
    /**
     * 代码助手列表项-不能包含项
     */
    excludeItems: string[];
    /**
     * apply之后对应的函内容匹配
     */
    lines: string[] | RegExp[];
    /**
     * apply之后对应的光标位置
     */
    cursor?: Position;
    /**
     * apply的item的详细信息
     */
    detail?: string | RegExp;
}
export interface AutoTestCompletionCase extends AutoTestCase<CompletionExpect> {
    kind: 'completion' | 'init';
    /**
     * 是否在新的一行写，如为true，则会在range位置回车后开始写
     */
    typeInNewLine?: boolean;
    /**
     * 要输入的位置
     */
    range: Range;
    /**
     * 要输入的文字
     */
    input: string;
    /**
     * 选择哪一项，默认是第一项。下标从`0`开始
     */
    applyIndex?: number;
}
export interface AutoTestDbClickCase extends AutoTestCase<DbClickExpect> {
    kind: 'dbclick';
    range: Range;
}
export interface DbClickExpect {
    begin: string;
    end: string;
    match: string;
}
export interface PerformanceExpect {
    expect: AutoTestDefinitionCase | AutoTestHoverCase | AutoTestCompletionCase;
}
export interface AutoTestPerformanceCase extends AutoTestCase<PerformanceExpect> {
    kind: 'performance';
    type: string;
    num: number;
    timer: number;
    range: Range;
}
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
