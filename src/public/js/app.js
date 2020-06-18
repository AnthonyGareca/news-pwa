const main = document.querySelector('main');
const sourceSelector = document.querySelector('#sourceSelector');

const NEWS_PATH = `${window.location.origin}/api/news` ;
const SOURCES_PATH = `${window.location.origin}/api/sources` ;

const defaultSource = 'the-washington-post';

window.addEventListener('load', async event => {
  updateData(defaultSource);
  await updateSources();
  sourceSelector.value = defaultSource;
  sourceSelector.addEventListener('change', event => {
    updateData(event.target.value);
  });
});

async function updateData(source = defaultSource) {
  const data = await fetch(NEWS_PATH + `/${source}`);
  const { articles } = await data.json();
  main.innerHTML = articles.map(createArticle).join('\n');
}

function createArticle(article) {
  return `
    <div class="article">
      <a href="${article.url}">
        <h2>${article.title}</h2>
        <img src="${article.urlToImage}">
        <p>${article.description}</p>
      </a>
    </div>
  `;
}

async function updateSources() {
  const data = await fetch(SOURCES_PATH);
  const { sources } = await data.json();
  sourceSelector.innerHTML = sources
    .map(source => `<option value="${source.id}">${source.name}</option>`)
    .join('\n');
}