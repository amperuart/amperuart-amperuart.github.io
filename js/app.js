// Get request
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data));

// Post request
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "Post",
    body: JSON.stringify({fakeData: 1}),
    headers: {
      "Content-type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => console.log(data));

// Put request
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "Put",
    body: JSON.stringify({fakeData: 200, id: 1}),
    headers: {
      "Content-type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => console.log(data));

// Delete request
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "Delete"
  })
    .then(response => response.json())
    .then(data => console.log(data))