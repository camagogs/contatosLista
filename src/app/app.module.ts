import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import { ContatosComponent } from './contatos/contatos.component';
import { ContatosListaComponent} from './contatos/contatos-lista.component';
import { ContatoRoutingModule } from './contatos/contato-routing.module';
import { ContatoDetalheComponent } from './contatos/contato-detalhe.component';
import { ContatoService } from './contatos/contato.service';


@NgModule({
  declarations: [
    AppComponent,
    ContatosComponent,
    ContatosListaComponent,
    ContatoDetalheComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    ContatoRoutingModule,
    FormsModule
  ],
 
  providers: [
    ContatoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
