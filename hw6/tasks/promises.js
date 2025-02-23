fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => (logUsers(json)))
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

function logUsers (users) {
  users.forEach(user => (console.log(user.name)));
}

