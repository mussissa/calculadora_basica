import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CalcularService } from '../../services/calcular.service';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css',
})
export class CalculadoraComponent implements OnInit {
  @Input()
  valor: string = '';

  botoes: string[] = [];
  valorA: number = 0;
  valorB: number = 0;

  segundoParm: boolean = false;
  adiciona: boolean = false;
  subtrai: boolean = false;
  multiplica: boolean = false;
  divide: boolean = false;
  raiz: boolean = false;
  porcent: boolean = false;

  constructor(private calculoservice: CalcularService) {}

  ngOnInit(): void {
    this.botoes = ['C','√','%','÷','7','8','9','X','4','5','6','-','1','2','3','0','.','=','+',];

    console.log(this.botoes);
  }

  operacao(value: string) {
    this.valor += value;

    switch(value){
      case '+':
      case '-':
      case 'X':
      case '÷':  
      case '√':
      case '%':
        this.confOperacao(value);
        break;
      case '=':
        this.realizaCalculo();
        break;
      case 'C':
        this.resetaCalculadora(); 
        break; 
    }



  }
  private resetaCalculadora():void {
    this.valor = '';
    this.valorA = 0;
    this.valorB = 0;
    this.calculoservice.reset();
  }
  private realizaCalculo():void {
    this.valorB = parseFloat(this.valor)
    this.valor = this.calculoservice.calcular(this.valorA, this.valorB)
  }


  private confOperacao(operador: string):void {
    this.valorA = parseFloat(this.valor);
    this.calculoservice.defOperacao(operador);
    this.valor = ''
  }

}

