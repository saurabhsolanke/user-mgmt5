import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './container/user/user.component';
import { LoginComponent } from './auth/login/login.component';
import { AdduserComponent } from './container/user/adduser/adduser.component';
import { ContainerComponent } from './container/container.component';
import { EditComponent } from './container/user/edit/edit.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from './container/footer/footer.component';
import { TableComponent } from './container/table/table.component';
import { AuthService } from './auth.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    AdduserComponent,
    ContainerComponent,
    EditComponent,
    FooterComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
