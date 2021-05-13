const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const _Store = require('../models/store');
const fs = require('fs');


/* GET home page. */
router.get('/', async (req, res) => {
	let storename = req.query.storename;
	const keywordquery = new RegExp(storename);
	const stores = await _Store.find({name: keywordquery},{"_id":false, "distance":false, "__v":false, menus: {"_id":false}});
	
	res.json(stores);
	
	
	// res.send({stores:returnArr});
});

module.exports = router;
