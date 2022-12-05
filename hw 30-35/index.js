//multiple student data object
//constructor

// function stud(name, age, cgpa, lang) {
//     this.name = name;
//     this.age = age;
//     this.cgpa = cgpa;
//     this.lang = lang;
  
//     this.display = function () {
//       document.write(this.name + "<br>");
//       document.write(this.age + "<br>");
//       document.write(this.cgpa + "<br>");
//       document.write(this.lang + "<br>");
//     };
//   }
//   var stud1 = new stud("Omar Faruque", "22", "2.92", ["Bangla", "English", "Arabic"]);
//   var stud2 = new stud("Muhammad Faruque", "24", "3.92", ["Bangla", "Urdu", "Arabic"]);
//   var stud3 = new stud("Omar Munsi", "23", "3.52", ["Pastu", "English", "Arabic"]);
  
//   stud1.display();
//   stud2.display();
//   stud3.display();
//   document.write(stud1.age + "<br>");
//   document.write(stud1.cgpa);
  
  // ---------------Math Objects---------------------
  
//   var num1 = parseInt(prompt("Enter First Number: "));
//   var num2 = parseInt(prompt("Enter second Number: "));
  
//   var maximum = Math.max(num1, num2);
//   document.write(maximum);
  
  //----------------Guessing game-----------------
  
  // var numOfWon = 0;
  // var numOfLost = 0;
  
  // for (x = 1; x <= 5; x++) {
  //     var guessNumber = parseInt(prompt("Enter a Guess number: "));
  //     var randomNumber = Math.floor(Math.random() * 5) + 1;
  
  //     if (guessNumber == randomNumber) {
  //         console.log("You have Won");
  //         numOfWon++
  //     }
  //     else {
  //         console.log("You have Lost");
  //         numOfLost++
  //     };
  // }
  // document.write("You have Won: " + numOfWon + "<br>");
  // document.write("You have Lost: " + numOfLost);
  
  //------------js can change html elements-------------
  
  // document.getElementById("demo").innerHTML = "Hello World";
  // document.getElementsByClassName("demo1")[0].innerHTML = "Hello";
  // document.getElementsByTagName("h1")[0].innerHTML = "Hello demo";
  
  //---------query selector
  
  // document.querySelector('#demo').innerHTML = "Hello";
  // document.querySelector('.demo1').innerHTML = "Hello demo";
  // document.querySelector('h1').innerHTML = "Hello demo";
  
  // -----------multiple query select
  
  // document.querySelector("#demo").innerHTML = "hi";
  // document.querySelector("div a").innerHTML = "hi";