import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalcularService {

  private operador: string | null = null


  constructor() {}

  defOperacao(operador:string):void{
    this.operador = operador

  }

  reset():void{
    this.operador = null
  }

  calcular(valorA: number, valorB: number): string {
    switch (this.operador) {
      case '+':
        return (valorA + valorB).toString();
      case '-':
        return (valorA - valorB).toString();
      case 'X':
        return (valorA * valorB).toString();
      case '÷':
        return valorB !== 0 ? (valorA / valorB).toString() : 'Não pode dividir por zero';
      case '√':
        return Math.sqrt(valorA).toString();
      case '%':
        return ((valorA / 100) * valorB).toString();
      default:
        return 'Operação inválida';
    }


}


}
