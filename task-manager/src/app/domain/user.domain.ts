export class User {
    id: number;
    name: string;
    avatar: string;
    password: string;
    birthDay: Date;
    address: Address;
    identity: Identity;

    constructor() {

    }
}

export class Address {
    province: string;
    city: string;
    district: string;
    street?: string;
}

export enum IdentityType {
    IdCard = 0,
    Insurance,
    Passport,
    Military,
    Other
}

export class Identity {
    identityNo: string;
    identityType: IdentityType;
}