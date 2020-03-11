import { Component, OnInit } from '@angular/core';
import { type } from 'os';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dizerOi(): void{
    alert:"Oi!";
  }

  conta(): void{


  const valor1 =  prompt("informe um valor");
  const valor2 = prompt("Informe um valor 2 ");
    const restultado = Number(valor1) + Number(valor2);
    alert(Number(restultado));



  }
}
