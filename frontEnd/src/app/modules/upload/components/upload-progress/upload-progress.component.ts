import { Component, OnInit, Output, Input, ElementRef, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';
import { Options } from 'selenium-webdriver/chrome';
@Component({
  selector: 'app-upload-progress',
  templateUrl: './upload-progress.component.html',
  styleUrls: ['./upload-progress.component.css']
})
export class UploadProgressComponent   {
  
  

  @Input('high') check;
   
  

  constructor(config: NgbProgressbarConfig ) { 
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.striped=true;
    config.showValue=true;
    config.height = '20px';
 
  }

  

  
  

}
