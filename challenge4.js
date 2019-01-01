/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects 
and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might 
have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
*/

var john  = {
  fullname: "John Doe",
  height: 1.8,
  mass: 175,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
  }
}

var mark  = {
  fullname: "Mark Smith",
  height: 1.8,
  mass: 175,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
  }
}

john.calcBMI();
mark.calcBMI();

if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullname + ' \'s BMI is bigger than Mark\'s BMI. ' + john.fullname + ' has a BMI of:' + john.bmi);
} else if (mark.bmi > john.bmi) {
     console.log(mark.fullname + '\'s BMI is bigger than John\'s BMI. ' + mark.fullname + ' has a BMI of:' + mark.bmi);
} else {
    console.log(john.fullname + ' and Mark have the same BMI. ');
}
