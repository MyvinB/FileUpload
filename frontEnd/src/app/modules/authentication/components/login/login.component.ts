import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,  FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  
 
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      "userId" : new FormControl(''),
      "password" :new FormControl('')
    })
  }
  loginUser(){
    console.log(this.loginForm.get("userId").value);
  }

}
