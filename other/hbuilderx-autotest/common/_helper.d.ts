/**
 * @description 获取HBuilderX数据目录
 * @returns
 */
export declare const hxAppDataDir: () => string;
/**
 * @description 获取HBuilderX .log文件路径
 * @returns
 */
export declare const getHXLogFile: () => string;
/**
 * @description 获取HBuilderX autosaves文件路径
 * @returns
 */
export declare const clearHXAutosavesPath: () => Promise<void>;
/**
 * @description 清空HBuilderX数据目录.log文件
 */
export declare const clearHXLogFile: () => void;
/**
 * @description 格式化【测试用例文件】字符串
 * @param openfile
 * @returns
 */
export declare const format_str_case_file: (openfile: string) => string;
