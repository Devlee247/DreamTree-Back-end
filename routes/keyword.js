const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const _Store = require('../models/store');
const fs = require('fs');


/* GET home page. */
router.get('/', async (req, res) => {
	let storename = req.query.storename;
	const keywordquery = new RegExp(storename);
	const stores = await _Store.find({name: keywordquery},{"_id":false, "__v":false, menus: {"_id":false}});
	
	returnArr = []
	await stores.forEach(store=>{
		returnArr.push(store);
	});
	
	
	res.send({stores:returnArr});
});

module.exports = router;
