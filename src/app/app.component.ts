import { Component } from '@angular/core';
import { User } from './classes/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false;
  selected: User = new User();

  modifyUser(user: User) {
    this.showForm = true;
    this.selected = user;
  }

  newUser() {
    this.selected = new User();
    this.showForm = true;
  }
}
