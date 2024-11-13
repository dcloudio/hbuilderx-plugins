/**
 * @description 对比当前版本的截图与上一个版本的截图
 * @param taskId
 * @param kwargs
 * @returns
 */
declare function compareToThePreviousVersionScreenshot(taskId: string, kwargs: any): Promise<void>;
export default compareToThePreviousVersionScreenshot;
