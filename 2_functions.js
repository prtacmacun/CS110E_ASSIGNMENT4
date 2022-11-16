//1. Let's create a function that calculates the factorial of a given number num.
function factorial(num){
    let i = 0;
    let fact = 1;
    while(i<num){
        fact *= num - i;
        i++;
    }
    return fact
    }
    
    
    

//2. Let's create a function that calculates the GCD of a given numbers num1 and num2 using the Euclidean extended algorithm. 
 function gcd(num1, num2){

    while(num1 !== num2){
        if(num1>num2){
            num1-= num2
        }
        else{
            num2-=num1
        }
}
return num1 || num2
}


//3. Let's create a fuction that calculates the LCM of two given numbers using the GCD function we just created.
function lcm(num1, num2){
    return (num1*num2)/gcd(num1, num2)
}


//4. Let's create a function that converts the given decimal number nto a hexadecial number.

/*
This is a short way:

function toHex(decimal){
    hex = decimal.toString(16)

    return hex
}

However, I created a function using the hint in the problem:
*/
function hex(num){
    let hex = "";

    while(num>0){
        let rem = num%16;
        let hexArray = ["A", "B", "C", "D", "E", "F"];
        if(rem<10){
            hex += rem;
        }
        else{
            hex += hexArray[rem-10];
        }

        num=Math.floor(num/16)
    }
    let i = hex.length - 1;
    let realHex = "";
    while(i>=0){
        realHex += hex[i];
        i--;
    }
    return realHex
}

module.exports =  {
    factorial: factorial,
    gcd: gcd,
    lcm: lcm,
    hex: hex
}

