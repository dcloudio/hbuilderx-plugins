/**
 * @description 测试任务管理
 */
declare class TestTaskManage {
    private baseUrl;
    updateTask(task_id: string, status_text?: string, customFields?: any): void;
    push_dingding_message(msg_type: string, test_project_list: string[] | undefined, task_id: string, hx_version?: string): Promise<void>;
}
declare class RunHls extends TestTaskManage {
    private task_id;
    private hbuilderx_path;
    private hbuilderx_plugin_path;
    private testProjectDir;
    constructor();
    init_env_config(hx_type: any): Promise<"" | undefined>;
    /**
     * @description 从about/pacakge.json读取HBuilderX版本号。目的用于自动化测试报告中显示HBuilderX版本号
     * @param {String} hx_type
     * @returns
     */
    read_hx_version(hx_type: string): Promise<string>;
    /**
     * @description 初始化语言服务插件
     * @param hx_type
     */
    init_ls_plugin(task_info: any): Promise<boolean>;
    update_testCase(branch: string): Promise<Boolean>;
    /**
     * @description 执行 node dist/app.js
     */
    runHXDriverAppJS(args: string[]): Promise<number | null>;
    getProjectList(dirPath: string, hx_type: string): Promise<string[]>;
    run_main(task_list: any[]): Promise<string>;
}
export default RunHls;
