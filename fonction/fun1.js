const prompt=require("prompt-sync")();
function sommetableux(tab) {
    let sum = 0;
    for (let i = 0; i < tab.length; i++) {
        sum += tab[i];
    } 
    return sum;
}

console.log(sommetableux([6, 7, 8, 9, 10]));

let resultat = sommetableux([6, 7, 8, 9, 10]);
console.log(resultat);
