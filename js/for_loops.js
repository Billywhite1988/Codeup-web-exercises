"use strict";



    function showMultiplicationTable(number) {

    for(var i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
    }

    showMultiplicationTable(7);




for(var i = 1; i <= 10; i++) {

    var randomNumber = Math.floor(Math.random() * 180) + 20;

    if(randomNumber % 2 === 0) {
        console.log(randomNumber + " is even");
    } else {
        console.log(randomNumber + " is odd.");
    }
}

for(var i = 1; i <= 9; i +=1) {
    // .repeat will repeat a string n number of times..
    // change the number behind i into a string...
    // output that string.repeat()
    var numberString = i.toString();

    var output = numberString.repeat(i);
    console.log(output);
}