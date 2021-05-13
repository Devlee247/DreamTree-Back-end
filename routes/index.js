const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const _Store = require('../models/store');
const fs = require('fs');

/* GET home page. */
router.get('/', async (req, res, next) => {
	
	const jsonFile = fs.readFileSync('./stores.json', 'utf8');	
	
	//console.log(jsonFile);
	const jsonData = JSON.parse(jsonFile);
	//console.log(jsonData);

	const stores = jsonData.stores;
	stores.forEach(store => {
		var new_Store = new _Store();
		
		new_Store.name = store.가맹점명;
		new_Store.type = store.업종명;
		new_Store.address = store.가맹점주소;
		new_Store.phoneNumber = store.전화;
		new_Store.dong = store.행정동;
		new_Store.latitude = store.경도;
		new_Store.longitude = store.위도;
		new_Store.imgurl = 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2250264258B8FEC82D';
		new_Store.rating = Math.abs((Math.random()*10)-5).toFixed(2);
		var new_list = [];
		new_list.push({menu:"somthing", price:"100"},{menu:"sth2",price:"200"});
		new_Store.menus = new_list;
		
		
		//console.log(new_Store.rating);
		//new_Store.save();
		//console.log(new_Store);
	});
	
  try {
	  const store = await _Store.find({},{"_id":false, "__v":false, menus: {"_id":false}});
	  //console.log(store);
	  res.json(store);
	  // res.render('index', { title: 'Express' });
  } catch (err) {
	  console.error(err);
	  next(err);
  }
});

module.exports = router;
