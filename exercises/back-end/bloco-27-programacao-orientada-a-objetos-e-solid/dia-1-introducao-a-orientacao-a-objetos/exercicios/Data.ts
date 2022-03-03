//NÃO FINALIZADO

class Data {
  private _dia: number;
  private _mes: number;
  private _ano: number;

  constructor ( dia: number, mes: number, ano: number) {



    this._dia = dia;
    this._mes = mes;
    this._ano = ano;
  }

  get dia(): number {
    return this._dia
  }

  set dia (novoDia: number) {
    this._dia = novoDia;
  }

  get mes(): number {
    return this._mes
  }

  set mes (novoMes: number) {
    this._mes = novoMes;
  }
  
  get ano(): number {
    return this._ano
  }

  set ano (novoAno: number) {
    this._ano = novoAno;
  }
  
}

