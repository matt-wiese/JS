// const text = 'apple';
// let fruitNm = 0;

// switch (text) {
//     case 'banana':
//         console.log('wow I love bananas');
//         fruitNm = 1;
//         break;        
//     case 'apple':
//         console.log(`I don't like apples`);
//         fruitNm = 2;
//         break;        
//     case 'avocado':
//         console.log(`at fruit is this`);
//         fruitNm = 3;
//         break;
//     default:
//         console.log(`what fruit???`);
// }


let userInput = prompt(`Tell me a fruit`);
let convertedValue = userInput.toLowerCase();
console.log(convertedValue);

switch (convertedValue) {
    case 'kiwi':
        alert(`Kiwi a;dfjgha;djfh`);
        break;
    case 'banana':
        alert('Banana aodf;hads;fh');
        break;
    case 'apple':
        alert('Apple aodf;hads;fh');
        break;
    default:
        alert(`what`);
}