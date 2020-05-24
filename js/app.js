var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=13c574c359db473587769bff95b72784';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))