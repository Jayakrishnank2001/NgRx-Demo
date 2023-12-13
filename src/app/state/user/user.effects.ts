import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../../services/user.service";
import { catchError, map, of, switchMap } from "rxjs";
import { User } from "../../models/user.model";
import { Injectable } from "@angular/core";
import * as UserActions from '../user/user.actions'

@Injectable()

export class UserEffects{


    loadUsers$=createEffect(()=>{
        return this.actions$.pipe(
            ofType(UserActions.loadUsers),
            switchMap(()=>
             this.userService.getUsers().pipe(
                map(users=>UserActions.loadUsersSuccess({users:users as ReadonlyArray<User>})),
                catchError((error)=>of(UserActions.loadUsersFailure({error})))
             )
            )
        )
    })

    addUser$= createEffect(()=>{
        return this.actions$.pipe(
            ofType(UserActions.addUser),
            switchMap(payload=>
                this.userService.addUser(payload.user).pipe(
                    map(data=>UserActions.addUserSuccess({user:payload.user})),
                    catchError(error=>of(UserActions.addUserFailure({error})))
                )
                )
        )
    })

    removeUser$=createEffect(()=>{
        return this.actions$.pipe(
            ofType(UserActions.removeUser),
            switchMap(payload=>
                this.userService.deleteUser(payload.id).pipe(
                    map(data=>UserActions.removeUserSuccess({id:payload.id})),
                    catchError(error=>of(UserActions.removeUserFailure({error})))
                )
                )
        )
    })

    constructor(private actions$:Actions,private userService:UserService) {}
}