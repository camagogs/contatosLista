import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatoDetalheComponent } from './contato-detalhe.component';
import { ContatosListaComponent } from './contatos-lista.component';

const contatoRoutes: Routes = [
    {
        path: 'contato',
        component: ContatosListaComponent
    },

];
@NgModule({
    imports: [
        RouterModule.forChild(contatoRoutes)
    ],
    exports: [RouterModule]
})
export class ContatoRoutingModule {}