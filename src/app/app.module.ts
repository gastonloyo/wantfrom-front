import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './home/components/banner/banner.component';
import { AsideComponent } from './home/components/aside/aside.component';
import { ProductsComponent } from './products/components/products/products.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import Popper from 'popper.js';
import { environment } from "../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { BuscadorComponent } from './home/components/buscador/buscador.component';
import { NormalHeaderComponent } from './shared/components/headers/normal-header/normal-header.component';
import { UserHeaderComponent } from './shared/components/headers/user-header/user-header.component';
import { AdminHeaderComponent } from './shared/components/headers/admin-header/admin-header.component';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { AdminProfileComponent } from './profile/admin-profile/admin-profile.component';
import { ViewMoreComponent } from './products/components/products/view-more/view-more.component';
import { CardCarouselComponent } from './products/components/products/card-carousel/card-carousel.component';
import { CardGridComponent } from './products/components/products/card-grid/card-grid.component';
import { AdminLoginComponent } from './log-in/admin/admin-login/admin-login.component';
import { UserLoginComponent } from './log-in/user/user-login/user-login.component';
import { UserSignUpComponent } from './log-in/user/user-sign-up/user-sign-up.component';




@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AsideComponent,
    FooterComponent,
    ProductsComponent,
    HomeComponent,
    BuscadorComponent,
    NormalHeaderComponent,
    UserHeaderComponent,
    AdminHeaderComponent,
    UserProfileComponent,
    AdminProfileComponent,
    ViewMoreComponent,
    CardCarouselComponent,
    CardGridComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserSignUpComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    AngularFireStorageModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
