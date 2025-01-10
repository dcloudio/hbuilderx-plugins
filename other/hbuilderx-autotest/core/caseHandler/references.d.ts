import { AutoTestReferencesCase } from '../autotest';
import { Editor } from '../editor';
import { HBuilderX } from '../hxdriver';
import { TreeItem, TreeItemInfo } from '../treeItem';
declare class References {
    readonly hx: HBuilderX;
    protected treeItem: TreeItem;
    constructor(hx: HBuilderX);
    private getFilePath;
    /**
     * 获取文件数据
     */
    getFileReferencesData(jsonFilePath: string, needCreate: boolean): TreeItemInfo | undefined;
    /**
     * 对比结果
     */
    comparativeData(mainData: TreeItemInfo, targetData: TreeItemInfo, title: string, result: any[]): Promise<boolean>;
    /**
     * 处理点击跳转
     */
    doTreeItemJump(test: AutoTestReferencesCase, jsonData: TreeItemInfo, filePath: string, title: string, needCreate: boolean, result: any[]): Promise<void>;
    /**
     * 执行查找引用测试用例
     * @param test
     * @param editor
     * @returns
     */
    runReferencesCase(test: AutoTestReferencesCase, editor: Editor): Promise<any[]>;
}
export { References };
