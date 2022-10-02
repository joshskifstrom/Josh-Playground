import fetch from "node-fetch";

function fetchAvatarUrl(userId) {
    return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
    .then((result)=>{
        console.log(result.json)
    })
}

fetchAvatarUrl(1324)



// fetch(urls)
// .then((res) => {
//   return res.json()
// }) 
// .then((data)=> {
//   console.log(data)
// })
// .catch((err) => {
//   console.log('this error: ' + err)
// })

const LoadData = async () => {
    try {
      const url = 'https://jsonplaceholder.typicode.com/todos/1'
      const res = await fetch(url) 
      //console.log(res)
      const data = await res.json()
      //console.log(data)
      return data
    } catch (err) {
      console.log(err)
    }
  }
  
  //async await return a promise so have to access data this way
  LoadData().then((res)=> console.log(res));