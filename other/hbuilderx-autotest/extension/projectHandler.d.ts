import { Workbench } from '../core/workbench';
/**
 * 清除全部项目
 * @returns
 */
declare function cleanAllProject(workbench: Workbench): Promise<void>;
/**
 * 重新聚焦到资源管理器中
 * @param workbench
 */
declare function selectExplorer(workbench: Workbench): Promise<void>;
export { cleanAllProject, selectExplorer };
