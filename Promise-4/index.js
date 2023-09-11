const food = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('---- My favorite food is pizza ----')
    reject('---- Error ----')
  }, 2000);
});

food.then((message) => {
    console.log(message);
}).catch((err) => {
    console.log(err);
});



// resolve food here: 



// **Challenge 1** Resolve your promise with the name of your favorite food. 
// Do this by calling the `resolve` with an argument. 

// **Challenge 2** Resolve the promise `food` with the `.then()` syntax 
// and print your favorite food to the console. 
