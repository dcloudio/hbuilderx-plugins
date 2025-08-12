import { Position, Range } from 'vscode-languageserver';
interface AutoTestCase<T> {
    kind: string;
    title: string;
    tag?: string;
    expect: T;
    error?: {
        message: string;
        cause: string;
    };
}
interface KeybindingExpect {
    /**
     * apply之后对应的函内容匹配
     */
    lines: string[] | RegExp[];
    /**
     * apply之后对应的光标位置
     */
    cursor?: Position;
}
interface AutoTestKeybindCase extends AutoTestCase<KeybindingExpect> {
    kind: 'keybind';
    range: Range;
    input: string;
    typeInNewLine?: boolean;
    keybind: string;
}
interface AutoTestCheckEditorCase extends AutoTestCase<KeybindingExpect> {
    kind: 'checkEditor';
}
interface AutoEditExpect {
    /**
     * apply之后对应的函内容匹配
     */
    lines: string[] | RegExp[];
    /**
     * apply之后对应的光标位置
     */
    cursor?: Position;
}
interface AutoTestAutoEditCase extends AutoTestCase<AutoEditExpect> {
    kind: 'autoedit';
    range: Range;
    typeInNewLine?: boolean;
    input: string;
}
interface DefinitionExpect {
    continueAfterjumping: any;
    uri: string;
    line: string | RegExp;
    cursor?: number;
}
interface AutoTestDefinitionCase extends AutoTestCase<DefinitionExpect> {
    kind: 'definition';
    continueAfterjumping?: boolean;
    range: Range;
}
interface HoverExpect {
    /**
     * hover的内容
     */
    content: string | RegExp;
    /**
     * 是否支持F1打开帮助文档
     */
    supportF1?: boolean;
}
interface AutoTestHoverCase extends AutoTestCase<HoverExpect> {
    kind: 'hover' | 'noerror' | 'error';
    range: Range;
    docOffsetAt: number;
    type: 'string';
}
interface OutlineExpect {
    filePath: string;
}
interface AutoTestOutlineCase extends AutoTestCase<OutlineExpect> {
    kind: 'outline';
    needCreate?: boolean;
    project: string;
    lsDir: string;
    programData: string;
    programPlugin: string;
}
interface FormatExpect {
    filePath: string;
}
interface AutoTestFormatCase extends AutoTestCase<FormatExpect> {
    kind: 'format';
    needCreate?: boolean;
    project: string;
    lsDir: string;
    programData: string;
    programPlugin: string;
}
interface FoldExpect {
    filePath: string;
}
interface AutoTestFoldCase extends AutoTestCase<FoldExpect> {
    kind: 'fold';
    needCreate?: boolean;
    project: string;
    lsDir: string;
    programData: string;
    programPlugin: string;
}
interface OpenFileExpect {
    uri: string;
}
interface AutoTestOpenFileCase extends AutoTestCase<OpenFileExpect> {
}
interface ReferencesExpect {
    filePath: string;
}
interface AutoTestReferencesCase extends AutoTestCase<ReferencesExpect> {
    kind: 'references';
    needCreate?: boolean;
    range: Range;
    docOffsetAt: number;
    project: string;
    lsDir: string;
    programData: string;
    programPlugin: string;
}
interface SameWordExpect {
    filePath: string;
}
interface AutoTestSameWordCase extends AutoTestCase<SameWordExpect> {
    kind: 'sameWord';
    needCreate?: boolean;
    range: Range;
    docOffsetAt: number;
    project: string;
    lsDir: string;
    programData: string;
    programPlugin: string;
}
interface ExpandSelectionExpect {
    begin: string;
    end: string;
    line?: string;
}
interface AutoTestExpandSelectionCase extends AutoTestCase<ExpandSelectionExpect> {
    kind: 'expandSelection';
    frequency: number;
    range: Range;
    docOffsetAt: number;
    project: string;
    lsDir: string;
    programData: string;
    programPlugin: string;
}
interface CommandExpect {
    lines: string[] | RegExp[];
    cursor?: Position;
}
interface AutoTestCommandCase extends AutoTestCase<CommandExpect> {
    kind: 'command';
    range: Range;
    typeInNewLine?: boolean;
    command: string;
}
interface ErrorExpect {
    content: string | RegExp;
}
interface CompletionExpect {
    /**
     * 代码助手列表项
     */
    items: string[];
    /**
     * 代码助手列表项-不能包含项
     */
    excludeItems: string[];
    /**
     * apply之后对应的行内容匹配
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
interface AutoTestCompletionCase extends AutoTestCase<CompletionExpect> {
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
interface AutoTestRetriggerCase extends AutoTestCase<CompletionExpect> {
    kind: 'retrigger';
    typeInNewLine?: boolean;
    range: Range;
    input: string;
    applyIndex?: number;
}
interface AutoTestDbClickCase extends AutoTestCase<DbClickExpect> {
    kind: 'dbclick';
    range: Range;
}
interface DbClickExpect {
    begin: string;
    end: string;
    match: string;
}
interface PerformanceExpect {
    expect: AutoTestDefinitionCase | AutoTestHoverCase | AutoTestCompletionCase;
}
interface AutoTestPerformanceCase extends AutoTestCase<PerformanceExpect> {
    kind: 'performance';
    type: string;
    num: number;
    timer: number;
    range: Range;
}
export { AutoEditExpect, AutoTestAutoEditCase, AutoTestCase, AutoTestCheckEditorCase, AutoTestCommandCase, AutoTestCompletionCase, AutoTestDbClickCase, AutoTestDefinitionCase, AutoTestExpandSelectionCase, AutoTestFoldCase, AutoTestFormatCase, AutoTestHoverCase, AutoTestKeybindCase, AutoTestOpenFileCase, AutoTestOutlineCase, AutoTestPerformanceCase, AutoTestReferencesCase, AutoTestRetriggerCase, AutoTestSameWordCase, CommandExpect, CompletionExpect, DbClickExpect, DefinitionExpect, ErrorExpect, FoldExpect, FormatExpect, HoverExpect, KeybindingExpect, OpenFileExpect, OutlineExpect, PerformanceExpect, ReferencesExpect, SameWordExpect };
