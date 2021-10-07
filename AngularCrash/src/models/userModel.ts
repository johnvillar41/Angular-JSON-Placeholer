export class UserModel {
  id!: number;
  username!: string;
  email!: string;
  phone!: string;
  address!: AddressModel;
  company!:CompanyModel;
  name!:string;

}

export class AddressModel {
  street!: string;
  suite!: string;
  city!: string;
  email!: string;
  zipcode!: string;
}

export class CompanyModel {
  bs!: string;
  catchPhrase!: string;
  name!: string;
}
