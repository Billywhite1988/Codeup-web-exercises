(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */


    var names = ['Anna', 'Billy', 'Chris', 'don'];



    
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    var names = ['Anna', 'Billy', 'Chris', 'Don'];

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    var names = ['Anna', 'Billy', 'Chris', 'Don'];

    //console.log('There are ' + names.length + ' names in the array');

    //console.log('The first name is: ' + names[0]);

    //console.log('The second namee is: ' + names[1]);

   // console.log('The third namee is: ' + names[2]);

   // console.log('The fourth namee is: ' + names[3]);




    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    var names = ['Anna', 'Billy', 'Chris', 'don'];

    for (var i = 0; i < names.length; i++) {
        //console.log('The names at index ' + i + ' is: ' + names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    var names = ['Anna', 'Billy', 'Chris', 'don'];

    names.forEach(function(name) {
        //console.log('Here are my family members name: ' + name + '.');
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */


    function  first(array) {
        if(Array.isArray(array)) {
            return[0]
        }
    }

    function  second(array) {
        if(Array.isArray(array)) {
            return[1]
        }
    }

    function  third(array) {
        if(Array.isArray(array)) {
            return[-1]
        }
    }

    console.log(first([1, 2, 3, 4, 5]));
    console.log(second([1, 2, 3, 4, 5]));
    console.log(third([1, 2, 3, 4, 5]));
