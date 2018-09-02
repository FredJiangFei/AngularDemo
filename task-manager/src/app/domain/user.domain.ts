import { Photo } from './photo';

export class User {
      id: number;
      username: string;
      knownAs: string;
      age: number;
      created: Date;
      lastActive: Date;
      photoUrl: string;
      city: string;
      country: string;
      interests?: string;
      introduction?: string;
      lookingFor?: string;
      photos?: Photo[];
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
