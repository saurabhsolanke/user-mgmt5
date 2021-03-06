import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './container/user/adduser/adduser.component';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { UserComponent } from './container/user/user.component';
import { ContainerComponent } from './container/container.component';
import { EditComponent } from './container/user/edit/edit.component';
import { AuthGuard } from './auth.guard';
import { FooterComponent } from './container/footer/footer.component';
import { TableComponent } from './container/table/table.component';

const routes: Routes = [
  {path:'', component: LoginComponent },
  {path:'login', component: LoginComponent },
  {path:'container', component: ContainerComponent },
  {path: 'user', component: UserComponent, canActivate:[AuthGuard] },
  {path:'adduser', component: AdduserComponent },
  {path:'edit/:id', component: EditComponent },
  {path:'footer', component: FooterComponent },
  {path:'table', component: TableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
