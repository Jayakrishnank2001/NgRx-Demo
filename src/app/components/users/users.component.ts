import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../models/user.model';
import * as UserActions from '../../state/user/user.actions'
import * as UserSelectors from '../../state/user/user.selector';

@Component({
  selector: 'app-users',
  template: `
    <div *ngIf="loading$|async">
     Loading....
   </div>

   <div class="my-2">
    <button (click)="addUser()" class="btn btn-primary">Add more</button>
   </div>

   <h2>Users</h2>
   <ng-container *ngIf="users$|async as users">
     <table class="table table-stripped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let user of users">
              <td>{{user.id}}</td>
              <td>{{user.name}}</td>
              <td>{{user.email}}</td>
              <td>
                <button (click)="removeUser(user.id)" class="btn btn-danger">
                      Remove
              </button>
            </td>
        </tbody>
     </table>
   </ng-container>
  `,
  styles: ``
})
export class UsersComponent implements OnInit{


  users$=this.store.select(UserSelectors.selectUsers)
  loading$ = this.store.select(UserSelectors.selectLoading);
  laoded$ = this.store.select(UserSelectors.selectLoaded);
  error$ = this.store.select(UserSelectors.selectError);

  addUser(){
    const user:User={id:5,name:'jayakrishnan',email:'jk@gmail.com'}
    this.store.dispatch(UserActions.addUser({user}))
  }

  removeUser(id:number){
    this.store.dispatch(UserActions.removeUser({id}))
  }

  constructor(private store:Store) {}

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUsers())
  }
}
