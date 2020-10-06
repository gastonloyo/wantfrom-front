import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//inicio servicios
import{ CargarScriptsService} from "./cargar-scripts.service";

//fin servicio
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AsideComponent } from './componentes/aside/aside.component';
import { ProductsComponent } from './componentes/products/products.component';
import { FooterComponent } from './componentes/footer/footer.component';
import Popper from 'popper.js';
import { environment } from "../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { HomeComponent } from './home/home.component';
import { VermasComponent } from './componentes/products/vermas/vermas.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AsideComponent,
    FooterComponent,
    ProductsComponent,
    HomeComponent,
    VermasComponent,
    InicioSesionComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  providers: [CargarScriptsService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
