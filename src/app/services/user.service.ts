import { Injectable } from '@angular/core';
import { User } from '../classes/User';

@Injectable()
export class UserService {
  users: User[] = [
    {
      id: 1,
      name: 'Marco',
      surname: 'Rossi',
      email: 'marco.rossi@gmail.com',
      phone: '4367779089',
      province: 'Parma',
      address: 'Via Otto Marzo, 23'
    },
    {
      id: 2,
      name: 'Laura',
      surname: 'Bacchi',
      email: 'laura.bacchi@libero.it',
      phone: '3666997209',
      province: 'Parma',
      address: 'Via Alcide De Gasperi, 8'
    },
    {
      id: 3,
      name: 'Marco',
      surname: 'Verdi',
      email: 'marco.verdi@outlook.it',
      phone: '3552030182',
      province: 'Modena',
      address: 'Via Giuseppe Garibaldi, 27'
    },
    {
      id: 4,
      name: 'Martina',
      surname: 'Ranzenigo',
      email: 'marty_ranzenigo@gmail.com',
      phone: '3652703099',
      province: 'Bologna',
      address: 'Via G. Brunelleschi, 60'
    }
  ];

  constructor() { }

  getUsers() {
    return this.users;
  }

  getUser(id: number): User {
    return this.users.find(user => user.id === id);
  }

  createUser(user: User) {
    user.id = this.users.length + 1;
    this.users.splice(0, 0, user);
  }

  updateUser(user: User) {
    const index = this.users.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  deleteUser(user: User) {
    const index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }
}
