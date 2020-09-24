function tusciafunkcija() {
    return false;
}

console.log(tusciafunkcija());

// for (let i = 0; i < 20; i++) {
//     console.log(tusciafunkcija());
    
// }

console.log('-------------------');

function daugyba(skaicius1, skaicius2) {
    return skaicius1 * skaicius2;    
}

console.log(daugyba(2, 3));
console.log(daugyba(-2, 4));


console.log('-------------------');

function interval (nuo, iki, daliklis){
    let count = 0;

    for (let i = nuo; i < iki; i++) {
        if (i % daliklis === 0) {
            count++;        
        }
    }

    const rez = `Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${count} vienetai.`

    return rez
}

console.log(interval (0, 11, 3));


console.log('-------------------');

function abrakadabra(){
    return console.log('zimbi ba bambi');
}

console.clear();

abrakadabra();

console.log('--------------');

console.log(abrakadabra());

console.log('-------------------');


