import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './container/user/user.component';
import { LoginComponent } from './auth/login/login.component';
import { AdduserComponent } from './container/user/adduser/adduser.component';
import { ContainerComponent } from './container/container.component';
import { EditComponent } from './container/user/edit/edit.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    AdduserComponent,
    ContainerComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
