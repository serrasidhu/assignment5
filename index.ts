//Write a program that uses filter to remove all negative numbers from an array of numbers

let num:number[]=[1,-2,3,-4,5,-6,7,-8,9,-10]
let array=num.filter((num)=>{
   return num >= 0
  }
 )
console.log(array);


//Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
let array_Num:number[]=[1,2,3,4,5]
let number=array_Num.map((array_Num)=>{
  return array_Num / 2
}
)
console.log(number);


//Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
let cTemp:number[]=[0,10,20,30,40]
let cToF=cTemp.map((cTemp)=>{
  return (cTemp* 9/5) + 32
}
)
console.log(cToF);


//Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
let odd_Num:number[]=[3, 6, 9, 12, 15, 18]
let arr=odd_Num.filter((odd_Num)=>
  {return odd_Num % 2 !==0})
.map((odd_Num)=>
  {return odd_Num*2})
console.log(arr);

  
// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
let arr_Num:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let even_Num=arr_Num.filter((arr_Num) =>
  {return arr_Num % 2==0})
.map((arr_Num)=>
  {return arr_Num**2})
console.log(even_Num)


// Given an array of strings ["apple", "banana", "cherry", "date", "grape"],
//  use the filter method to create a new array containing only the fruits with more than 5 characters.
let fruits:string[]=["apple", "banana", "cherry", "date", "grape"]
let fruits_characters=fruits.filter((fruits)=>
  {return fruits.length>5}
)
console.log(fruits_characters);


// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"],  use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
let names:string[]= ["Alice", "Bob", "Charlie", "David", "Emily"]
 names.forEach((names) =>
 {console.log(names,'!');
});
