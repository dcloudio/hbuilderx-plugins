export interface IAfter {
    appRoot: string;
    appData: string;
}
export interface IBefore {
    appRoot: string;
    appData: string;
}
export type IConfig = IAfter | IBefore;
