import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('data-user') user: User;
  // tslint:disable-next-line:no-output-rename
  @Output('user-deleted') deleted = new EventEmitter();
  // tslint:disable-next-line:no-output-rename
  @Output('user-selected') selected = new EventEmitter();

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
  }

  showUserDetails() {
    this.route.navigate(['users', this.user.id]);
  }

  modifyUser() {
    this.route.navigate(['users', this.user.id, 'edit']);
    this.selected.emit(this.user);
  }

  deleteUser() {
    this.deleted.emit(this.user);
  }
}
