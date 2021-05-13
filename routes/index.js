const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const _Store = require('../models/store');

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
	  const store = await _Store.find({});
	  console.log(store);
	  res.json(store);
	  // res.render('index', { title: 'Express' });
  } catch (err) {
	  console.error(err);
	  next(err);
  }
});

module.exports = router;
