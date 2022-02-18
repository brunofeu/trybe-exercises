"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const Seasons_1 = __importDefault(require("./Seasons"));
const Months_1 = __importDefault(require("./Months"));
const months = Object.values(Months_1.default);
const month = readline_sync_1.default.keyInSelect(months, "Escolha um mês do ano");
const seasonsSouth = {
    [Seasons_1.default.OUTONO]: [Months_1.default.MARCO, Months_1.default.ABRIL, Months_1.default.MAIO, Months_1.default.JUNHO],
    [Seasons_1.default.INVERNO]: [Months_1.default.JUNHO, Months_1.default.JULHO, Months_1.default.AGOSTO, Months_1.default.SETEMBRO],
    [Seasons_1.default.PRIMAVERA]: [Months_1.default.SETEMBRO, Months_1.default.OUTUBRO, Months_1.default.NOVEMBRO, Months_1.default.DEZEMBRO],
    [Seasons_1.default.VERAO]: [Months_1.default.DEZEMBRO, Months_1.default.JANEIRO, Months_1.default.FEVEREIRO, Months_1.default.MARCO],
};
const seasonsNorth = {
    [Seasons_1.default.OUTONO]: seasonsSouth[Seasons_1.default.PRIMAVERA],
    [Seasons_1.default.INVERNO]: seasonsSouth[Seasons_1.default.VERAO],
    [Seasons_1.default.PRIMAVERA]: seasonsSouth[Seasons_1.default.OUTONO],
    [Seasons_1.default.VERAO]: seasonsSouth[Seasons_1.default.INVERNO],
};
// const hemispheres = {
//   'Norte': seasonsNorth, 'Sul': seasonsSouth
// }
// const hemisphere = readLine.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério")
