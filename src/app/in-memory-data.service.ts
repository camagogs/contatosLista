import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Contato } from './contatos/contato.model';

export class InMemoryDataService implements InMemoryDbService{

    createDb(): {}{

        let contatos: Contato[] = [
            {id: 1, nome: 'Fulano de tal', email: 'fulano@email.com', telefone: '(00) 0000-0000'},
            {id: 2, nome: 'Ciclano', email: 'ciclano@email.com', telefone: '(00) 1111-0000'},
            {id: 3, nome: 'Escatamaquio', email: 'escatamaquio@email.com', telefone: '(00) 2222-0000'},
            {id: 4, nome: 'Seu madruga', email: 'madruga@email.com', telefone: '(00) 3333-0000'},
            {id: 5, nome: 'Bob', email: 'bob@email.com', telefone: '(00) 4444-0000'}

        ];
        return {contatos};
    }

}