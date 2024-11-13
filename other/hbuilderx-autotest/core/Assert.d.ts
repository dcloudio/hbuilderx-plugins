export default class Assert {
    private res;
    private file;
    constructor(file: string);
    expectArrayIncludes(casename: string, targetArray: string[], includeArray: string[]): void;
    expectEquals(casename: string, target: any, expect: any): void;
    expectMatches(casename: string, target: string, expect: RegExp): void;
    expectTrue(casename: string, value: boolean, context?: any): void;
    get result(): {
        count: number;
        caseFail: any[];
        cassAll: any[];
    };
}
