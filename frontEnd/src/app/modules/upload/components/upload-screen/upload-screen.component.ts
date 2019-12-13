import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup,Validators,  FormControl, FormBuilder } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ReactiveFormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UploadService } from '../../upload.service';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { FileUploader } from 'ng2-file-upload';

const uri:string = "http://localhost:8081/api/";
@Component({
  selector: 'app-upload-screen',
  templateUrl: './upload-screen.component.html',
  styleUrls: ['./upload-screen.component.css'],
 
 
})
export class UploadScreenComponent {
 
  uploader:FileUploader = new FileUploader({url:uri,itemAlias: 'file'});
  attachmentList:any = [];
  
  constructor() { 
  //   this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
  //     console.log(item);
  //     this.attachmentList.push(JSON.parse(response));
  // }
  
  }

  



 





 

}
