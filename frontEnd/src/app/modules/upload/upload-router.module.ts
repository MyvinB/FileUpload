import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { UploadScreenComponent } from './components/upload-screen/upload-screen.component';
import { LoginComponent } from '../authentication/components/login/login.component';

const uploadRouter: Routes = [
  
  {
    path: 'login',
    component: LoginComponent,
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(uploadRouter)
  ],
  exports: [
    RouterModule,
    
  ]
})
export class UploadRouterModule { }
