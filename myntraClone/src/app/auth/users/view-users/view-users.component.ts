import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
users:any[]=[];
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  //get all Users
  getAllUsers(){
    this.usersService.getUsers().subscribe(users=>{
      this.users=users;
      console.log(this.users);
    });
  }
  
  //Delete User
  deleteUser(id:number){
    var yes=confirm("Are You sure want to Delete User");
    if(yes){
      this.usersService.deleteUser(id).subscribe(user=>{
        var user=user;
        if(user){
          alert("User Deleted Successfully");
        }
      });
    }
    else
    return;
      
  }

}
