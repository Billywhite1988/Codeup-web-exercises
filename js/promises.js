

let myFirstPromise = new Promise((resolve, reject) => {

    setTimeout(function wait(){
        resolve(" " + "Success!");
    }, 1000);
});

myFirstPromise.then((successMessage) => {

    console.log('You\'ll see this after 1 second'+ successMessage);
});

let mySecondPromise = new Promise((resolve, reject) => {

    setTimeout(function wait(){
        resolve(" " + "Success!");
    }, 3000);
});

mySecondPromise.then((successMessage) => {

    console.log('You\'ll see this after 3 second'+ successMessage);
});
