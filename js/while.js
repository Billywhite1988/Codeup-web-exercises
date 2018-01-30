

    "use strict";

    gitfvar number = 2;

    do {
        console.log(number);

        number = number * 2;

    } while(number <= 65536);



    var allCones = Math.floor(Math.random() * 50) + 50;


        console.log('starting amount' + allCones + 'amount cones sold');

        do {
            // amount cones ordered, this will generate a random number between 1 and 5
            var startingamount = Math.floor(Math.random() * 5) + 1;

            if(startingamount <= allCones) {
                console.log('customer ordered' + " "+ startingamount +  'number of cones');
                allCones = allCones - startingamount;
                console.log('I sold' + " "+ startingamount +  'number of cones');
                console.log('starting amount'+ allCones)

            } else {
                console.log('my next customer');
            }
        } while(allCones > 0);
            console.log('Last cone sold');
