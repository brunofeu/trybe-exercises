"use strict";
var Color;
(function (Color) {
    Color["BLACK"] = "black";
    Color["WHITE"] = "white";
    Color["RED"] = "red";
    Color["SILVER"] = "silver";
})(Color || (Color = {}));
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() {
        console.log(`hoooooonk`);
    }
    turnOn() {
        console.log(`Vruum`);
    }
}
