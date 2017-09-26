import './util/rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import { ContatosComponent } from './contatos/contatos.component';
import { ContatosListaComponent} from './contatos/contatos-lista.component';
import { ContatoRoutingModule } from './contatos/contato-routing.module';
import { ContatoDetalheComponent } from './contatos/contato-detalhe.component';
import { ContatoService } from './contatos/contato.service';
import { DialogService } from './dialog.service';
import { ContatoBuscaComponent } from './contatos/contato-busca.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatosComponent,
    ContatosListaComponent,
    ContatoDetalheComponent,
    ContatoBuscaComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    ContatoRoutingModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
 
  providers: [
    ContatoService,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
