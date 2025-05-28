import { Position, Range } from 'vscode-languageserver';
import { TextDocument, TextDocumentLine } from '../editor';
import { AutoTestCase } from './autoTestDef';
interface ParseData {
    kind: string;
    doc: TextDocument;
    i: number;
    line: TextDocumentLine;
    title: string;
    tag: string;
    input: any;
    expect: any;
    project: string;
    lsDir: string;
    programData: string;
    programPlugin: string;
    config: any;
    generateScan: any;
}
/**
 * 匹配测试用例
 */
declare function matchTestcaseContent(line: string): string | undefined;
/**
 * 获取下一个非注释行
 * @param from
 * @param doc
 * @returns
 */
declare function nextNonCommentLine(from: number, doc: TextDocument): TextDocumentLine | undefined;
/**
 * 下一行
 */
declare function prevTestcaseLine(from: number, doc: TextDocument): number;
/**
 * 创建输入匹配错误
 * @param details
 * @returns
 */
declare function createInputMatchError(details: ParseData): AutoTestCase<any>;
/**
 * 解析输入范围
 * @param parseData
 * @param nextLine
 * @returns
 */
declare function parseInputRange(parseData: ParseData, nextLine: TextDocumentLine): {
    range: Range;
    docOffsetAt: number;
} | undefined;
declare function parseClickRange(parseData: ParseData, nextLine: TextDocumentLine): Range | undefined;
declare function parseLines(parseData: ParseData, inputLine: number): {
    expectLines: string[] | RegExp[];
    expectCursor: Position | undefined;
};
export { createInputMatchError, parseLines, matchTestcaseContent, nextNonCommentLine, parseClickRange, ParseData, parseInputRange, prevTestcaseLine, };
