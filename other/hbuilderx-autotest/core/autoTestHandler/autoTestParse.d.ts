import { AutoTestCase } from '../autoTestHandler/autoTestDef';
import { ParseData } from './utils';
declare function parseAllCase(parseData: ParseData): AutoTestCase<any> | false;
export { parseAllCase };
