// Get request
  fetch("mascotas.json")
    .then( response => response.json() )
    .then( data => console.log(data) )

// Post request
  fetch("mascotas.json/posts", {
    method: "Post",
    body: JSON.stringify({fakeData: 1}),
    headers: {
      "Content-type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => console.log(data));

// Put request
  fetch("mascotas.json/posts/1", {
    method: "Put",
    body: JSON.stringify({fakeData: 200, id: 1}),
    headers: {
      "Content-type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => console.log(data));

// Delete request
  fetch("mascotas.json/posts/1", {
    method: "Delete"
  })
    .then(response => response.json())
    .then(data => console.log(data))