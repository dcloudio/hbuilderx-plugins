import * as convict from 'convict';
declare const config: convict.Config<{
    dev: string;
    alpha: string;
    release: string;
    testsStorage: string;
    lsTestsStorage: string;
    lsTestReportDir: string;
    hxMarketPLuginDir: string;
    mountSmbfs: string;
    tagrelease: string;
    tagdev: string;
    tagalpha: string;
    autoUpdate: boolean;
    mainStorage: string;
}>;
export default config;
