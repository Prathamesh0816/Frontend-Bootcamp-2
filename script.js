/*function addBy7(num1){
    console.log("Function Declaration ");
    return num1 + 7;   
}
const way2 = function(num2){
    console.log("Function Expression");
    return num2 + 7;
}
const way3 = (num3) =>{
    console.log("Arrow Function")
    return num3 + 7;
}
console.log(addBy7(11));
console.log(way2(12));
console.log(way3(13));

let num1=parseInt(prompt("Enter Number 1 : "));
let num2=parseInt(prompt("Enter Number 2 : "));
function add(num1,num2){
    return num1+num2;
}
alert("Addition is : "+add(num1,num2));

let num=parseInt(prompt("Enter any number : "));
function isPrime(num){
    if(num==0 && num==1){
        alert("Enter Valid Number!!!!");
        return false;
    }
    for(let i=2;i<=num/2;i++){
        if(num%i==0){
            alert(`${num}`+" Is Not Prime ");
            return false;
        }
}
alert(`${num}`+" Is Prime ");
}
isPrime(num);*/

const num = parseInt(prompt("Enter Any Number : "));
function sumOfDigits(num){
    let sum = 0;
    while(num>0){
        sum = sum + num % 10;
        num = Math.floor(num/10);
        }
    alert(`The Sum Of Digits Is : ${sum}`);
}
sumOfDigits(num);
