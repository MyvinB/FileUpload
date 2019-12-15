import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthenticationRouterModule } from './modules/authentication/authentication-router.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { UploadModule } from './modules/upload/upload.module';
import {FileUploadModule} from 'ng2-file-upload';


const appRoutes: Routes =[
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
   
  },
 {path: '**', redirectTo: 'login'}
 
]



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AuthenticationModule,
    UploadModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
