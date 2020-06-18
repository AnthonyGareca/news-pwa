const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');
const sprintf = require('sprintf-js').sprintf;

const PATH = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=13c574c359db473587769bff95b72784';
const NEWS_BY_SOURCE_PATH = 'http://newsapi.org/v2/top-headlines?sources=%1$s&apiKey=13c574c359db473587769bff95b72784';

const getNews = async (req, res) => {
  const data = await fetch(PATH);
  const json = await data.json();
  res.json(json);
}

const getNewsBySource = async (req, res) => {
  const source = req.params.source || 'the-washington-post';
  const path = sprintf(NEWS_BY_SOURCE_PATH, source);
  const data = await fetch(path);
  const json = await data.json();
  res.json(json);
}

router.get('/', getNews);

router.get('/:source', getNewsBySource);

module.exports = router;