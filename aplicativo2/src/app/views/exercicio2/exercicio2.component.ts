import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio2',
  templateUrl: './exercicio2.component.html',
  styleUrls: ['./exercicio2.component.css']
})
export class Exercicio2Component implements OnInit {

  constructor() { }

  corona(palavra: string): string {
    return palavra.toUpperCase();
}


  ngOnInit(): void {
  }


}
