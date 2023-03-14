import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models';
import { UsersService } from './users.service';

@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$!: Observable<Array<User>>

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  private getAllUsers(): Observable<Array<User>> {
    this.users$ = this.usersService.getAll()
    return this.users$
  }
}
