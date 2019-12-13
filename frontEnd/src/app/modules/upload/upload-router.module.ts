import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { UploadScreenComponent } from './components/upload-screen/upload-screen.component';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
const uploadRouter: Routes = [
  
  {
    path: 'upload',
    component: UploadFilesComponent
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
