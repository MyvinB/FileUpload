import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { UploadScreenComponent } from './components/upload-screen/upload-screen.component';
const uploadRouter: Routes = [
  
  {
    path: 'upload',
    component: UploadScreenComponent
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
