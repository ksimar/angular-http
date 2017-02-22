import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ShowTaskComponent} from "./showTask/showTask.component";
import {CreateTaskComponent} from "./createTask/createTask.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {routes} from "./app.routes";
import {RouterModule} from "@angular/router";
import {AppService} from "./app.service";
import {HttpModule} from "@angular/http";

@NgModule({
  imports:      [ BrowserModule, CommonModule, FormsModule, RouterModule.forRoot(routes), HttpModule ],
  declarations: [ AppComponent, ShowTaskComponent, CreateTaskComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AppService]
})
export class AppModule { }
