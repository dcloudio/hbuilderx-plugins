import Git from '../common/git';
import { Editor, createTextDocument } from './editor';
import { expectArrayIncludes, expectEquals, expectMatches, expectTrue } from './expect';
import type { HBuilderX } from './hxdriver';
import { TreeItem, TreeItemKind } from './treeItem';
export declare class Workbench {
    readonly hx: HBuilderX;
    /**
     * 测试框架hx实例
    */
    constructor(hx: HBuilderX);
    /**
     * 导入一个本地的项目到项目管理器，通过HBuilderX.exe project的形式
    */
    openProject(project: string): Promise<void>;
    /**
     * 导入一个本地的项目到项目管理器，通过command的形式
    */
    importProject(project: string): Promise<boolean>;
    /**
     * 从本地安装一个插件
    */
    installExtensionFromLocal(path: string): Promise<boolean>;
    /**
     * 获取当前激活的editor
    */
    getActiveEditor(file?: string): Promise<Editor>;
    /**
     * 通过文件路径，打开一个文件到editor，项目需要先导入
    */
    openEditor(file: string, project?: string): Promise<Editor>;
    /**
     * 初始化一个tree控件
    */
    getTreeItemHandler(treeItemKind?: TreeItemKind): Promise<TreeItem>;
    /**
     * 内部工具类
    */
    utils: {
        expectArrayIncludes: typeof expectArrayIncludes;
        expectEquals: typeof expectEquals;
        expectMatches: typeof expectMatches;
        expectTrue: typeof expectTrue;
        Git: typeof Git;
    };
    /**
     * 通过内容和路径创建一个Document
    */
    createTextDocument: typeof createTextDocument;
    /**
     * 常用选择器常量or方法
    */
    SELECTORS: {
        Window: string;
        StatusBarMessage: string;
        TsServerErrorIgnore: string;
        TsServerErrorEdit: string;
        StatusBarItem0Message: string;
        ProjectExplorerViewBaseWidget: string;
        editor(fileName: string): string;
        jqlEditor(fileName: string): string;
        editorTab(fileName: string): string;
        activeEditorTab: string;
        activeEditor(fileName: string): string;
        treeFile(fileName: string): string;
        outline(outlinePath: string): string;
        findReferences(referencesPath: string): string;
        Completions: string;
        CompletionDetail: string;
        Hover: string;
        Signatures: string;
        MessageService: string;
    };
    /**
     * 常用快捷键常量，win和mac快捷键有区分，所有做了转换
    */
    keyBindings: {
        insertLineAfter: string;
        gotoDefinition: string;
        closeActiveEditor: string;
        showPubMenu: string;
        closeAllEditor: string;
        undo: string;
        format: string;
        copy: string;
        cut: string;
        paste: string;
        save: string;
        run: string;
        delLine: string;
        selectAll: string;
        clipBoardHistory: string;
        newUnTitledEditor: string;
        'editor.action.triggerSuggest': string;
        enter: string; /**
         * 导入一个本地的项目到项目管理器，通过HBuilderX.exe project的形式
        */
        down: string;
        esc: string;
        openAndCloseOutline: string;
        findReferences: string;
        findSameWord: string;
        focusProjectManager: string;
    };
}
