// Online Javascript Editor for free
import { firstIsgreaterThenSecond } from './greaterOrLesser.js';
import { addedTwoNumbers } from './addOrsub.js';
// Write, Edit and Run your Javascript code using JS Online Compiler

export function isGreaterOrNot(num1,num2){
   return firstIsgreaterThenSecond(num1,num2,'greaterOrNot')
}
export function isGreaterThenOrEqual(num1,num2){
   return firstIsgreaterThenSecond(num1,num2,'greaterOrEqual')
}
console.log("Welcome to Programiz!");

export function addTwoNumbers(num1,num2){
   return addedTwoNumbers(num1,num2,'add')
}
export function subtractTwoNumbers(num1,num2){
   return addedTwoNumbers(num1,num2,"sub")
}