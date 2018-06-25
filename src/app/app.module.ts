import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { UserComponent } from './user/user.component';
import { ServiceComponent } from './service/service.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    UserComponent,
    ServiceComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ServiceComponent // To let the DI know what can be injected..
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
