import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';

// Service
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app1-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserModel[]
  constructor(
    private usersService: UsersService
   ) { }
  
  getUsers(): void {
    this.usersService.getUsers()
      .subscribe(users => this.users = users)
  }

  ngOnInit() {
    this.getUsers()
  }
}
