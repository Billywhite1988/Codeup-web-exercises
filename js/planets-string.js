(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var planetsArray = planetsString.split("|");
     console.log(planetsArray);



    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful? **/

    var planetsWithBreakstag = planetsArray.join("<br>");

     console.log(planetsWithBreakstag);

     /** BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

     var planetsListHTML = "<ul><li>";
    var innerPlanetHTML = planetsArray.join("</li><li>");
    var endingPlanetListHTML = "</li></ul>";

    var planetsListHTML = innerPlanetHTML + endingPlanetListHTML;

     console.log(planetsListHTML);

      /** BONUS 1:  **/

    /**Create a phone number parser that will convert a string of numbers into a human readable format.
     *
       The output should depend on the number of digits (account for 7, 10, 11 digit numbers):  **/

        input = 5552324343, output = 555-232-4343
     	input = 5553434, output = 555-3434
     	input = 18005552323, output = 1-800-555-2323

    /**	Using multiple functions will be helpful.  **/

       function formatPhoneNumber(input) {
         var s2 = (""+s).replace(/\D/g, '');
         var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
         return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
       }


          var numberinputString = ("5552324343, 5553434, 1800,555,2323");
          var numberoutputString = ("555-232-4343", "555-3434", "1-800-555-2323");


           var numberinputArray = numberinputString.replace("-");
            console.log(numberinputArray);


            f_val.slice(0,3)+"-"+f_val.slice(3,6)+"-"+f_val.slice(6);




























      /** 	Extra Challenge: account for invalid characters
       	Extra Challenge: if the input is already formatted, output the unformatted version
       	Extra Challenge: allow the parser to accept letters and convert them to the correct numbers      **/





















