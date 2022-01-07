import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PhotosComponent } from './photos.component';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list/photo-list.component';



@NgModule({
  declarations: [
    PhotosComponent,
    PhotoListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  exports: []
})
export class PhotosModule { }
