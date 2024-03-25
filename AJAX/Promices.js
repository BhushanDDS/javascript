const Promiceone = new Promise(function(resolve, reject) {

    setTimeout(function() {
        console.log("hello");
    }, 2000)
    resolve({ username: "bhuhsna", email: "abcd123@gmail.com" })
})

Promiceone.then(function(user) {
    return user.username
}).
then(function(result) {
        console.log(result);

    })
    .catch((er) => {
        console.log("error occured" + er)
    })



const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if (!error) {
            resolve({ username: "hitesh", password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})


// promiseFour.then(function(user) {
//     return user.email
// }).then(function(res) {
//     console.log(res);
// }).catch(function(er) {
//     console.log(er);
// }).finally(function() {
//     console.log("Finally Exicuted!!");
// })


async function consumePromiseFive() {
    try {
        const response = await promiseFour
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}