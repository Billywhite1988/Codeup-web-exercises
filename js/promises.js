//Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.//

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

//Create a function that accepts a github username, and returns a promise that resolves with the date of the last commit that user made//

const dateOfLastCommit = username => {
    const url = `https://api.github.com/users/${username}/events/public`;
    const options = {
        headers: {
            'Authorization': 'token YOUR_TOKEN_HERE'
        }
    };
    return fetch(url, options)
        .then(response => response.json())
        .then(data => data[0].created_at);
};
console.log(dateOfLastCommit('Billywhite1988').then(lastCommitDate => console.log(lastCommitDate)));