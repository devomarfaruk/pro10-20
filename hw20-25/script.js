// ---------------do While Loop-------------------

// var x = 1;

// do {
//     document.write(" " + x);
//     x++;
// } while (x <= 20);

// -------------Break & Continue-----------------

// for (x = 1; x <= 100; x++) {
//   if (x == 10) {
//     break;
//   }
//   document.write(" " + x);
// }
// document.write("<h1>End</h1>");

// -----------------------

// for (x = 1; x <= 100; x++) {
//   if (x == 10) {
//     continue;
//   }
//   document.write(" " + x);
// }

// -------------ternary operator-----------------

// var num = Number(prompt("Enter any Number: "));
// var result = num > 0 ? "positive" : "Negative";
// document.write(result);

// ------------------

// var number = Number(prompt("Enter any Number: "));
// var result = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
// document.write(result);

// -----------Creating a function----------------

// function ready(num) {
//   var result = num * num;
//   document.write("Result = " + result + "<br>");
// }
// ready(5);
// ready(6);
// ready(7);

//add function

// function addition(num1, num2) {
//     var result = num1 + num2;
//     document.write("Sum is " + result + "<br>")
// }
// addition(10, 12);
// addition(212, 111);

//sub function

// function minus(num1, num2) {
//     var result = num1 - num2;
//     document.write("Result is " + result + "<br>");
// }
// minus(12, 4);
// minus(122, 42);

// ------------------------------------

//IiFEs(Immediately Invokeble Function Expressios)-->>

// (function display(Bangladesh) {
//     document.write(Bangladesh);
// })("Hello");

// var num1 = 4;
// var num2 = 6;
// var sum = num1 + num2;

// (function display(result) {
//     document.write("The result is " + result);
// })(sum);

//------------Function Expressios---------->>

// var num1 = 4;
// var num2 = 6;
// var sum = num1 + num2;

// var messege = function display(result) {
//   document.write("The result is " + result);
// };
// messege(sum);