class Cliente {
  private _nome: string;

  constructor(nome: string) {
    this._nome = nome;
  }

  get nome(): string {
    return this._nome
  }

  set nome(novoNome: string) {
    this._nome = novoNome;
  }
}

class Pedido {
  private _cliente: Cliente;
  private _items: Item[];
  private _pagamento: string;
  private _desconto?: number;

  constructor(cliente:Cliente, items: Item[], pagamento: string, desconto?: number) {
    this._cliente = cliente;
    this._items = items;
    this._pagamento = pagamento;
    this._desconto = desconto;
  }

  get cliente(): Cliente {
    return this._cliente;
  }

  set cliente(novoCliente: Cliente) {
    this._cliente = novoCliente;
  }

  get items(): Item[] {
    return this._items;
  }

  set items(novoItem: Item[]) {
    this._items = novoItem;
  }

  
  get pagamento(): string {
    return this._pagamento;
  }
  
  set pagamento(novoPagamento: string) {
    this._pagamento = novoPagamento;
  }

  get desconto(): number {
    return this._desconto;
  }

    
  set desconto(novoDesconto: number) {
    this._desconto = novoDesconto;
  }

  valorTotal(): number {
    return this.items.reduce((acc, { preco }) => {
      acc += preco;
      return acc
    }, 0)
  }

  valorComDesconto(): number {
    return this.valorTotal()*(1 - this.desconto)
  }
}

class Item {
  private _nome: string;
  private _preco: number;

  constructor (nome: string, preco: number) {
    this._nome = nome;
    this._preco = preco;
  }

  get nome(): string {
    return this._nome
  }

  set nome(novoNome: string) {
    this._nome = novoNome;
  }

  get preco(): number {
    return this._preco
  }

  set preco(novoPreco: number) {
    this._preco = novoPreco;
  }
}

const client = new Cliente('João');

const sandwiche = new Item('Sandwiche Natural', 5.00);
const juice = new Item('Suco de Abacaxí', 5.00);
const dessert = new Item('Gelatina de Uva', 2.50);

const order = new Pedido(client, [sandwiche, juice, dessert], 'dinheiro', 0.10);

console.log(order);

console.log(order.valorTotal())
console.log(order.valorComDesconto())