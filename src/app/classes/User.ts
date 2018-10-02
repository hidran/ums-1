import { UserInterface } from '../interfaces/user';

export class User implements UserInterface {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
  province: string;
  address: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.surname = '';
    this.email = '';
    this.phone = '';
    this.province = '';
    this.address = '';
  }
}
