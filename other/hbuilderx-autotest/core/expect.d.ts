declare function expectArrayIncludes(casename: string, targetArray: string[], includeArray: string[]): {
    casename: string;
    passed: boolean;
    message: string;
} | {
    casename: string;
    passed: boolean;
    message?: undefined;
};
declare function expectArrayExcludes(casename: string, targetArray: string[], excludeArray: string[]): {
    casename: string;
    passed: boolean;
    message: string;
} | {
    casename: string;
    passed: boolean;
    message?: undefined;
};
declare function expectEquals(casename: string, target: any, expect: any): {
    casename: string;
    passed: boolean;
    message: string;
} | {
    casename: string;
    passed: boolean;
    message?: undefined;
};
declare function expectMatches(casename: string, target: string, expect: RegExp): {
    casename: string;
    passed: boolean;
    message: string;
} | {
    casename: string;
    passed: boolean;
    message?: undefined;
};
declare function expectTrue(casename: string, value: boolean, context?: any): {
    casename: string;
    passed: boolean;
    message: string;
    context: any;
} | {
    casename: string;
    passed: boolean;
    context: any;
    message?: undefined;
};
export { expectArrayExcludes, expectArrayIncludes, expectEquals, expectMatches, expectTrue };
