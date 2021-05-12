import { Location } from '../models/ILocation';

export interface IHelicopterBase {
    id: number;
    type: string;
    serialNumber: string;
}

export interface IHelicopterInfo extends IHelicopterBase {
    wACSHealth: string;
    interfaceStatus: string;
    lastKnownLocation: Location;
}