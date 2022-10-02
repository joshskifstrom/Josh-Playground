let body =  {
anonymousid: '123'
}

if ('anonymousID' || 'anonymous_id' || 'anonymous_Id' || 'anonymousid' in body && body.anonymousID) {
    body[anonymousID] = 'anonymousID'
}

console.log(body)