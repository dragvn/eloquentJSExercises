// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

    // let str = ''
    // for(i=1;i<=7;i++){
    //     console.log(str += '#')
    // }
/********************************** */
// FIZZBUXX

    // for(i=1; i<=100; i++){
    //     switch(true){
    //         case (i%15 === 0): console.log('fizzbuxx'); break;
    //         case (i%5 === 0): console.log('buxx'); break;
    //         case (i%3 === 0): console.log('fizz'); break;
    //         default: console.log(i); break;
    //     }
    // }
/******************************** */

// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
// At each position of the grid there is either a space or a "#" character. 
// The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

//string should be ' # # # #\n' printed 8 times
//make the string
//print it 8 times


/**************************** */
// Minimum
// The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. 
//Write a function min that takes two arguments and returns their minimum.

// // Your code here.
    // const minOfTwo = (num1,num2) => num1 < num2 ? num1 : num2
    // console.log(minOfTwo(0, 10));
    // // // → 0
    // console.log(minOfTwo(0, -10));
    // // // → -10

/****************************** */
// Recursion
// We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. 
//Here’s another way to define whether a positive whole number is even or odd:

// Zero is even.

// One is odd.

// For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

// // Your code here.
    // const isEven = (n) => {
    //     n = Math.abs(n);
    //     if(n===0) return true;
    //     else if (n===1) return false;
    //     else return (isEven(n-2))
    // }
    // console.log(isEven(50));
    // // // → true
    // console.log(isEven(75));
    // // // → false
    // console.log(isEven(-1));
    // // // → ??
    //***HAD TO LOOK THIS UP, DONT FEEL TOO GOOD ABOUT RECURSION 11/15/22** */

    /********************************* */
//     Bean counting
// You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). 
// The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

// // Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
// const countBs = (str) => {
//     let count = 0;
//     for(i=0;i<=str.length-1;i++){
//         if(str[i]==='B'){
//             count += 1;
//         }
//     }
//     console.log(`The letter B occurs ${count} times in this string`)
// }
// countBs('bbbBBbbbB')
// // Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). 
// // Rewrite countBs to make use of this new function.

// // // Your code here.
// const countChar = (str, charToCount) => {
//     let count = 0;
//     for(i=0;i<=str.length-1;i++){
//         if(str[i]===charToCount){
//             count += 1;
//         }
//     }
//     console.log(`The character ${charToCount} occurs ${count} times in the provided string.`)
// }
// countChar('I love big ol tiDDies', 'D')
// // console.log(countBs("BBC"));
// // // → 2
// // console.log(countChar("kakkerlak", "k"));
// // // → 4