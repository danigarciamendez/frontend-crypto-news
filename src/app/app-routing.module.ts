import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CryptocurrenciesComponent } from "./views/cryptocurrencies/cryptocurrencies.component";
import { ExchangesComponent } from "./views/exchanges/exchanges.component";
import { AdministrationComponent } from "./views/administration/administration.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { CryptoDetailComponent } from "./views/crypto-detail/crypto-detail.component";
import { NewsComponent } from "./views/news/news.component";
import { ModifyNewComponent } from './views/administration/news/modify-new/modify-new.component';
import { CreateNewComponent } from './views/administration/news/create-new/create-new.component';
import { PreviewNewComponent } from './views/administration/news/preview-new/preview-new.component';


const routes: Routes = [
  {
    path: 'noticias',
    component: HomeComponent,
  },
  {
    path: 'noticias/:id',
    component: NewsComponent,
  },
  {
    path: 'criptomonedas',
    component: CryptocurrenciesComponent,
  },
  {
    path: 'criptomonedas/:name',
    component: CryptoDetailComponent,
  },
  {
    path: 'exchanges',
    component: ExchangesComponent,
  },
  {
    path: 'administracion',
    component: AdministrationComponent
  },
  {
    path: 'administracion/modificar-noticia/:id',
    component: ModifyNewComponent
  },
  {
    path: 'administracion/modificar-noticia/:id/previsualizar',
    component: PreviewNewComponent
  },
  {
    path: 'administracion/crear-noticia/:id',
    component: CreateNewComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegisterComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}