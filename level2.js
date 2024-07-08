//Array 

fooditem=['Apple','Mango','Lichi','Banana'];
console.log(fooditem);

fooditem.push('Dragon');
fooditem.pop();

//functiom

function myFunction(){
    console.log("Hi,there,I am Emon");
    console.log("My University name UITS");
}

myFunction();
myFunction();

function hello(msg){ 
    //parametr->input
     console.log(msg);
}

hello("I love JS"); //argumnet

function sum(x,y){
   s=x+y;
   return s;
}

let val1=sum(6,7);
console.log(val1);

function sub(p,q){
    d=p-q;
    return d;
}

let val2=sub(6,3);
console.log(val2);

//Arrow Function for Modern JS

const arrowsum=(a,b)=>{
    console.log(a+b);
}

arrowsum(3,6);


const arrowmul=(m,n)=>{
    console.log(m*n);
}
arrowmul(4,5);

//create a function using "function" keyword that takes a string an argument returns
//the number of vowels:

function countVowel(str){
    let count=0;
    for(const char of str ){
        if(
            char === 'a' ||
            char === 'e' ||
            char === 'i' ||
            char === 'o' ||
            char === 'u'

        ){
            count++;
        }
        
    }
    console.log(count);
}

countVowel("uits");

//forEach--->method  //callback function

let arr =["Dhaka","Sylet","Chittagong"];

arr.forEach((val) => {
      console.log(val.toUpperCase());
});

let arry =["Padma","Meghna","Jamuna"];

arry.forEach((value)=>{
    console.log(value.toUpperCase());
});

//Practise: For given a array of numbers, to print the square of each value using the forEach Loop

let number=[2,3,4];

number.forEach((values)=>
{ 
    console.log(values*values);
});


//MAP : Creates a new array with each array operation

let p=[2,3,5];

let x= p.map((v)=>
    {
        console.log(v);
    }

);

//filter

let y=[1,2,3,4,5,6,7.8];

let  eveny=y.filter((m)=>
{
    return m%2==0;
});

console.log(eveny);

//Reduce method

let f=[1,2,3,4];
const output=f.reduce((res,cur)=>{
      return res + cur ;
});

console.log(output);

// We are given array of marks of student.
//Filter out of the marks of students that scored 90

let marks=[85,86,95,94,92,90,97];

let result = marks.filter((z)=>{
       return z>=90;
});
console.log(result);

//Take a number n as input from user
//Create an array of number from 1 to n
//Use the reduce method to calculate sum of all numbers in the array
//Use the reduce method to calculate product to all numbers in the array

let n=prompt("Enter the number:");
let arrays=[];
let suma=0;
for(i=1;i<n;i++){
   arrays[i-1]=i;
   suma=suma+i;  
}

console.log(arrays);
console.log("The total element value is :",suma);

let factorial=arrays.reduce((resu,curr)=>
{
          return resu*curr;
});
console.log("Multiplying number is :",factorial);