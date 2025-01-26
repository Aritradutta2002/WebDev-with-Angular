import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './task/task.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TaskComponent, UserComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId !: string;

  get selectedUser() {
    return this.users.find((users) => users.id === this.selectedUserId)!;
  }

  onSelectedUser(id: string) {
    this.selectedUserId = id;
  }
}
