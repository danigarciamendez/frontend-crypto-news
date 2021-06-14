import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu.component';
import { NoticiaPrincipalComponent } from './components/noticias/noticia-principal/noticia-principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TablaGanPerComponent } from './components/tablas/tabla-gan-per/tabla-gan-per.component';
import { HomeComponent } from './views/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CryptocurrenciesComponent } from './views/cryptocurrencies/cryptocurrencies.component';
import { ExchangesComponent } from './views/exchanges/exchanges.component';
import { AdministrationComponent } from './views/administration/administration.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule ,FormsModule } from "@angular/forms";
import { RegisterComponent } from './components/register/register.component';
import { UsersService } from "./services/users.service";
import { AuthHeaderInterceptor } from './shared/auth-header.interceptor.service';
import { AuthStateService } from "./shared/auth-state.service";
import { JwtService } from "./shared/jwt.service";
import { NoticiasPeqComponent } from './components/noticias/noticias-peq/noticias-peq.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CryptocurrenciesService } from "./services/cryptocurrencies.service";
import { InfoCryptoComponent } from './components/info-crypto/info-crypto.component';
import { NewsService } from './services/news.service';
import { CryptoMinComponent } from './components/crypto-min/crypto-min.component';
import { CryptoDetailComponent } from './views/crypto-detail/crypto-detail.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NoticiaCryptoComponent } from './components/noticias/noticia-crypto/noticia-crypto.component';
import { NewsComponent } from './views/news/news.component';
import { CreateNewComponent } from './views/administration/news/create-new/create-new.component';
import { ModifyNewComponent } from "./views/administration/news/modify-new/modify-new.component";
import { PreviewNewComponent } from './views/administration/news/preview-new/preview-new.component';
import { TablaCryptosComponent } from './components/tablas/tabla-cryptos/tabla-cryptos.component';
import { TablaNoticiasComponent } from './components/tablas/tabla-noticias/tabla-noticias.component';
import { TablaUsuariosComponent } from './components/tablas/tabla-usuarios/tabla-usuarios.component';
import { DialogoConfirmacionComponent } from './components/dialogo-confirmacion/dialogo-confirmacion.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { GraficoComponent } from './components/grafico/grafico.component';
import { ChatComponent } from './components/chat/chat.component';





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NoticiaPrincipalComponent,
    TablaGanPerComponent,
    HomeComponent,
    CryptocurrenciesComponent,
    ExchangesComponent,
    AdministrationComponent,
    LoginComponent,
    RegisterComponent,
    NoticiasPeqComponent,
    FooterComponent,
    InfoCryptoComponent,
    CryptoMinComponent,
    CryptoDetailComponent,
    NoticiaCryptoComponent,
    NewsComponent,
    CreateNewComponent,
    ModifyNewComponent,
    PreviewNewComponent,
    TablaCryptosComponent,
    TablaNoticiasComponent,
    TablaUsuariosComponent,
    DialogoConfirmacionComponent,
    GraficoComponent,
    ChatComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatDialogModule, 
    MatButtonModule, 
  ],
  providers: [
    UsersService,
    AuthStateService,
    JwtService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHeaderInterceptor,
    multi: true
    },
    CryptocurrenciesService,
    NewsService,
    
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogoConfirmacionComponent
  ]
})
export class AppModule { }
