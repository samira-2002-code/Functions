const prompt=require("prompt-sync")();
function compterOccurrences(tab, valeur){
    let compter = 0;
    for(let i=0; i<tab.length;i++){
        if(tab[i]=== valeur){
            compter++;
        }
    }
return compter;
} 
console.log(compterOccurrences([18,20,22,24,30,22],22));