declare class TestSetup {
    testCaseDir: string;
    marketPluginList: string[];
    marketPluginDir: string;
    HBuilderXPluginDir: string;
    constructor(testOptions: any);
    kill_HBuilderX(): void;
    update_testCase(): void;
    copy_plugin_to_HBuilderX(): void;
    main(): Promise<void>;
}
export { TestSetup };
