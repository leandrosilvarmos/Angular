import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio5',
  templateUrl: './exercicio5.component.html',
  styleUrls: ['./exercicio5.component.css']
})
export class Exercicio5Component implements OnInit {

  constructor() { }


  imagem1 = '/assets/imagem4.jpg';


  alterarImagem():void{
    if (this.imagem1 === '/assets/imagem4.jpg' ){
      this.imagem1 = '/assets/imagem1.jpg';
  } else {
    this.imagem1 = '/assets/imagem4.jpg';

  }
}

  ngOnInit(): void {
  }



}
