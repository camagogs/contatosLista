import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContatoDetalheComponent } from './contatos/contato-detalhe.component';


const appRoutes : Routes = [
    {
        path: '',
        redirectTo:'/contato',
        pathMatch: 'full'
    },
    {
        path:'contato/save',
        component: ContatoDetalheComponent

    },
    {
        path: 'contato/save/:id',
        component: ContatoDetalheComponent 
    }

]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
 
export class AppRoutingModule {}