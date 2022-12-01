// Farenhait to Celcious Scale--------------------

// var farn = parseFloat(prompt("Enter Farenhait Number : "));
// document.write(farn);
// var cels = (farn - 32) * (5 / 9);
// document.write("Celcious is " + cels);


// Celcious to Farenhait Scale--------------------

// var cels = parseFloat(prompt("Enter Celcious Number : "));
// var farn = (cels * (9 / 5)) + 32;
// document.write("Farenhait is " + farn);


// ------------------------------------------------

//Relational Operator = ( > ,< ,>= ,<= ,== ,=== ,!= ,!== )
//Logikal Operator = (&& ,|| ,!)

// var num1 = 20,
//   num2 = 25,
//   num3 = 25,
//   num4 = 35;

// document.write(num1 > num2);
// document.write(num1 < num2);
// document.write(num3 == num2);
// document.write(num3 >= num2);
// document.write(num3 <= num2);
// document.write(num3 == '25');// Only data check
// document.write(num3 === '25');//Data + Type Check
// document.write(num3 != num1);//is not equal to
// document.write(num4 > num2 && num4 > num3);
// document.write(num4 > num2 && num4 < num3);//Total check
// document.write(num4 > num2 || num4 < num3);//Individual check
// document.write(num4 < num2 || num4 > num3);//Individual check
// document.write(!(num3 > num1));
// document.write(!(true));
// document.write(!(false));

// ------------------------------------------------

// Control Statement

// conditional control = if , else if , else - switch
//loop control = for , while , do while

// Even/Odd :

// var num = 5;

// if (num % 2 == 0)
//     document.write('Even');

// // if (num % 2 != 0)
// //     document.write('Odd');

// else
//     document.write('Odd');

// ---------------------------------

// var num = 6;

// if (num % 2 == 0)
//     document.write('Even');

// else
//     document.write('Odd');

// -------Positive /negative-----------------------

// var num = 6;

// if (num > 0)
//     document.write('Positive');

// else if (num < 0)
//     document.write('negative');

// else
//     document.write('zero');

// --------------zero-----------------------------

// var num = 0;

// if (num > 0)
//     document.write('Positive');

// else if (num < 0)
//     document.write('negative');

// else
//     document.write('zero');

// --------------student Letter Grade------------

// var res = prompt('Enter Your Marks: ');

// if (res > 100 || res < 0)
//     document.write('Invalid Marks');

// else if (res >= 80 && res <= 100)
//     document.write('You Got A+');

// else if (res >= 70 && res <= 79)
//     document.write('You Got A');

// else if (res >= 60 && res <= 69)
//     document.write('You Got A-');

// else if (res >= 50 && res <= 59)
//     document.write('You Got B');

// else if (res >= 40 && res <= 49)
//     document.write('You Got C');

// else if (res >= 33 && res <= 39)
//     document.write('You Got D');

// else
//     document.write('You are Fail');


// --------------Larger & Smaller------------

// var num1 = prompt('Enter Number: ');
// var num2 = prompt('Enter Number: ');
// var num3 = prompt('Enter Number: ');

// if (num1 > num2 && num1 > num3)
//     document.write('learger number is ' + num1);
// else if (num2 > num1 && num2 > num3)
//     document.write('learger number is ' + num2);
// else
//     document.write('learger number is ' + num3);


// --------------Vowel & Consonant------------

// var letter = prompt('Enter a letter: ');
// var letter = letter.toLowerCase();

// if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u')
//     document.write('Vowel');
// else
//     document.write('consonent');

// ---------------digit speling------------------
//0--Zero|||| 1--One
//switch, break, case, default

// var digit = prompt('Enter any Digit: ');

// switch (digit) {
//   case "0":
//     document.write("Zero");
//     break;
//   case "1":
//     document.write("One");
//     break;
//   case "2":
//     document.write("Two");
//     break;
//   case "3":
//     document.write("Three");
//     break;
//   case "4":
//     document.write("Four");
//     break;
//   case "5":
//     document.write("Five");
//     break;
//   case "6":
//     document.write("Six");
//     break;
//   case "7":
//     document.write("Seven");
//     break;
//   case "8":
//     document.write("Eight");
//     break;
//   case "9":
//     document.write("Nine");
//     break;
//   default:
//     document.write("Not a digit");
// }

// -----------------------------------------
//Task -------using if/else method---------->>>>>

// var letter = prompt("Enter any letter: ");
// var letter = letter.toLowerCase();
// if (letter == "a" || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u')
//     document.write("This letter is Vowel");
// else
//     document.write("This letter is Consonant");

// ------------using Switch method----------
// var letter = prompt("Enter any letter: ")
// var letter = letter.toLowerCase();

// switch (letter) {
//     case "a":
//         document.write("Vowel");
//         break;
//     case "e":
//         document.write("Vowel");
//         break;
//     case "i":
//         document.write("Vowel");
//         break;
//     case "o":
//         document.write("Vowel");
//         break;
//     case "u":
//         document.write("Vowel");
//         break;
//     default:
//         document.write("Consonent");
// }

// ------------------for loop--------------------

// for (x = 1; x <= 10; x++) {
//   document.write("<h2>Bangladesh</h2>");
// }

// -----------------

// for (x = 2; x <= 100; x = x + 2) {
//   document.write(x);
// }

// -----------------

// var sum = 0;
// var m = parseInt(prompt("Enter Starting Number: "));
// var n = parseInt(prompt("Enter Ending Number: "));

// for (x = m; x <= n; x = x + 1) {
//   sum = sum + x;
// }
// document.write(sum);

// -----------------While Loop-------------------

// for (x = 1; x <= 100; x = x + 1) {
//     document.write(" " + x);
// }

// -----------------

// var x = 1;
// while (x <= 10) {
//   document.write(" " + x);
//   x = x + 1;
// }

// -----------------

// var x = 2,
//     sum = 0;
// while (x <= 100) {
//     sum = sum + x;
//     x = x + 2;
// }
// document.write(sum);

// -------dividable by 5 & 3 >----------

// var x = 1;
// var sum = 0;

// while (x <= 50) {
//   x = x + 1;
//   if (x % 3 == 0 && x % 5 == 0) {
//     sum = sum + x;
//     document.write(" " + x);
//   }
// }
// document.write(" " + sum);

// ------odd number-----------

// var x = 1,
//     sum = 0;
// while (x <= 20) {
//     x = x + 1;
//     if (x % 2 == 0) {
//         sum = sum + x;
//         document.write(" " + x);
//     };
// };
// document.write(" " + sum);

// ------Even number-----------

// var x = 1,
//     sum = 0;
// while (x <= 20) {
//     x = x + 1;
//     if (x % 2 == 1) {
//         sum = sum + x;
//         document.write(" " + x);
//     };
// };
// document.write(" " + sum);