function dvigubaSuma(a, b){
    return (a + b) * 2;
}

const pirmaSuma = dvigubaSuma(7, 8);
console.log(pirmaSuma); //30


console.clear()

//automobilio asys, priekine ir galine, dvi
//bandys suskaiciuoti asiu kieki

function asiuSkaicius(ratuKiekis){
    return ratuKiekis / 2;
}

console.log(asiuSkaicius(4));  //2
console.log(asiuSkaicius(6));  //3
console.log(asiuSkaicius(12));  //6

console.clear()

/**
 * Funkcija skirta rasti asiu kieki automobilyje is duotu ratu skaiciaus
 * @param {number} r - ratu kiekis
 * @returns - {number} asiu skaicius
 */
function asiuSkaicius(r){
    if (r === 4){
        return 2;
    } else {
        return (r - 2) / 4 + 1;
    }
}

// jei ratu kiekis keturi tai return (?) 2, o kitu atveju (:) return formule
// return ratuKiekis === 4 ? 2 : (ratuKiekis + 2) / 4;

console.log(asiuSkaicius(4));   //2 -> 2+2
console.log(asiuSkaicius(10));  //3 -> 2+4+4
console.log(asiuSkaicius(14));  //4 -> 2+4+4+4
console.log(asiuSkaicius(18));  //5 -> 2+4+4+4+4

console.clear()

//viskas ka mes turim eglutes aukstis

// 5 aukstu eglute
//   *         4 tarpai ir 1 zvaigzde  / 4 simboliai
//  ***        3 tarpai ir 3 zvaigzdes / 5 simboliai
// *****       2 tarpai ir 5 zvaigzdes / 6 simboliai
//*******      1 tarpas ir 7 zvaigzdes / 7 simboliai
//   #

// function tree(aukstis){
//     for (let i = 1; i <= aukstis; i++){
//         let aukstas = '';
//         for (let index = 0; index < array.length; index++) {
//             aukstas = ''+ ' '
//         }
//         console.log(' '*(aukstis-1) + '*'*i )
//     }
//     console.log(' '*(aukstis-1) + "#")
// }
// tree(5);

//  *
// ***
//*****
//  #

function stringRepeat(string, count){
    let text = '';
    for (let i = 0; i < count; i++) {
        text += string;
    }
    return text;
}

// console.log(stringRepeat('*', 1))
// console.log(stringRepeat('*', 3))
// console.log(stringRepeat('*', 5))
// console.log(stringRepeat('#', 1))


function tree(height){ 
    //virsune
    console.log(stringRepeat(' ', height - 1)+ stringRepeat('|', 1));

    //zemiau esantys sluoksniai
    for (let i = 1; i < height; i++) {
        console.log(stringRepeat(' ', height - 1 - i) + '@' + stringRepeat('*', i * 2 - 1)+'@');
    }

    // kamienas
    console.log(stringRepeat(' ', height - 1) + stringRepeat('#', 1))
}

tree(5);

// for (let index = height; index > 0; index--) {
//     console.log(stringRepeat(' ', i - 1));
// }

// let sluoksnis = '';
// //atstumiame is kaires puses
// sluoksnis += stringRepeat(' ', height -1 -1);
// //uzdedu kairi zaisliuka
// sluoksnis += '@';
// //piesiu eglutes sakas
// sluoksnis +=stringRepeat('*', i * 2 - 1);
// //uzdedu deisni zaisliuka
// sluoksnis += '@';