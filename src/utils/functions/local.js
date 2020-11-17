export function timeOutPromise(ms, promise) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Request Timeout'));
    }, ms);
    promise.then(resolve, reject);
  });
}
