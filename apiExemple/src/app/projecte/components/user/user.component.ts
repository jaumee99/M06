import { Component, OnInit } from '@angular/core';
import { catchError, pipe, take, throwError } from 'rxjs';
import { User } from '../../model/entitats/User';
import { UserApi } from '../../servei/api/userApi';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users!: Array<{
    id: number,
    name: string,
    email: string,
    gender: string,
    status: string,
  }>;

  newUser: User;

  constructor(private httpClient: UserApi) {
    this.newUser = new User();
    this.getAllUsers();
  }

  ngOnInit(): void {
  }

  guardar() {
    this.httpClient.addUser(this.newUser).
      pipe(take(1),catchError((err:any) => {
        console.log(err.error);
        return throwError(() => new Error("Error en crear usuari"))
      }))
      .subscribe({
        next: () => {  },
        error: (err:any) => { console.log(err.message); },
        complete: () => { this.getAllUsers(); }
      });
  }

  getAllUsers(): void {
    this.httpClient.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}