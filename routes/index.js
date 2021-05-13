const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Store = require('../models/store');

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
	  const stores = await Store.find({});
	  console.log(stores);
	  res.json(stores);
	  // res.render('index', { title: 'Express' });
  } catch (err) {
	  console.error(err);
	  next(err);
  }
});

module.exports = router;
