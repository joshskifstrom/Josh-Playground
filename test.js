let body = {
  anonymous_Id: "123",
  page_url: "www.google.com",
};

//transforms various naming conventions of anonymousId to segment standard naming convention
for (const [key, value] of Object.entries(body)) {
  if (
    key == "anonymous_id" ||
    key == "anonymous_Id" ||
    key == "AnonymousId" ||
    key == "anonymousId" ||
    key == "AnonymousID" ||
    key == "anonymousid"
  ) {
    body.anonymousID = value;
    delete body[key];
  }
  if (key == "page_url") {
    body.pageurl = value;
    delete body[key];
  }
  console.log(`${key}: ${value}`, body);
}
