enum Color {
  BLACK = 'black',
  WHITE = 'white',
  RED = 'red',
  SILVER = 'silver',
}

class Car {
  brand: string;
  color: Color;
  doors: number;

  constructor(brand: string, color: Color, doors: number) {
    this.brand =brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log(`hoooooonk`)
  }

  turnOn(): void {
    console.log(`Vruum`)
  }

  // openTheDoor(door: ): void {
  //   console.log(`honk`)
  // }
}

