// K Maldonado
// BMI Calculator 

// Define variables 
// These variables will store the user's information
// and the calculated BMI results.
var weight = 0;
var height = 0;
var BMI_old = 0;
var BMI_new = 0;

// Define Constants
// These numbers stay the same because they are
// fixed values used in the BMI formulas.
var FACTOR_OLD = 703;
var FACTOR_NEW = 5734.9;

// Input
// Ask the user to enter their weight and height.
weight = promptNum("Enter your weight in pounds:");
height = promptNum("Enter your height in inches:");

// Process
// Calculate the user's BMI using both formulas.
BMI_old = (weight / (height * height)) * FACTOR_OLD;
BMI_new = FACTOR_NEW * weight / Math.pow(height, 2.5);

// Output
// The program displays the user's measurements and the
// results from both BMI calculations.
console.log("Weight is " + weight + " pounds");
console.log("Height is " + height + " inches");
console.log("Old BMI is " + BMI_old);
console.log("New BMI is " + BMI_new);


