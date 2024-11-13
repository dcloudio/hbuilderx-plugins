export declare const SELECTORS: {
    Window: string;
    StatusBarMessage: string;
    TsServerErrorIgnore: string;
    TsServerErrorEdit: string;
    StatusBarItem0Message: string;
    editor(fileName: string): string;
    jqlEditor(fileName: string): string;
    editorTab(fileName: string): string;
    activeEditorTab: string;
    activeEditor(fileName: string): string;
    treeFile(fileName: string): string;
    /**
     * 获取大纲选择器
     * @param outlinePath 大纲路径
     * @returns
     */
    outline(outlinePath: string): string;
    findReferences(referencesPath: string): string;
    Completions: string;
    CompletionDetail: string;
    Hover: string;
    Signatures: string;
    MessageService: string;
};
