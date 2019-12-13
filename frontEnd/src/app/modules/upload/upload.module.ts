import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadScreenComponent } from './components/upload-screen/upload-screen.component';
import { UploadRouterModule } from './upload-router.module';
import { ReactiveFormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { UploadProgressComponent } from './components/upload-progress/upload-progress.component';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';

@NgModule({
  declarations: [UploadScreenComponent, UploadFileComponent, UploadProgressComponent, UploadFilesComponent],
  imports: [
    CommonModule,
    UploadRouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    NgbProgressbarConfig
  ],
  exports: [
    UploadRouterModule
    ]
})
export class UploadModule { }
