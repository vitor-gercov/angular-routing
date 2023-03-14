import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users$: BehaviorSubject<Array<User>> = new BehaviorSubject<Array<User>>([
    { id: 1, name: 'Arnold' },
    { id: 2, name: 'Stalone' },
    { id: 3, name: 'Creed' },
    { id: 4, name: 'Apollo' },
    { id: 5, name: 'Bruce' },
  ])

  constructor() { }

  getAll(): Observable<Array<User>> {
    return this.users$
  }

  get(id: number): User | string {
    const user = this.users$.value.find(user => {
      return user.id === id
    })
    return user ?? 'Error: User not found'
  }

  add(name: string): User {
    let users: Array<User> = this.users$.value
    const id: number = users[users.length - 1].id + 1
    const user: User = { id, name }
    users.push(user)
    this.users$.next(users)
    return user
  }
}
