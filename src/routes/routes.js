const { Router } = require('express');
const route = Router();

const defaultResponse = {
  "data": "Hi Andy!"
};

route.get('/', async (req, res) => {
  res.json(defaultResponse);
});

module.exports = route;