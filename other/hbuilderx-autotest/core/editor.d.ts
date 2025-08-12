import { CompletionList, Range } from 'vscode-languageserver';
import { TextDocument as FullTextDocument } from 'vscode-languageserver-textdocument';
import { HBuilderX } from './hxdriver';
import { TreeItemInfo } from './treeItem';
export interface TextDocumentLine {
    text: string;
    range: Range;
    lineNumber: number;
}
export interface DefinitionResult {
    uri: string;
    range: Range;
    editor: Editor;
}
export interface FoldData {
    [line: string]: number;
}
export interface TextDocument extends FullTextDocument {
    lineAt(line: number): TextDocumentLine;
    getText(range?: Range): string;
    dirty: boolean;
    indicators: any[];
    lineCount: number;
}
export declare function createTextDocument(fileUri: string, contents: string, languageId: string): TextDocument;
export declare class Editor {
    readonly hx: HBuilderX;
    readonly selector: string;
    readonly fileUri: string;
    readonly explorerFile?: string | undefined;
    private _document;
    constructor(hx: HBuilderX, selector: string, fileUri: string, explorerFile?: string | undefined);
    syncDocument(): Promise<void>;
    get document(): TextDocument | undefined;
    selections(): Promise<Range[]>;
    newLine(lineNum: number): Promise<void>;
    completions(input: string, range?: Range, retryCount?: number): Promise<CompletionList | undefined>;
    setSelections(range: Range): Promise<void>;
    getTsServerError(): Promise<string>;
    resolveCompletionDetail(index: number): Promise<string>;
    applyCompletion(index: number): Promise<void>;
    functionSignatures(range: Range): Promise<string>;
    hxSleep(ms: number): Promise<unknown>;
    hover(range: Range, content?: string): Promise<string>;
    grammarRrror(range: Range): Promise<string>;
    gotoDefinition(range: Range): Promise<DefinitionResult>;
    /**
     * 触发大纲, 获取大纲结果
     */
    outline(): Promise<TreeItemInfo | undefined>;
    closeOutline(): Promise<void>;
    getFoldData(): Promise<FoldData | undefined>;
    /**
     * 获取查找引用结果
     * @param range
     * @returns
     */
    findReferences(range: Range): Promise<TreeItemInfo>;
    /**
     * 查找相同词
     * @param range
     * @returns
     */
    findSameWord(range: Range): Promise<Range[]>;
    findExpandSelection(range: Range, frequency: number): Promise<Range[]>;
    focusProjectManager(): Promise<void>;
    runCommand(command: string): Promise<boolean>;
    close(): Promise<void>;
    reset(): Promise<void>;
    open(): Promise<void>;
    getIndicators(type: string): Promise<number[]>;
    checkIndicators(): Promise<number[]>;
    checkDocumentSync(): Promise<{} | undefined>;
}
