// let haftaKuni = +prompt('hafta kununi yozing')
// switch (haftaKuni) {
//     case 1:
//         console.log('dushanba')
//         break;
//     case 2:
//         console.log('seshanba')
//         break;
//     case 3:
//         console.log('chorshanba')
//         break;
//     case 4:
//         console.log('payshanba')
//         break;
//     case 5:
//         console.log('juma')
//         break;
//     case 6:
//         console.log('shanba')
//         break;
//     case 7:
//         console.log('yakshanba')
//         break;

// }



// let numbers = +prompt('son kiriting')


// switch (numbers) {
//     case 2:
//         console.log(`${numbers} bu juft son`)
//         break;
//     case 4:
//         console.log(`${numbers} bu juft son`)
//         break;
//     case 6:
//         console.log(`${numbers} bu juft son`)
//         break;
//     case 8:
//         console.log(`${numbers} bu juft son`)
//         break;
//     case 10:
//         console.log(`${numbers} bu juft son`)
// }

let son1 = +prompt('son kiriting')
let son2 = +prompt('son kiriting')

if(son1>son2){
    alert(`${son1} bu son katta`)
} else if (son1<son2){
    alert(`${son2} bu son katta`)
} else if(son1=son2) {
     alert('bu sonlar teng')
}