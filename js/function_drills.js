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
console.log(identity());
//     Make a function named isOdd(number)
function isOdd(number) {

}
console.log(number);
// Make a function named isEven(number)
function isEven(number) {

}
console.log(isEven());
// Make a function named isPositive(number)
function isPositive(number) {

}
console.log(isPositive());
// Make a function named isNegative(number)
function isNegative(number) {

}
console.log(isNegative());
// Make a function named isBoolean(input)
function isBoolean(input) {

}
console.log(isBoolean());
// Make a function named isTrue(boolean)
function isTrue(boolean) {

}
console.log(isTrue());
// Make a function named isFalse(boolean)
function isFalse(boolean) {

}
console.log(isFalse());
// Make a function named isTruthy(input)
function isTruthy(input) {

}
console.log(isTruthy());
// Make a function named isFalsy(input)
function isFalsy(input) {

}
console.log(isFalsy());
// Make a function named isVowel(letter)
function isVowel(letter) {

}
console.log(isVowel());
// Make a function named hasVowels(string) that uses isVowel to check if a string has any vowels
function hasVowels(char)
{
    if (char.length == 1)
    {

        const vowels = "aeiou";
       const result = vowels.indexOf(char) >= 0 ? true : false;

        return result;
    }
}

// Make a function named isConsonant(letter)
// Make a function named hasConsonants(string)
// Make a function named isCapital(letter)
// Make a function named hasCapitalLetters(string) that returns if a string has any capitals.
//     Make a function named isLowerCase(letter)
// Make a function named hasLowerCase(string) that returns if a string has any lower cased
// Make a function named isSpace(letter) that returns if a character is a space character
// Make a function named hasSpaces(string) that returns if a string has any space characters
// Make a function named isZero(number)
// Make a function named increment(number) that returns a number plus one
// Make a function named decrement(number) that returns a number minus one
// Make a function named isFive(input)
// Make a function named addFive(input) that adds five to some input.
//     Make a function named isMultipleOfFive(input)
// Make a function named isThree(input)
// Make a function named isMultipleOfThree(input)
// Make a function named isMultipleOfThreeAndFive( input)
// Write a function named lowerCase(string)
// Write a function named capitalizeEachWord(string) uses capitalize to return a string where each new word (separated by a space) is capitalized.
//     Write a function named add(a, b) that returns the sum of a and b
// Write a function named subtract(a, b) that returns a minus b
// Write a function named multiply(a, b) that returns the product of a times b
// Write a function named divide(a, b) that returns a divided by b
// Write a function named remainder(a, b) that returns the remainder after dividing a by b
// Write a function named average(arrayOfNumbers) that returns the average of an array of numbers and numeric strings.