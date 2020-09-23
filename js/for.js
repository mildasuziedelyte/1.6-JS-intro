const sayHi = 'Labukas'
const sayBye = 'Ate';
const count = 2;

console.log('Pries cikla');

for (let i=0; i<count; i++) {
    console.log('--------');
    console.log(sayHi);
    console.log(sayBye);
}

console.log('Po PIRMO ciklo');
console.log('--------');



console.log('Pries cikla');

for (let i=0; i<count; i++) {
    console.log('--------');
    console.log(i, sayHi);
    console.log(i, sayBye);
}

// su i pries sayHi galima suzinoti kelintas kartas

console.log('Po ANTRO ciklo');
console.log('--------');

// const ir let 
// nuo tos vietos kur jie parasyti
// galioja tarp riestiniu skliausteliu ir giliau
// for atveju i galioja tik tol kol veikia cikas

console.clear();

// Susumuot skaicius intervale
// 0 - 4        10
// -50 - 50     0
// 0 - 100      5050
// -70 - 30     mazas neigiamas
// 574 - 815    didelis teigiamas
// 0 - 0        0

const nuo = 2;
const iki = 2;
let suma = 0;

for (let i = nuo; i <= iki; i++){
    suma = suma + i;
}

const rez = `Suma nuo ${nuo} iki ${iki} yra ${suma}.`

console.log(rez);
