/**
 * 断言目标数据包含在源数据中
 * @param {string} casename
 * @param {string[]} targetArray
 * @param {string[]} includeArray
 * @return
*/
declare function expectArrayIncludes(casename: string, targetArray: string[], includeArray: string[]): {
    casename: string;
    passed: boolean;
    message: string;
} | {
    casename: string;
    passed: boolean;
    message?: undefined;
};
/**
 * 断言目标数据不包含在源数据中
 * @param {string} casename
 * @param {string[]} targetArray
 * @param {string[]} excludeArray
 * @return
*/
declare function expectArrayExcludes(casename: string, targetArray: string[], excludeArray: string[]): {
    casename: string;
    passed: boolean;
    message: string;
} | {
    casename: string;
    passed: boolean;
    message?: undefined;
};
/**
 * 断言两个值是否相等
 * @param {string} casename
 * @param {any} target
 * @param {any} expect
 * @return
*/
declare function expectEquals(casename: string, target: any, expect: any): {
    casename: string;
    passed: boolean;
    message: string;
} | {
    casename: string;
    passed: boolean;
    message?: undefined;
};
/**
 * 断言是否匹配，通过正则匹配值
 * @param {string} casename
 * @param {string} target
 * @param {RegExp} expect
 * @return
*/
declare function expectMatches(casename: string, target: string, expect: RegExp): {
    casename: string;
    passed: boolean;
    message: string;
} | {
    casename: string;
    passed: boolean;
    message?: undefined;
};
/**
 * 断言值是否为真
 * @param {string} casename
 * @param {boolean} value
 * @param {any} context
 * @return
*/
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
