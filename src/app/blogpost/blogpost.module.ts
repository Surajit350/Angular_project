import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogpostRoutingModule } from './blogpost-routing.module';
import { BlogpostFeatureComponent } from './blogpost-feature/blogpost-feature.component';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';
import { BlogpostDetailsComponent } from './blogpost-details/blogpost-details.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    BlogpostFeatureComponent,
    BlogpostListComponent,
    BlogpostDetailsComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BlogpostRoutingModule
  ],
  exports: [
    BlogpostFeatureComponent
  ]
})
export class BlogpostModule { }
