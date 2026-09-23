import { Component } from '@angular/core';

interface ProdutoCadastro {
  id: number;
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-ex12',
  templateUrl: './ex12.html',
  styleUrl: './ex12.css',
  standalone: false
})
export class CadastroComponent {
  nome = '';
  quantidade: number | null = null;
  mensagemErro = '';

  produtos: ProdutoCadastro[] = [
    { id: 1, nome: 'Teclado', quantidade: 10 },
    { id: 2, nome: 'Mouse', quantidade: 5 }
  ];

  private proximoId = 3;

  cadastrar(): void {
    this.mensagemErro = '';

    if (!this.nome || !this.nome.trim()) {
      this.mensagemErro = 'Informe o nome do produto.';
      return;
    }

    if (this.quantidade === null || this.quantidade < 0) {
      this.mensagemErro = 'Informe uma quantidade válida (maior ou igual a zero).';
      return;
    }

    this.produtos.push({
      id: this.proximoId++,
      nome: this.nome.trim(),
      quantidade: this.quantidade
    });

    this.nome = '';
    this.quantidade = null;
  }

  excluir(produto: ProdutoCadastro): void {
    this.produtos = this.produtos.filter(p => p.id !== produto.id);
  }
}