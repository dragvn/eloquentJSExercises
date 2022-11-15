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

let gridDimensions = 8
for(i=1;i<=gridDimensions;i++){
    for(i=1;i<=gridDimensions;i++){
        switch(true){
            case i%2 === 0: console.log('#');break;
            case i=gridDimensions: console.log('/n'); break;
            default: console.log(' 0'); break;
        }
    }
}