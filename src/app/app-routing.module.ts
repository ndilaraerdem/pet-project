import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { AddressComponent } from './components/address/address.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path:'register', component: RegisterComponent},
  {path:'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path:'address', component: AddressComponent, canActivate: [AuthGuard]},
  {path:'addNewAddress', component: AddAddressComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
