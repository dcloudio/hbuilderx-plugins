/**
 * @description Sends a DingDing message
 * @param {String} msg The plain text message to be sent, which needs to contain the keyword configured on DingDing.
 */
declare function sendDingDingMsg(msg: string): void;
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
export { TestSetup, sendDingDingMsg };
