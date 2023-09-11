function whatToEat(timeOfDay) {
  // Create a new promise and return it here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (timeOfDay === 'breakfast') {
        resolve('toast')
      }
      if (timeOfDay === 'lunch') {
        resolve('noodles')
      }
      if (timeOfDay === 'dinner') {
        resolve('curry')
      } else {
        reject('I don\'t eat between-meal snacks!')
      }
    }, 1000);
  });
}

// whatToEat should return a promise. 
// If the `timeOfDay` is 'breakfast', 'lunch', or 'dinner' 
// resolve the promise with your favorite food for that time. 
// If the `timeOfDay` is anything else reject the promise with 
// the the message: "I don't eat between meal snacks!"

// Handle the Promise returned from whatToEat here: 

whatToEat('lunch')
  .then((message) => {
    console.log(message);
}).catch((err) => {
    console.log(err);
});

// Handle this Promise: 
whatToEat('elevens')
  .then((message) => {
    console.log(message);
  }).catch((err) => {
    console.log(err);
  });
