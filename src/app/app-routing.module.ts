import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './container/user/adduser/adduser.component';
import { AppComponent } from './app.component';

import { LoginComponent } from './auth/login/login.component';
import { UserComponent } from './container/user/user.component';
import { ContainerComponent } from './container/container.component';
import { EditComponent } from './container/user/edit/edit.component';


const routes: Routes = [
  {path:'', component: LoginComponent },
  {path:'login', component: LoginComponent },
  {path:'container', component: ContainerComponent },
  {path:'user', component: UserComponent },
  {path:'adduser', component: AdduserComponent },
  {path:'edit', component: EditComponent },
  // {path:'deleteuser', component: AdduserComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
