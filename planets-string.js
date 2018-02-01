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

})();