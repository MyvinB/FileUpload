import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
const authRouter: Routes = [
  
    {
      path: 'login',
      component: LoginComponent,
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
