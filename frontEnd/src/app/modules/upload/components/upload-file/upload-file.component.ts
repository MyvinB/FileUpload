import { Component, OnInit, HostListener, ElementRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UploadService } from '../../upload.service';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: UploadFileComponent,
      multi: true
    }
  ]

  
})
export class UploadFileComponent implements ControlValueAccessor,OnInit {
  @Input('progress') bar;
  onChange: Function;
  private file: File | null = null;
  display:Boolean=false;
  constructor(private host: ElementRef<HTMLInputElement> ) { }
  

  @HostListener('change', ['$event.target.files']) emitFiles ( event: FileList ) {
    const file = event.item(0);
    this.display=true;
    
    this.onChange(file);
    this.file = file;
    //console.log(event.item(0))
  
     
  }
  writeValue(obj: any): void {
    this.host.nativeElement.value = '';
   this.file = null;
 }
 registerOnChange(fn: any): void {
   this.onChange = fn;
 }
 registerOnTouched(fn: any): void {
  
 }
 setDisabledState?(isDisabled: boolean): void {
   throw new Error("Method not implemented.");
 }
  

  ngOnInit() {
   
  }

}
