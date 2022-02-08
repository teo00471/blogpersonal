import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { UserComponent } from './user/user.component';
import { HttpClient } from '@angular/common/http';
const routes: Routes = [
  {path: '', component:HomeComponent},
  { path: 'home', pathMatch:'full', component: HomeComponent},
  { path: 'register', pathMatch:'full', component: RegistroComponent},
  { path: 'usuario', pathMatch:'full', component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
