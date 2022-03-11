import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

    //get all Users
  getUsers():Observable<any>{
    return this.http.get('https://localhost:44351/api/Users');
  }

  //Add New User
  addUsers(user:any):Observable<any>{
  console.log(user);
  return this.http.post('https://localhost:44351/api/Users',user);
}
  //Sing In
  signIn(user:any):Observable<any>{
    // const User={email:email,password:password};
    return this.http.post('https://localhost:44351/api/auth/login',user);
  }

  //Delete User
  deleteUser(id:number){
    console.log(id);
     return this.http.delete('https://localhost:44351/api/Users/'+id);
  }
  //get user by ID
  getUser(id:number):Observable<any>{
    return this.http.get('https://localhost:44351/api/users/user/'+id);
  }
}
