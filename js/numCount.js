// i.	console.log( skaitmenuKiekisSkaiciuje( 5 ) );
// ii.	console.log( skaitmenuKiekisSkaiciuje( 781 ) );
// iii.	console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
// iv.	console.log( skaitmenuKiekisSkaiciuje( true ) );
// v.	console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
// vi.	console.log( skaitmenuKiekisSkaiciuje( NaN ) );

function numCount(number){
    const text ='' + number;
    //gaudome ne skaiciaus tipus
    if (typeof number !== 'number') {
        return 'Netinkamo tipo reiksme (turi buti skaicius)'
    } 
    // //gaudome skaiciaus tipa, bet ne skaicius, pvz.: NuN, Infinity
    // if (text === 'NaN') {
    //     return 'Netinkama reiksme'        
    // }      

    // //gaudome skaiciaus tipa, bet ne skaicius, pvz.: NuN, Infinity
    // if (text === 'Infinity') {
    //     return 'Netinkama reiksme'        
    // } 

    // //gaudome skaiciaus tipa, bet ne skaicius, pvz.: NuN, Infinity, -Infinity
    // if (text === '-Infinity') {
    //     return 'Netinkama reiksme'        
    // } 

    if (!isFinite(number)) {
        return 'Netinkama reiksme'  
    }
    // vietoje (isFinite(number) === false)

    let ilgis = text.length;

    //o jeigu tai desimtainis, tai eliminuojame taska

    if (number % 1 !==0) {
        ilgis--
    }

    //jeigu neigiamas skaicius, tai eliminuojame minusa

    if (number < 0) {
        ilgis--;
    }

    return ilgis;
    
}

console.log(numCount(781));
console.log(numCount(5));
console.log( numCount( true ) )
console.log( numCount( NaN ) )

console.log(numCount(3.14));
console.log(numCount(-20));
console.log(numCount(-3.14));
console.log(numCount(Infinity));
console.log(numCount(-Infinity));


// 3.14 % 1 === 0

//NaN yra skaiciaus tipo reiksme

//bendrinis patikrinimas || - arba && - ir
// if(typeof number !== 'number' ||
// isFinite(number)) === false) {
//     return 'Nenormalus skaicius'
// }