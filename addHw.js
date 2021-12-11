//HW #1
// let arr=[1,2,3,4,5]
// let sum= 0;
// for(let i=0; i<arr.length; i++)
// {
//   sum += arr[i]   //sum= sum+arr
// }
// console.log(sum)


//  HW # 2

// let prompt= require('prompt-sync')();
// let userInput= Number(prompt('enter a number'));
// let arr=[2,4,5,6,4,8,9,10,9];
 
// let index=0
// for (let i = 0; i < arr.length ; i++)
// {
//     if (arr[i]== userInput) {
//         index=i
//         break;
//     }
// }  
//     console.log (userInput, index)


//  HW # 3


let  longestString =['red', 'purple', 'chocolate', 'blue', 'yellow'];
 
    let longestWord='  ';
    for (let i = 0; i < longestString.length; i++) 
    {
    if (longestString[i].length > longestWord.length)
    longestWord = longestString[i];
    }

 
    console.log(longestWord)
 