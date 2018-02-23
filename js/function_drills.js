"use strict"


// ex. Make a function called isTwo(number)
// You'll write
// function isTwo(number) {
//     return number == 2;
// }
// then try
// console.log(isTwo(4));
// console.log(isTwo(2));
//
// Make a function named sayHello(name) that returns "Hi " + name.
function sayHello(name) {
    return "Hi"+ name + "!";
}
console.log(sayHello("ray"));

//     Write a function named capitalize(string) that takes a string of any capitalization and uppercases the first character and lowercases the rest of the characters of a string.
function capitalize(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
capitalize('string');
//     Write a function named upperCase(string)
function upperCase(string) {

}
upperCase();
// Make a function named identity(input) that returns the input exactly as provided.
function identity(input) {
    return input;

}
identity();

//     Make a function named isOdd(number)
function isOdd(number) {

}
isOdd();

// Make a function named isEven(number)
function isEven(number) {

}
isEven();

// Make a function named isPositive(number)
function isPositive(number) {

}
isPositive();

// Make a function named isNegative(number)
function isNegative(number) {

}
isNegative();

// Make a function named isBoolean(input)
function isBoolean(input) {

}
isBoolean();

// Make a function named isTrue(boolean)
function isTrue(boolean) {

}
isTrue();

// Make a function named isFalse(boolean)
function isFalse(boolean) {

}
isFalse();

// Make a function named isTruthy(input)
function isTruthy(input) {

}
isTruthy();

// Make a function named isFalsy(input)
function isFalsy(input) {

}
isFalsy();

// Make a function named isVowel(letter)
function isVowel(letter) {

}
console.log(isVowel());

// Make a function named hasVowels(string) that uses isVowel to check if a string has any vowels
function hasVowels(str1)
{
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;

    for(var x = 0; x < str1.length ; x++)
    {
        if (vowel_list.indexOf(str1[x]) !== -1)
        {
            vcount += 1;
        }

    }
    return vcount;
}
console.log(hasVowels("CodeUp"));

// Make a function named isConsonant(letter)
function isConsonant(letter) {

}
isConsonant();

// Make a function named hasConsonants(string)
function hasConsonants(string) {

}
hasConsonants();

// Make a function named isCapital(letter)
function isCapital(letter) {

}
isCapital();

// Make a function named hasCapitalLetters(string) that returns if a string has any capitals.
function hasCapitalLetter(string) {
    return string.toUpperCase() != string;
}


console.log(hasCapitalLetter("HELLO WORLD"));

// Make a function named isLowerCase(letter)
function isLowerCase(letter) {

}
isLowerCase(letter);

// Make a function named hasLowerCase(string) that returns if a string has any lower cased
function hasLowerCase(string) {
    return string.toUpperCase() != string;
}


console.log(hasLowerCase("hello WORLD"));

// Make a function named isSpace(letter) that returns if a character is a space character
function isSpace(letter) {
    if (/^\s+$/.test(myString))
    {
        return true
    } else{

        return false
    }

}
console.log(isSpace(" letter"));
// Make a function named hasSpaces(string) that returns if a string has any space characters
// Make a function named isZero(number)
function isZero(number) {

}
isZero();
// Make a function named increment(number) that returns a number plus one
var n = 0;
function increment(number){
    n++;
    return n;
}

console.log(increment());

// Make a function named decrement(number) that returns a number minus one
var n = 0;
function decrement(number){
    n--;
    return n;
}

console.log(decrement());
// Make a function named isFive(input)
function isFive(input) {

}
isFive();
// Make a function named addFive(input) that adds five to some input.
// Make a function named isMultipleOfFive(input)
function isMultipleOfFive(input) {

}
isMultipleOfFive();

// Make a function named isThree(input)
function isThree(input) {

}
isThree();

// Make a function named isMultipleOfThree(input)
function isMultipleOfThree() {

}
isMultipleOfThree();

// Make a function named isMultipleOfThreeAndFive( input)
function isMultipleOfThreeAndFive(input) {

}
isMultipleOfThreeAndFive();

// Write a function named lowerCase(string)
function lowerCase(string) {

}
lowerCase();

// Write a function named capitalizeEachWord(string) uses capitalize to return a string where each new word (separated by a space) is capitalized.

// Write a function named add(a, b) that returns the sum of a and b
function sum(a, b) {
    var result = a + b;
    return result;
}
console.log(sum());

// Write a function named subtract(a, b) that returns a minus b
function subtract(a, b) {
    var result = a - b;
    return result;
}
console.log(subtract());

// Write a function named multiply(a, b) that returns the product of a times b
function multiply(a, b) {
    var result = a * b;
    return result;
}
console.log(multiply());

// Write a function named divide(a, b) that returns a divided by b
function divide(a, b) {
    var result = a / b;
    return result;
}
console.log(divide());

// Write a function named remainder(a, b) that returns the remainder after dividing a by b
function remaider(a, b) {
    var result = a % b;
    return result;
}
console.log(remaider());

// Write a function named average(arrayOfNumbers) that returns the average of an array of numbers and numeric strings.