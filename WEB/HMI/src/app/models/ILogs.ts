import { IFromToEntity } from './IFromToEntity';
import { LogType} from './enums/ILogType';

export interface ILogBase {
    selected: boolean;
    logFileName: string;
    logSize: string;
    logDate: string;
    softwareVersion: string;
}

export interface IHCLog extends ILogBase { }

export interface IGSSLog extends ILogBase { }

export interface ILogFilterParams extends IFromToEntity {
    logType: LogType;
}

export interface IHCFilterParams extends ILogFilterParams{
    helicopterId: number;
}

export interface IGSSLogParams extends ILogFilterParams {}