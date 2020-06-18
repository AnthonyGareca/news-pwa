const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');

const PATH = 'https://newsapi.org/v2/sources?apiKey=13c574c359db473587769bff95b72784';

const getSources = async (req, res) => {
  const data = await fetch(PATH);
  const json = await data.json();
  res.json(json);
}

router.get('/', getSources);

module.exports = router;