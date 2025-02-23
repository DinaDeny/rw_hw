async function logUsers () {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    users.forEach(user => (console.log(user.name)));
  } catch(error) {
    console.error('Error fetching data:', error);
    throw new Error('Error fetching data');
  }
}


async function fetchInvalidUsers () {
  try {
    await fetch('https://jsonplaceholder.typicode.co');
  } catch(error) {
    console.error('Error fetching invalid users data:', error);
    logUsers();
  }
}
fetchInvalidUsers();
