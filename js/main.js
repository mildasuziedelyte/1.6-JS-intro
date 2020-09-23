"use strict";

//4+7=11

const pirmas = 4;
const antras = 7;

const suma = pirmas + antras;

console.log(pirmas)
console.log(antras)
console.log(suma)

// const nekintamas
// let - gali buti kintamas, galima over-writtint, naudojama naujausia arba paskutinė priskirta reikšmė

let nuotaika = 'gera';
console.log(nuotaika);

nuotaika = 'bloga';
console.log(nuotaika);

console.log(4 + 7);

const rez = 2 + 2 * 2;
console.log(rez);

const hi = 'Labas';
const mor = 'rytas';

const sayHi = hi + ' ' + mor;

console.log(hi, mor);
console.log(sayHi);

const name = 'Vardenis';
const surname = 'Pavardenis';
const fullName = name + ' ' + surname;

console.log('Hi, I am ' + fullName);

// primityvūs kintamieji
const paz1 = 1;
const paz2 = 10;
const paz3 = 7;
const paz4 = 5;
const paz5 = 8;

// sąrašasm array, list, masyvas
// kompleksiniai kintamieji
const marks = [1, 10, 7, 5, 8, 4];

const marksPaz = [paz1, paz2, paz3, paz4];

console.log(marks);
console.log(marksPaz);

//const fruits = ['orange', 'apple', 'banana', 'pineapple', 'kiwi']

//console.log(fruits);

console.log(marks);

const sum = marks[0] + marks[1] + marks[2] + marks[3] + marks[4] + marks[5];
// let sum = 0; let pazNum = 0;
//sum = sum + marjs [pazNum++]
//sum = sum + marjs [pazNum++]
//jei ++pazNum tai pazNum = -1

const count = marks.length;
const average = sum / count;

console.log('Marks average:', sum, '/', count, '=', average);

const num = [1, 2, 3, 4, 5];

let numSum = 0;
let index = 0;

numSum = numSum + num[index++];
console.log(numSum);

numSum = numSum + num[index++];
console.log(numSum);

numSum = numSum + num[index++];
console.log(numSum);

numSum = numSum + num[index++];
console.log(numSum);

numSum = numSum + num[index++];
console.log(numSum);

console.log("----------------------");

let skaicius = 5;

console.log(skaicius++);
console.log(skaicius);
console.log(skaicius++);
console.log(skaicius);
console.log(skaicius++);
console.log(skaicius++);
console.log(skaicius++);
console.log(skaicius++);

console.log(++skaicius);
console.log(++skaicius);
console.log(++skaicius);
console.log(++skaicius);

console.log("----------------------");

skaicius = 5;

skaicius++;
// siuo atveju gali buti ir ++skaicius

console.log(skaicius);

console.log("----------------------");

let money = 0;

money += 7;
//prie manes pacio prideti ir isaugoti 7, vietoje money = money + 7

console.log(money, 'pegenu');

money += 15;

console.log(money, 'pegenu');

money = money + 31;

console.log(money, 'pegenu');

// matematiai operatoriai:
// paprasti +, -, *, /
// increment: ++ (before, after) - prideda vieną vienetą
// decrement: -- (before,after) - atima vieną vienetą
// update: +=, -=, *=, /=


console.log("----------------------");

const fruits = ['orange', 'apple', 'banana', 'pineapple', 'kiwi'];

console.log(fruits);

console.log(fruits[0] + ', ' + fruits[1] + ', '  + fruits[2] + ', '  + fruits[3] + ', '  + fruits[4]);

let fi = 0;

console.log(fruits[fi++] + ', ' + fruits[fi++]  + ', ' + fruits[fi++]  + ', ' + fruits[fi++]  + ', ' + fruits[fi++]);


let fidi = -1;
console.log(fruits[++fidi] + ', ' + fruits[++fidi]  + ', ' + fruits[++fidi]  + ', ' + fruits[++fidi]  + ', ' + fruits[++fidi]);

console.log("2020 09 23 ----------------------");


const pirmasis = 4;
const antrasis = 10;
const sumasuma = pirmas + antras;

const rezas = 'Skaiciu ' + pirmasis + ' ir ' + antrasis + ' suma ' + sumasuma;

console.log(rezas);

console.log("----------------------");

const word = 'MisterSir';
const helloSir = 'Hello' + word + '. How do you do?'

//const helloSir = 'Hello, vardenis,\
//How do you do?';

//const HTML = '<header>\
 //           <img src="#" alt="Logo"/>\
 //           <nav>\
 //               <a href="#">Home</a>\
  //              <a href="#">Services</a>\
 //               <a href="#">Contact us</a>\
  //          </nav>\
 //           </header>';

const links = ['Home', 'Services', 'Contact Us']

const HTML = '<header>\n\
    <img src="#" alt="Logo"/>\n\
    <nav>\n\
      <a href="#">links[0] + </a>\n\
     <a href="#">links[1] +</a>\n\
     <a href="#">links[2] +</a>\n\
    </nav>\n\
</header>';

//nauja eilute \n\

console.log(HTML);

// Viengubos(') ir dvygubos (").

//const pradzia = "Viengubos(') ir";
//const pabaiga = ' dvygubos (").';

//alternatyvus budas, \=esc - nelaikyk kabutes kaip pabaigos
// jei norim \ rasom \\ du, jeigu norim \\ tai reik rasyt keturis \\\\

const pradzia = 'Viengubos(\') ir \\\\ dvygubos (").'
console.log(pradzia);

//const full = pradzia + pabaiga;

//console.log(full);

//GERIAU, backtickas pasviros viengubos kabutes po esc

const HTML2 = `bla bla bla
bla bla bla
bla bla`;

console.log(HTML2);

const vardas = 'Serloko'

//const imgAlt = vardas + 'nuotrauka';
const imgAlt = `${vardas} nuotrauka`;
const links2 = ['A', 'bb', 'CcC'];

const HTML3 = ` 
<header>
    <img src="#" alt="${imgAlt}"/>
    <nav>
        <a href="#">${links2[0]}</a>
        <a href="#">${links2[1]}</a>
        <a href="#">${links2[2]}</a>
    </nav>
</header>`;

console.log(HTML3);

console.log("----------------------");







