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
    addAsyncCallback(x, y, function(result){
        // console.log("[@client] operation completed");
        console.log(`[@client] result = ${result}`);
    });
    // console.log("[@client] operation initiated");
  }

  window["addAsyncCallbackClient"] = addAsyncCallbackClient;
})()