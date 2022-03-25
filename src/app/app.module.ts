import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
//import {MatIconModule} from '@angular/material/icon';
//import {MatCardModule} from '@angular/material/card';
//import {MatInputModule} from '@angular/material/input';
import { FormsModule} from'@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { BlogpostModule } from'./blogpost/blogpost.module';
import { CmspageModule } from'./cmspage/cmspage.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent
   
  ],
  imports: [
    BrowserModule,
   BrowserAnimationsModule,
    MatToolbarModule,
    //MatInputModule,
    //MatCardModule,
    MatButtonModule,
    FormsModule,
    //MatIconModule,
    BlogpostModule,
    CmspageModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
