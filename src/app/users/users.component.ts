import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
import { User } from '../classes/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  title = 'Users Data';
  users: User[] = [];
  @Output() modifyUser = new EventEmitter<User>();

  constructor(private service: UserService) {
  }

  ngOnInit() {
    this.users = this.service.getUsers();
  }

  selected(user) {
    const selectedUser = Object.assign({}, user);
    this.modifyUser.emit(selectedUser);
  }

  deleted(user) {
    this.service.deleteUser(user);
  }
}
