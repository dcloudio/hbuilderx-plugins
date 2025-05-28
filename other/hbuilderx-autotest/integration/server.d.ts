export declare const latestVersionByType: (type: string) => Promise<any>;
export declare const dingtalkRobot: (msg: string, atMobiles?: string[], access_token?: string) => Promise<void>;
export declare const task_get: (data: any) => Promise<any>;
export declare const task_update: (data: any) => Promise<any>;
export declare const task_update_2: (data: any) => Promise<any>;
export declare const report_save: (data: any) => Promise<any>;
export declare const test_end_upload_hx_log_to_server: (kwargs: {
    file_name?: string;
    upload_type: string;
    file_path: string;
    task_id: string;
}) => Promise<string | undefined>;
