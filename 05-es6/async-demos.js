(() => {
  // sync
  function addSync(x, y) {
    console.log(`   [@operation] processing ${x} and ${y}`);
    const result = x + y;
    console.log(`   [@operation] returing result`);
    return result;
  }

  function addSyncClient(x, y) {
    console.log(`[@client] invoking the operation`);
    const result = addSync(x, y);
    console.log(`[@client] result = ${result}`);
  }

  window["addSyncClient"] = addSyncClient;

  // async (using callbacks)
  function addAsyncCallback(x, y, callback) {
    console.log(`   [@operation] processing ${x} and ${y}`);
    setTimeout(() => {
      const result = x + y;
      console.log(`   [@operation] returing result`);
      callback(result);
    }, 5000);
    // returns undefined
  }

  function addAsyncCallbackClient(x, y) {
    console.log(`[@client] invoking the operation`);
    addAsyncCallback(x, y, function (result) {
      // console.log("[@client] operation completed");
      console.log(`[@client] result = ${result}`);
    });
    // console.log("[@client] operation initiated");
  }

  window["addAsyncCallbackClient"] = addAsyncCallbackClient;

  // async (using callbacks)
  function addAsyncPromise(x, y) {
    console.log(`   [@operation] processing ${x} and ${y}`);
    const p = new Promise((resolveFn, rejectFn) => {
        /* 
            invoke the resolveFn with the result if the operation is successful
            invoke the rejectFn with the error if the operation is a failure
        */
        setTimeout(() => {
          const result = x + y;
          console.log(`   [@operation] returing result`);
          resolveFn(result);
        }, 5000);
    })
    return p;
  }


  /* 
  function addAsyncPromiseClient(x, y) {
    console.log(`[@client] invoking the operation`);
    const p = addAsyncPromise(x, y)
    p.then((result) => {
        console.log(`[@client] result = ${result}`);
    })
  } 
  */

  
  async function addAsyncPromiseClient(x, y) {
    console.log(`[@client] invoking the operation`);
    const p = addAsyncPromise(x, y);
    const result = await p;
    console.log(`[@client] result = ${result}`);
    let doubleResult = result * 2;
    return doubleResult;
  }
  window["addAsyncPromiseClient"] = addAsyncPromiseClient; 
 
})()