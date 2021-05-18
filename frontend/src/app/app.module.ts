import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CompzeroComponent } from './compzero/compzero.component';
import { CompfirstComponent } from './compfirst/compfirst.component';



import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



import { Router } from '@angular/router';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { TvdetailComponent } from './tvdetail/tvdetail.component';

import { HttpClientModule } from '@angular/common/http';
import { MylistComponent } from './mylist/mylist.component';

import { YouTubePlayerModule } from "@angular/youtube-player";

import { StorageServiceModule } from 'ngx-webstorage-service';
import { LocalStorageService } from './local-storage.service';

// import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';

// import {APP_BASE_HREF} from '@angular/common';

const routes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    CompzeroComponent,
    CompfirstComponent,
    MoviedetailComponent,
    TvdetailComponent,
    MylistComponent
    
  ],
  // imports: [
  //   BrowserModule,
  //   FormsModule, 
  //   NgbModule,
  //   AppRoutingModule
  // ],
  imports: [
    BrowserModule,
    FormsModule, 
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    YouTubePlayerModule,
    StorageServiceModule,
    RouterModule.forRoot([
      {path: '', component: CompfirstComponent, pathMatch:'prefix'},
      {path: 'watch/movie/:id', component: MoviedetailComponent, pathMatch:'prefix'},
      {path: 'watch/tv/:id', component: TvdetailComponent,   pathMatch:'prefix'},
      {path: 'mylist', component: MylistComponent,   pathMatch:'prefix'}
    ]),
    
  ],
  // providers: [LocalStorageService ,{provide: APP_BASE_HREF, useClass: PathLocationStrategy}],
  providers: [LocalStorageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
