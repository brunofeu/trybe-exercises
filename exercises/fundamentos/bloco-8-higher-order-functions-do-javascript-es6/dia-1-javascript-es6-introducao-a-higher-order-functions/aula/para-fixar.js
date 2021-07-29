const wakeUp = () => console.log('Acordando!!');

const coffe = () => console.log('Bora tomar café!!');

const sleep = () => console.log('Partiu dormir!!');

const doingThings = (func) => func();

doingThings(wakeUp);
doingThings(coffe);
doingThings(sleep);
