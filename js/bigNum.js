function bigNum(numberList){
    //imput validation
    if (typeof numberList !== 'object'){
        return 'Error: netinkamo tipo reiksme';
    }
    if (numberList.length === 0){
        return 'Error: Tuscias sarasas';
    }

    // Logika
    let bigNum = -Infinity;
    for (let i = 0; i < numberList.length; i++){
        if(typeof numberList[i] === 'number'){
            if (numberList[i] > bigNum){
            bigNum = numberList[i];
            console.log(bigNum);}
        }
    }
    if (bigNum === -Infinity){
        return 'Sarase nebuvo skaiciaus'
    }

    return bigNum;
      
}

console.log(bigNum([ 1 ]));
// //rezultatas: 1
console.log(bigNum( [ 1, 2, 3 ]));
// //rezultatas: 3
console.log( bigNum( [ -5, 78, 14, 0, 18 ] ) );
// //rezultatas: 78
console.log( bigNum( [ 69, 69, 69, 69, 66 ] ) );
// //rezultatas: 69
console.log( bigNum( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
// //rezultatas: -1

console.log('-------------');

console.log(bigNum([ 9, 5, 'asd' ]));
//9

console.log(bigNum([ 9, 'asd', 5 ]));
//9

console.log(bigNum([ 'asd', 9, 5 ]));
//9

console.log(bigNum([ 9, 'qwe', 'asd' ]));
console.log(bigNum([ 'qwe', 5, 'asd' ]));
console.log(bigNum([ 'asd', 'qwe', 5 ]));

console.log(bigNum([ 'asd', 'qwe', 'fgh' ]));

console.log('-------------');

//Klaidos
console.log(bigNum('pomidoras'));
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log(bigNum( [] ));
//rezultatas: “Pateiktas sąrašas negali būti tuščias.”
console.log(bigNum(123));
console.log(bigNum(true));

