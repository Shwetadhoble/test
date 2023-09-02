/*1.Variable Declaration
Define a variable called myName and assign your name to it*/
let myName="shweta";
{
    console.log(myName)
}
/*2.	Data Types
What are the basic data types in JavaScript? List at least three.*/
//There are two types of js . 1st Primitive Type and 2nd Reference Type/
1// :- Primitive Data Type 
     let name="priya";  //string
     let x = true;      //Booleans
     let num = 10;     //Numbers
//2:- Reference Data Type
       // 1.object 2.Array 3.Function

/*3.	String Manipulation
Create a function called reverseString that takes a string as input and returns the reverse of that string.*/
        function reverseString (str)
        {
            return str.split('').reverse().join('')
        }
        console.log(reverseString("priya"))
//4.Write a JavaScript program that checks if a number is even or odd. The program should take a number as input and display “Even” or “Odd” accordingly./
const number = prompt("Enter a number: ");
if(number % 2 == 0)
{
    console.log("The number is even");
}
else 
{
    console.log("The number is odd");
}
/*	5.	Arrays
Create an array called fruits containing the names of three different fruits*/
let fruits;
fruits=['apple','banana','Kiwi'];
console.log(fruits)

/*6.	Loops
Write a for loop to print the numbers from 1 to 10*/
for(i=1;i<=10;i++)
{
    console.log(i)
}
/*13.	Array Methods
Write code to add an element to the end of an array and remove an element from the beginning of the array using JavaScript array methods.*/

const boys=["vishal","shubhum","pravin"];
delete boys[0];
console.log(boys);
boys.push("vijay");
console.log(boys);

/*25.	Array Sorting
Write JavaScript code to sort an array of strings in alphabetical order.*/
const boy=["h","d","e","z","j"];
boy.sort();
console.log(boy);

//22.Explain the difference between substring(), substr(), and slice() string methods in JavaScript. Provide examples for each./

//1.slice-(start or end)
let cars="BMW,Audi,Bentley";
let strpart=cars.slice(2,6)
console.log(strpart)
//2.substring--(start , end and negative)
console.log(cars.substring(3,7))
console.log(cars.substring(-3,7))
//3.substr--(start or length find hota hai)
console.log(cars.substr(4));