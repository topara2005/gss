import { INamedModel } from './NamedModel';
import { IFromToEntity } from './IFromToEntity';

export interface IExportedData {
    helicopterType: string;
    helicopterSerialNumber: string;
    fileName: string;
    fileType: string;
    dateReceived: string;
    priority: string;
    destinationApplication: string;
}

export interface IExportedDataFilter extends IFromToEntity {
    fileName: string;
    fileType: string;
    priority: string;
    destinationApplication: string;
    sourceApplication: string;
    destinationDomain: string;
}

export interface IFileMetadata {
    fileName: string;
    sourceApplication: string;
    destinationApplication: string;
    fileType: string;
    priority: string;
    hCType: string;
    hCSerialNumber: string;
    helicopterId: number;
}

export interface ITransferStatusEntry {
    fileName: string;
    status: string;
}