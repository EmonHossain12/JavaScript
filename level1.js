//logical operator :
let a=6;
let b=5;

console.log("a>b",a>b);
console.log("a<b",a<b);
console.log("a===b:",a===b);
console.log("a!=b",a!=b);

//using 2 condition:  
//using (and operation)

let con1=a>b; //true
let con2=a===6; //true

console.log("con1 && con2 :", con1 && con2);

// using or opeartion:

console.log("con1 or con2 :",con1 || con2);

// using not operation :
console.log("!(6<5) :",!(a === 6));

//Logical Condition if statement :

let age=17;

if(age>18){
    console.log("You are eligible for vote");
}
else{
    console.log("You are not eligible");
}

let mode="dark";
let color;

if(mode === "megenda"){
    color="black";
    console.log(color);
}
else{
    color="white";
    console.log(color);
}

//user input :

let num= 56;
console.log(num);

if(num%2 === 0){
    console.log("The number is Even");
}
else if ( num === 0){
    console.log("The number is zero");
}
else{
    console.log("The number is odd");
}

//practice Q2: Number Grading;

/*let score = prompt("Enter your score:");*/
console.log("Your marks is:",score);

if( score>=90 && score<=100){
    console.log("A+");
}else if( score>=80 && score<=89) {
    console.log("A-");

}else{
    console.log("Fail");
}

//for loop 

for(i=1;i<10;i++){
    console.log(i);
}

