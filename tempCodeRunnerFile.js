// let body = {
//   anonymousid: "123",
// };

// if (
//   "anonymousID" ||
//   "anonymous_id" ||
//   "anonymous_Id" ||
//   ("anonymousid" in body && body.anonymousID)
// ) {
//   body.anonymousID = body.[property];
// }

// console.log(body);

var item = {};
var results = {};

item.id = "50";
item.area = "Mexico";
item.gender = null;
item.birthdate = null;

results.id = "50";
results.area = null;
results.gender = "Male";
results.birthdate = null;

Object.keys(item).forEach(function (key) {
  if (item[key] == null || item[key] == 0) {
    item[key] = results[key];
  }
});

console.dir(item);
