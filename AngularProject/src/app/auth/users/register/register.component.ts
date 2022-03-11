import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, Validators, NgForm } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
signUpForm:FormGroup
registered=false;
  constructor(private formBuilder:FormBuilder,private userService:UsersService) { 
  
  }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
      // console.log(this.signUpForm.value);
      this.userService.addUsers(form.value).subscribe(response=>{
        if(response)
        this.registered=true;
      });
      form.resetForm();
          }
  

  
}
