import { UserRole } from './enums/IUserRole';

export interface User {
    id: number;
    userName: string;
    email: string;
    role: UserRole
}

export interface CreateUserModel extends User {
    password:string;
}