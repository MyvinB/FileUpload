import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {
  files:Array<File>=[];

  constructor() { }



  @HostListener('change', ['$event.target.files']) emitFiles ( event: FileList ) {
   for(let i=0;i<event.length;i++){
     this.files.push(event.item(i))
   }
   //console.log(this.files)  
  }

  ngOnInit() {
  }

}
