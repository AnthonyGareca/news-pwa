const main = document.querySelector('main');

window.addEventListener('load', event => {
  updateData();
});

async function updateData() {
  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  const json = await data.json();
  console.log(json);
  main.innerHTML = json.map(createUser).join('\n');
}

function createUser(user) {
  return `
    <div class="user">
      <h2>${user.name}</h2>
      <p>Website: <a href="${user.website}">${user.website}</a></p>
      <p>Phone: ${user.phone}</p>
    </div>
  `;
}