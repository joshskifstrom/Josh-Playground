// //import loadimage from './load_image.js'
// //let loadimage = require("./load_image.js");

// //callbacks
// // let addImg = (src) => {
// //     let imgElement = document.createElement("img")
// //     imgElement.src = src
// //     document.body.appendChild(imgElement)
// // }

// // loadimage('images/im1.jpg', (error, img1) => {
// //     addImg(img1.src)
// //     loadimage('images/im2.jpg', (error, img) => {
// //         addImg(img.src)
// //         loadimage('images/im3.jpg', (error, img) => {
// //             addImg(img.src)
// //         })
// //     })
// // })

// //Promises
// // let addImg = (src) => {
// //     let imgElement = document.createElement("img")
// //     imgElement.src = src
// //     document.body.appendChild(imgElement)
// //     console.log('code here')
// }
// //Promise
// // Promise.all([
// //     loadimage('../Users/joshskifstrom/Desktop/images/im1.jpg'),
// //     loadimage('//im2.jpg'),
// //     loadimage('../images/im3.jpg')
// // ]).then((img)=> {
// //     img.forEach((img) => addImg(img.src))
// //     console.log(image)
// // }).catch((error)=>{
// //     //error handling
// // })

//Youtube Example (https://www.youtube.com/watch?v=DHvZLI7Db8E)
let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log("This is in the then " + message);
}).catch((message) => {
  console.log("This is in the catch " + message);
});

//Josh's Try
let j = new Promise((res, rej) => {
  let a = 5;
  if (a > 10) {
    res(true);
  } else {
    rej(false);
  }
});

j.then((result) => {
  console.log(result);
}).catch((result) => {
  console.log(result);
});

//Promise All - takes an array of data and outputs an array
let array = ["josh", "sara", "dardar", "kates"];
let k = Promise.all(array);
k.then((array) => {
  console.log((array += " promise"));
});

//Passing parameter through a promise, need to create a function that returns a promise
const some_function = (username, password) => {
  return new Promise((resolve, reject) => {
    if (username == "jskifstrom") {
      resolve("Stuff worked!");
    } else {
      reject(Error("It broke"));
    }
  });
};

//Invoke the function
some_function("jskifstrom", "1234").then((value) => {
  console.log(value);
});

//test promise
let g = new Promise((res, rej) => {
  let a = 4;
  if (a - 5 < 0) {
    res("less than zero");
  } else {
    rej("more than zero");
  }
});

g.then((result) => {
  console.log(result);
}).catch((result) => {
  console.log(result);
});

//test callback

let cb1 = (a, fn) => {
  return fn(a);
};

let substractFn = function (a) {
  if (a - 5 < 0) {
    return "cb less than zero";
  } else {
    return "cb more than zero";
  }
};

console.log(cb1(5, substractFn));

//test parameter sent in promise
let c = (a) => {
  return new Promise((res, rej) => {
    if (a == "b") {
      res("it's the same!");
    } else {
      rej("it's different!");
    }
  });
};

c("d")
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
