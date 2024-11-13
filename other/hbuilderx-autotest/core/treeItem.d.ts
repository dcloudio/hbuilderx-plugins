import { Range } from 'vscode-languageserver';
import { Editor } from './editor';
import { HBuilderX } from './hxdriver';
/**
 * 树形图控件错误信息
 * @param caseName 用例名称
 * @param value 值
 * @param context 上下文
 */
interface TreeItemError {
    caseName: string;
    value: boolean;
    context?: any;
}
/**
 * 树形图跳转相关位置信息
 * @param enable 是否启用
 * @param filePath 文件路径
 * @param ranges 位置信息
 * @param activeEditor 激活编辑器
 */
interface TreeItemJumpInfo {
    enable: boolean;
    filePath?: string;
    ranges: Range[];
    activeEditor?: Editor;
    errorList?: TreeItemError[];
}
/**
 * 树形图控件信息
 * @param child 子节点
 * @param text 文本
 * @param convertedPath 转换后的树形控件路径, 跳转使用
 * @param kind 类型
 * @param checkClick 检查点击
 */
interface TreeItemInfo {
    child?: TreeItemInfo[];
    text?: string;
    convertedPath?: string;
    kind?: string;
    checkClick?: TreeItemJumpInfo;
}
/**
 * 解析目标路径信息
 * @param projectPath 项目路径
 * @param lsDir lsDir路径
 * @param programData programData路径
 * @param programPlugin programPlugin路径
 */
interface ParseTargetPathInfo {
    projectPath: string;
    lsDir: string;
    programData: string;
    programPlugin: string;
}
/**
 * 树形图控件类型
 */
declare enum TreeItemKind {
    Outline = "outline",
    References = "references"
}
/**
 * 树形图控件基类
 */
declare class TreeItem {
    readonly hx: HBuilderX;
    readonly kind: TreeItemKind;
    constructor(hx: HBuilderX, kind: TreeItemKind);
    /**
     * 生成错误数据
     * @param caseName
     * @param context
     * @returns
     */
    private createErrorData;
    /**
     * 获取对应的树形控件选择器
     * @param treePath
     * @param isClick
     * @returns
     */
    private getSelector;
    /**
     * 树节点获取数据时, 会在最外层包裹`""`
     * 此处将文本本身的`"`转义为`\"`
     */
    private treeNodeEscape;
    /**
     * 遍历树节点, 获取对应的json数据
     */
    getTreeItemData(parentPath: string, treeText: string, hasChildren: boolean, tryCount: number): Promise<TreeItemInfo>;
    /**
     * 对比两个item数据
     * @param mainData
     * @param targetData
     * @param caseName
     * @param rootPath
     * @returns
     */
    private comparativeItemData;
    /**
     * 对比treeItem数据
     */
    comparativeTreeItemData(mainData: TreeItemInfo, targetData: TreeItemInfo, title: string, rootPath: string, result: TreeItemError[]): Promise<TreeItemError[]>;
    /**
     * 获取当前激活编辑器的信息
     * @returns
     */
    private getActiveEditorSelectInfo;
    /**
     * 点击树形图控件
     * @param jsonData
     * @returns
     */
    private clickTreeItem;
    /**
     * 点击树形图控件, 跳转到对应的位置, 并获取位置信息
     */
    private getTreeItemRangeInfo;
    /**
     * 对比两个位置
     */
    private comparativeTreeItemOffset;
    /**
     * 解析目标路径
     * @param parseInfo
     * @param filePath
     * @returns
     */
    private parseTargetPath;
    /**
     * 点击跳转并对比结果
     * @param jsonData 树形图数据
     * @param parseInfo 解析目标路径信息
     * @param filePath 文件路径
     * @param title 标题
     * @param result 结果
     */
    comparativeTreeItemJump(jsonData: TreeItemInfo, parseInfo: ParseTargetPathInfo, filePath: string, title: string, isEnd: boolean, result: TreeItemError[]): Promise<TreeItemError[]>;
    /**
     * 生成断言数据
     */
    createExpect(errorList: TreeItemError[]): any[];
    /**
     * 给json数据添加range
     */
    addRangToJson(data: TreeItemInfo, onlyValue?: boolean): void;
}
export { ParseTargetPathInfo, TreeItem, TreeItemError, TreeItemInfo, TreeItemKind };
