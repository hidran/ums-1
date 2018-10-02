import { Component, OnInit, Input } from '@angular/core';
import { User } from '../classes/User';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  private oldUser: User;
  private __user: User;

  @Input('details-user') set user(user: User) {
    this.__user = user;
    this.oldUser = Object.assign({}, user);
  }

  get user() {
    return this.__user;
  }

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.user = new User();

    this.route.params.subscribe(
      (p) => {
        this.user = this.userService.getUser(+p.id);
      }
    );
  }

  saveUser() {
    if (this.user.id > 0) {
      this.userService.updateUser(this.user);
    } else {
      this.userService.createUser(this.user);
    }
    this.router.navigate(['users']);
  }

  resetForm(form) {
    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.user = this.oldUser;
    }
  }

  backToUsers() {
    this.router.navigate(['users']);
  }
}
