import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { FormGroup,Validators,  FormControl, FormBuilder } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ReactiveFormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UploadService } from '../../upload.service';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { FileUploader } from 'ng2-file-upload';
import {AuthenticationService} from '../../../authentication/authentication.service'
import { Params, ActivatedRoute, Router } from '@angular/router';

const uri:string = "http://localhost:8081/api/";
@Component({
  selector: 'app-upload-screen',
  templateUrl: './upload-screen.component.html',
  styleUrls: ['./upload-screen.component.css'],
 
 
})
export class UploadScreenComponent  {
 
 name:String;
  uploader:FileUploader = new FileUploader({
    url: uri,
    authTokenHeader:  'authorization',
    authToken: 'Bearer '+this.auth.getToken()
   
 });
  attachmentList = new Map<String, String>();



  constructor(private auth:AuthenticationService,private uploadService:UploadService,private activatedRoute: ActivatedRoute ,private router:Router) { 
    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    }
    this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
      this.uploadService.getallfiles().subscribe(
        data=>{
          console.log(data);
          this.attachmentList=data;
       
        }
      )
    }
    this.name = this.activatedRoute.snapshot.paramMap.get('name');
    
    this.uploadService.getallfiles().subscribe(
      data=>{
        console.log(data);
        this.attachmentList=data;
        //this.attachmentList=data;
        //console.log(this.map)
      }
    )
  }
  onClick(url){
    
    window.location.href=url;
  }
  onLogout(){
    console.log("checking logout")
    this.auth.deleteToken();
    this.router.navigate(['/login'])
  }
  onDelete(fileName){
      fileName=this.name+"/"+fileName;
      console.log(fileName)
      this.uploadService.deletefiles(fileName).subscribe()
      this.uploadService.getallfiles().subscribe(data=>{this.attachmentList=data;})

  }

  

  



 





 

}
