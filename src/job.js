//The function job must return a promise object
//The promise must resolve itself
//Expected Output
// Hello
// 2 seconds after the call to job and must provide "Masai School" in the data

function job() {
  
  //write your code below
  return new Promise((resolve, reject) => {
    resolve("Hello");
    setTimeout(function () {
      resolve("I am from");
    }, 2000);
    setTimeout(function () {
      resolve("Masai school");
    }, 4000);
  });

  // Do not change this
}


console.log(job());
export default job;
