import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,  FormControl, FormBuilder } from '@angular/forms';
import { User} from '../../user';
import {AuthenticationService} from '../../authentication.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm:FormGroup;
  user:User;
  submit:boolean=false;
  errorMessage = '';
  
 
  constructor(private formBuilder: FormBuilder,private authService :AuthenticationService,private router:Router) { }
  
  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      "userId" : new FormControl('',[ Validators.required,Validators.minLength(3)]),
      "password" :new FormControl('',[ Validators.required])
    })
  }
  
  
  loginUser(){
    this.submit=true;
    if (this.loginForm.invalid) {
      return;
    };
    this.user=new User(this.loginForm.get("userId").value,this.loginForm.get("password").value);
    this.authService.loginUser(this.user).subscribe(
      data=>{
      console.log(data);
      if(data['token']) {
        this.authService.setToken(data['token']);
        console.log(data)
        this.router.navigate(['upload',this.loginForm.get("userId").value,'name']); 
      }
    },
    error=>{
      console.log(error);
      this.errorMessage=error;
      alert(error.error)
    }
    );
    
  }
  
  
  registerUser(){
    this.submit=true;
    if (this.loginForm.invalid) {
      return;
    };
    this.user=new User(this.loginForm.get("userId").value,this.loginForm.get("password").value);
    this.authService.registerUser(this.user).subscribe(
      data=>{
        console.log(data);
        alert('Successfully Registered log in with credential')
      
      }, 
      error=>{
      alert(error.error)

      }
    
    );

  }
get f()
{
  return this.loginForm.controls;
} 

}
