// async explicit callback function with 3 second wait
let logCall = function () {
  console.log("locCall was called back.");
};
setTimeout(logCall, 3000);

// async anonymous callback function with 4 second wait (most common way to write)
setTimeout(function () {
  console.log("locCallv2 was called back.");
}, 4000);

// async callback with callback in body with 0 second wait time
function cons() {
  console.log("logged");
}
setTimeout(cons, 0);

// sync callback with passing function in parameters
let students = [
  { name: "Mary", score: 90, school: "East" },
  { name: "James", score: 100, school: "East" },
  { name: "Steve", score: 40, school: "West" },
];

let processStudents = function (data, callback) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].school.toLowerCase() === "east") {
      if (typeof callback === "function") {
        callback(data[i]);
      }
    }
  }
};

//note that both the below processStudents don't require a change in the processStudents function
//just a change in the function passed through.
processStudents(students, (obj) => console.log(obj));

processStudents(students, function (obj) {
  if (obj.score > 60) {
    console.log(obj.name + " passed.");
  }
});

let determineTotal = function () {
  let total = 0,
    count = 0;
  processStudents(students, function (obj) {
    total = total + obj.score;
    count++;
  });
  console.log("Total score: " + total + " - Total Count: " + count);
};

determineTotal();

//sync callback with function passed through parameters
const logF = function (cb) {
  cb();
};

logF(() => console.log("success!"));

// sync callback with function defined and instantiated within the body
const logG = function () {
  function cd() {
    console.log("success2!");
  }
  cd();
};
logG();
