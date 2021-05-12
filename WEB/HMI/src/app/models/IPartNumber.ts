export interface IPartNumberBase {
    id: number;
    name: string;
    number: string;
    helicopterId: number;
}

export interface IHardwarePartNumber extends IPartNumberBase {}

export interface ISoftwarePartNumber extends IPartNumberBase {}