let n = 5;
let i = 1;
let plus = "+";

while(i<n){
    let space = " ".repeat(n-i);
    console.log(space + plus);
    plus += "+";
    i++;
}
console.log(plus);