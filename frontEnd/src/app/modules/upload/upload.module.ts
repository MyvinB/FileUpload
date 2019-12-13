import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadScreenComponent } from './components/upload-screen/upload-screen.component';
import { UploadRouterModule } from './upload-router.module';
import { ReactiveFormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [UploadScreenComponent],
  imports: [
    CommonModule,
    UploadRouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FileUploadModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
  
  ],
  exports: [
    UploadRouterModule
    ]
})
export class UploadModule { }
