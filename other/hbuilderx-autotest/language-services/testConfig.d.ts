/**
 * 此文件为自动化测试设置项文件
 * 由于平台和电脑不同, 自动化测试需要的参数也不同, 在此处统一进行设置
 */
declare const hxProgramByType: (type: 'dev' | 'alpha' | 'release') => string;
/**
 * @description 获取IP地址
 * @return
 */
declare function getLocalIPAddresses(): string;
/**
 * 获取项目列表
 * @param isDeug 是否是调试模式，当为false时或为特定主机名(192.168.12.201电脑)时，会自动获取所有项目列表
 * @param dirPath 项目根目录
 * @returns Array<string> 项目列表
 */
declare function getProjectList(dirPath: string): string[];
/**
 * 项目路径集合
 * @param programPath hx程序所在路径
 * @param projectsRoot 所有测试用例项目路径
 * 路径下会有各个项目的文件夹(项目名称命名), 文件夹中是最后生成的测试报告
 */
interface ProjectPathOptions {
    programPath: string;
    projectsRoot: string;
    lsDir: string;
    testReportDir?: string;
    programData?: string;
    programPlugin?: string;
}
/**
 * 额外的配置参数, 后续可能需要更复杂的逻辑, 需要添加参数的时候, 在这里添加
 * @param hostname 电脑主机名
 * @param marketPluginDir 插件市场插件目录
 * @param marketPluginList 需要复制的插件列表
 */
interface ExtOption {
    marketPluginDir?: string;
    marketPluginList?: string[];
}
declare class AutoTestConfigOptions {
    protected hxType: 'dev' | 'alpha' | 'release';
    protected tag: string[];
    protected programData: string;
    protected programPlugin: string;
    protected programRoot: string;
    constructor(argv: any);
    get projectPathOptions(): ProjectPathOptions;
    get extOption(): ExtOption;
    get HBuilderXVersion(): string;
    get hlsPluginVersion(): string;
    /**
     * 验证函数, 验证当前操作系统和电脑使用者, 配置项正确
     * @returns
     */
    verify(): boolean;
}
export { AutoTestConfigOptions, getLocalIPAddresses, hxProgramByType, getProjectList };
