export interface ICertificateBase {
    issuer: string;
    expirationDate: Date;
    name: string;
    serial: string;
    subject: string;
    status: string;
}

export interface IwACSCertificate extends ICertificateBase {
    type: string;
    serialNumber: string;
    clientKey: string;
    cRLInstalledStatus: string;
    cRLValidStatus: string;
}

export interface GSSCertificate extends ICertificateBase {
    airGroundServerKey: string;
}