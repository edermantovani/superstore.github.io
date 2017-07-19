import { Injectable } from '@angular/core';

@Injectable()
export class PessoasService {

  totalPessoas:any = 0;

  lista:any[] = [
    {
      nome:'Fulano',
      idade:16,
      descricao:'Fulano eh um cara <strong>mto legal</strong>'
    },
    {
      nome:'Beltrano',
      idade:17
    },
    {
      nome:'Ciclano',
      idade:18
    },
    {
      nome:'Deltrano',
      idade:19
    },
    {
      nome:'Eltrano',
      idade:20
    }
  ]

  constructor() { }


  pessoa_selecionada:any = {};

  selecionaPessoa(pessoa:any){
    this.pessoa_selecionada = pessoa;
  } 

  pegarData(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
     
    var dia =  dd.toString();
    var mes = mm.toString();

    if(dd<10) {
    dia = '0'+dd
    } 

    if(mm<10) {
    mes = '0'+mm
    }  

    return dia + '/' + mes + '/' + yyyy;
  }
}
