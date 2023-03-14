import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user!: User

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
    this.getUser()
  }

  private getUser(): void {
    if (!this.activatedRoute.snapshot.params['id']) {
      this.router.navigate(['/users'])
      return
    }
    this.user = this.usersService.get(this.activatedRoute.snapshot.params['id']) as User
  }
}
