declare const api_recordTestRun: (data: Object) => Promise<void>;
declare const api_recordTestRunDetails: (data: any) => Promise<void>;
declare const api_executeStatisticAnalysis: (task_id: any) => Promise<any>;
declare const api_getTaskDetails: (task_id: any) => Promise<any>;
declare const api_updateTaskForMongoDB: (task_id: any) => Promise<void>;
export { api_recordTestRun, api_recordTestRunDetails, api_executeStatisticAnalysis, api_updateTaskForMongoDB, api_getTaskDetails };
