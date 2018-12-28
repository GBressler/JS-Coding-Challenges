/*
BMI =  mass/height^2

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
*/

/*Improve by making Mark and John Objects, have a prompt ask them for their height & weight, print result to div in page*/


var markMass, markHeight, johnMass, johnHeight;

markMass = 65;
markHeight = 1.87;
johnMass = 83;
johnHeight = 1.55;

var johnBMI = johnMass/(johnHeight * johnHeight);
var markBMI = markMass/(markHeight * markHeight);

var comparison = markBMI > johnBMI;

console.log('Is Mark\'s BMI bigger than John\'s?' + ' ' + comparison);