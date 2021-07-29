const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// REQUISITO 1
// Ataque de dragon
const dragonDamage = () =>
  Math.round(Math.random() * (dragon.strength - 15) + 15);
// console.log(dragonDamage())

//REQUISITO 2
// Ataquer de Warrior
const warriorDamage = () =>
  Math.round(
    Math.random() * ((warrior.weaponDmg - 1) * warrior.strength) +
      warrior.strength
  );
// console.log(warriorDamage())

//REQUISITO 3
// Ataque de Mage
const mageAtack = () => {
  if (mage.mana < 15) return console.log("Não possui mana suficiente");
  else {
    return {
      damage: Math.round(Math.random() * mage.intelligence + mage.intelligence),
      mana: mage.mana - 15,
    };
  }
};

// PARTE II

const gameActions = {
  warriorTurn: (callback, target) => {
    warrior.damage = callback();
    target.healthPoints -= warrior.damage;
  },

  mageTurn: (callback, target) => {
    mage.damage = callback().damage;
    mage.mana = callback().mana;
    target.healthPoints -= mage.damage;
  },

  dragonTurn: (callback, target1, target2) => {
    dragon.damage = callback();
    target1.healthPoints -= dragon.damage;
    target2.healthPoints -= dragon.damage;
  },
  endTurn: () => {
    console.log(battleMembers);
  },
};

gameActions.warriorTurn(warriorDamage, dragon);
gameActions.mageTurn(mageAtack, dragon);
gameActions.dragonTurn(dragonDamage, warrior, mage);
gameActions.endTurn();
