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
		//console.log(store);
		new_Store.name = store.name;
		new_Store.type = store.type;
		new_Store.address = store.address;
		new_Store.phoneNumber = store.phoneNumber;
		new_Store.dong = store.dong;
		new_Store.latitude = store.longitude;
		new_Store.longitude = store.latitude;
		new_Store.storeID = store.storeID;
		if(store.imageURL == '')
			new_Store.imgurl = "https://lh3.googleusercontent.com/proxy/Iwa-Cp4oiSF-7_gQ9dv7KM5zPv-Ff4O7-MeDkfAZIbin-MgMTQdaJO4qIzedNSNpE3C7mB6tQwzknwL-VsnA2Ihwtj5Veezxiv28XXHgaugbxtZwCIIXQ90";
		else
			new_Store.imgurl = store.imageURL;
		if(store.rating == ''){
			new_Store.rating = 0.00;	
		}
		else{
			new_Store.rating = store.rating;	
		}
		
		
		//new_Store.rating = Math.abs((Math.random()*10)-5).toFixed(2);
		new_Store.menus = store.menus;
		// var new_list = [];
		// new_list.push({menu:"somthing", price:"100"},{menu:"sth2",price:"200"});
		// new_Store.menus = new_list;
		
		
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
