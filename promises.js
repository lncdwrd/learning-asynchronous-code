/**
 * 
 * Under The Hood Promises
 * 1. CustomPromise runs doWork()
 * 2. JE (Javascript Engine) detects setTimeout so doWork() is set aside.
 * 3. Javascript Engine continues parsing code while Browser finishes the setTimeout task.
 * 4. Since state === PENDING, callback is added to handlers.
 * 5. Browser notifies JE that task is done.
 * 6. resolve() gets executed.
 */

function CustomPromise(executor) {
  let state = 'PENDING';
  let value = null;
  let handlers = [];
  let catches = [];

  function resolve(result) {
    if (state !== 'PENDING') return;

    state = 'FULFILLED';
    value = result;

    console.log('Resolve(): Executing Handlers');
    handlers.forEach((h) => h(value));
  }

  function reject(err) {
    if (state !== 'PENDING') return;

    state = 'REJECTED';
    value = err;

    catches.forEach((c) => c(err));
  }

  this.then = function (callback) {
    if (state === 'FULFILLED') {
      console.log('.then(): Executing Callback');
      callback(value);
    } else {
      console.log('.then(): Adding Callback To Handlers Array');
      handlers.push(callback);
    }
  }

  executor(resolve, reject);
}

const doWork = (res, rej) => {
  console.log('Resolving in 1 second...');

  setTimeout(() => { 
    res('Hello World');
  }, 1000);
}

let someText = new CustomPromise(doWork);

someText.then((val) => {
  console.log(`1st log: ${val}`)
});
