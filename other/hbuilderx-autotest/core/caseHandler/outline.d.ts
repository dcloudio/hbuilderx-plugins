import { AutoTestOutlineCase } from '../autotest';
import { Editor } from '../editor';
import { HBuilderX } from '../hxdriver';
import { TreeItem, TreeItemInfo } from '../treeItem';
declare class Outline {
    readonly hx: HBuilderX;
    protected treeItem: TreeItem;
    constructor(hx: HBuilderX);
    private getFilePath;
    /**
     * 获取大纲文件数据
     */
    getFileOutlineData(jsonFilePath: string, needCreate: boolean): TreeItemInfo | undefined;
    /**
     * 对比结果
     */
    comparativeData(mainData: TreeItemInfo, targetData: TreeItemInfo, title: string, result: any[]): Promise<boolean>;
    /**
     * 处理点击跳转
     */
    doTreeItemJump(test: AutoTestOutlineCase, jsonData: TreeItemInfo, filePath: string, title: string, result: any[]): Promise<void>;
    /**
     * 执行大纲测试用例
     */
    runOutlineCase(test: AutoTestOutlineCase, editor: Editor): Promise<any[]>;
}
export { Outline };
