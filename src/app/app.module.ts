import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './inc/header/header.component';
import { FooterComponent } from './inc/footer/footer.component';
import { SidebarComponent } from './inc/sidebar/sidebar.component';
// What does folder name "inc" mean? Probably we could use something like "public", "layout", etc.
// Also, it would be better to create some "index.ts" and export all files from that folder.
// In this case you would have 3 imports like this:
// import { HeaderComponent, FooterComponent, SidebarComponent } from './inc';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // remove unneeded import
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './components/home/home.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { ProfileComponent } from './components/profile/profile.component';
import { AddressComponent } from './components/address/address.component';
import { AddAddressComponent } from './components/add-address/add-address.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    AddressComponent,
    AddAddressComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatStepperModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatSelectModule

  ],
  providers: [], // remove if not use
  bootstrap: [AppComponent]
})
export class AppModule { } // prettier
