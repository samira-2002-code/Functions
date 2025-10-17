function inverserTableau(tab){
    let temp;
     let start=0;
     let end;
     end=tab.length-1;
     while (start<end) {
        temp=tab[start];
        tab[start]=tab[end]
        tab[end]=temp;
        start++;
        end--;
     }
     return tab

} 
console.log(inverserTableau([15,16,17,18,19]));
