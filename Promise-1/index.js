// Make a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('>>> Success! <<<');
    
    reject("--- Oops ---");
    resolve('>>> Success! <<<');
    
  }, 2000);
});

p.then((message) => {
  console.log('Promise resolved! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise rejected! 😞');
  console.log(err);
});

// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`

  // The console says:
  // Promise rejected! 😞
  // --- Oops ---

// **2)** What happens when you call both `resolve` and `reject`? Test this.

  // The console shows the same as above, the rejection messages

// **3)** Does the order matter you call resolve and reject matter? Test this. 

  // Yes, you get the success messages

// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.
  // You just get one message