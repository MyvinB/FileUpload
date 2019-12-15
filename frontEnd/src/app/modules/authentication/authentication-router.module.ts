import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UploadScreenComponent } from '../upload/components/upload-screen/upload-screen.component';
import {AuthGuardService } from '../../auth-guard.service';
const authRouter: Routes = [
  
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'upload/:name/name',
      canActivate : [AuthGuardService],
      component: UploadScreenComponent
    }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(authRouter)
  ],
  exports: [
    RouterModule
  ]

})
export class AuthenticationRouterModule { }
