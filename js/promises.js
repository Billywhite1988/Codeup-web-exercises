

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

const dateOfLastCommit = username => {
    const url = `https://api.github.com/users/${username}/events/public`;
    const options = {
        headers: {
            'Authorization': 'c107a2dce68e1a16a083c3427fcaabc606dc8e7a'
        }
    };
    return fetch(url, options)
        .then(response => response.json())
        .then(data => data[0].created_at);
};
console.log(dateOfLastCommit('Billywhite1988').then(lastCommitDate => console.log(lastCommitDate)));