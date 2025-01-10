export declare const SELECTORS: {
    Window: string;
    StatusBarMessage: string;
    TsServerErrorIgnore: string;
    TsServerErrorEdit: string;
    StatusBarItem0Message: string;
    ProjectExplorerViewBaseWidget: string;
    /**
     * 编辑器选择器
    */
    editor(fileName: string): string;
    /**
     * jql编辑器选择器
    */
    jqlEditor(fileName: string): string;
    /**
     * 编辑器的tab部分的选择器
    */
    editorTab(fileName: string): string;
    activeEditorTab: string;
    /**
     * 当前激活的编辑的选择器
    */
    activeEditor(fileName: string): string;
    /**
     * 树形结构选择器
    */
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
