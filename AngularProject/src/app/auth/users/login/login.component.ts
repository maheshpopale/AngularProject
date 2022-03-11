import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
signedIn=false;
Invalid=false;
user:any;
  isvalidlogin: boolean;
  constructor(private formBuilder:FormBuilder,private userService:UsersService,private route:Router,private appCompoent:AppComponent) {
    this.loginForm=formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      userPassword:['',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]],
    });
  }
  ngOnInit(): void {
  }

  onLogin(){
    const user={email:this.loginForm.value.email,password:this.loginForm.value.userPassword};
       this.userService.signIn(user).subscribe(response=>{
        const token=response.tokenString;
         const userId=response.userId;
        console.log(token);
        console.log(userId)
        localStorage.setItem('id',userId);
        localStorage.setItem("jwt",token);
         this.isvalidlogin=false;
         this.route.navigate(["/allProducts"]);
       },
);
      //  .subscribe (response=>{
    //     const token=response.token;
    //     const userId=response.id;
    //     console.log(token);
    //     console.log(userId)
    //     localStorage.setItem('id',userId);
    //   localStorage.setItem("jwt",token);
    //   this.isvalidlogin=false;
    //  this.route.navigate(["/allProducts"]);

    // },err=>{this.isvalidlogin=true});






    // console.log(this.loginForm.value);
    // this.userService.signIn(
    //   this.loginForm.value.email,
    //   this.loginForm.value.userPassword
    //   ).subscribe(data=>{
    //       if(data.id!=0){
    //         console.log(data);
    //         var result = [];
    //         var keys = Object.keys(data);
    //         keys.forEach(function(key){
    //             result.push(data[key]);
    //           });
    //       // console.log(typeof(result));
    //       result.forEach(element=>{
    //         let id=element.id;
    //         // console.log(id);
    //         localStorage.setItem('id',id);
    //         sessionStorage.setItem('id',id);
    //         })
    //      this.route.navigate(['/allProducts']);
    //     }
    //     else
    //     this.Invalid=true;
    //   });
      // localStorage.setItem("email",this.loginForm.value.email);
  }
}


function token(arg0: string, token: any) {
  throw new Error('Function not implemented.');
}

