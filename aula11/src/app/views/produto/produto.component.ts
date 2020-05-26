import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {


    produtos: Array<Produto>;


  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
  }

  listarProdutos(){
    this.produtoService.listarProdutos().subscribe(arrayProdutos => {
      this.produtos = arrayProdutos;
    });


  }

}
