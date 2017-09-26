import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Observable} from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { Contato } from './contato.model';
import { ContatoService } from './contato.service';

@Component({
    moduleId: module.id,
    selector: 'contato-busca',
    templateUrl: 'contato-busca.component.html' 
})

export class ContatoBuscaComponent implements OnInit {
    
    contatos: Observable<Contato[]>;
    private termosDaBusca: Subject<string> = new Subject<string>();

    constructor(
        private contatoService: ContatoService,
        private router: Router 

    ) { }

    ngOnInit(): void {
        this.contatos = this.termosDaBusca 
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term =>{
                console.log('Fez a busca: ', term);
                return term ? this.contatoService.search(term) : Observable.of<Contato[]>([]);
            }).catch(err =>{
                console.log(err);
                return Observable.of<Contato[]>([])
            });

        this.contatos.subscribe((contatos: Contato[]) => {
            console.log('retornou do servidor:' ,  contatos)
        });
     }  

    search(termo: string): void{
        this.termosDaBusca.next(termo);
    }

    verDetalhe(contato: Contato): void{
        let link = ['contato/save', contato.id];
        this.router.navigate(link);
    }

}