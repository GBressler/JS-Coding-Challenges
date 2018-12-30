
/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less 
than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

*/
var tips = []; 
var finalAmount = [];
var tipCalc = function(bill) {
 
  var tip, total;
  if(bill <= 49.99) {
     //tip 20%
     tip = bill * .2;
     total = bill + tip
     tips.unshift(tip);
     finalAmount.unshift(total);
  } else if(bill > 49.99 && bill <= 200 ) {
      //tip 15%
     tip = bill * .15;
     total = bill + tip
     tips.unshift(tip);
     finalAmount.unshift(total);
  } else {
       //tip 10%
       tip = bill * .1;
     total = bill + tip
     tips.unshift(tip);
     finalAmount.unshift(total);

  }
  console.log(tips);
  console.log(finalAmount);
}

tipCalc(124);
tipCalc(48);
tipCalc(268);