// IF palyginimo operatoriai:
// naudotini: >, <, >=, <=, === (lygu), !== (nelygu)
// nenaudotini: == (lygu), != (nelygu)

//

const limit = 21;
const age = 21;

if (limit === age) {
    console.log('Happy Birthday!'); 
}

if (age !== 0) {
    console.log("Hmm...");    
}

if (limit <= age) {
    console.log('Yap, saldainiai tavo : )'); 
} else {
    console.log('Negausi : (');
}

//

console.clear();

const color = 'raudonos';

if (color === 'melyna') {
    console.log('Tyros sielos...');    
} else {
    if (color === 'zalios') {
        console.log('Pazaliave..');
    } else {
        if (color === 'rudos') {
            console.log('Parudes..');
        } else {
        console.log('Velniu priede...');
        }
    }
}

console.clear();

const month = 'Kovas';

if (month === 'Sausis') {
    console.log(1);
} else if (month === 'Vasaris') {
    console.log(2);
} else if (month === 'Kovas') {
    console.log(3);
} else if (month === 'Balandis') {
    console.log(4);
} else { 
    console.log('........');
}

console.clear();















