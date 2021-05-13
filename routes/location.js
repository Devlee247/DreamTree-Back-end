const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const _Store = require('../models/store');
const fs = require('fs');

function getDistance(lat1, lon1, lat2, lon2) {
    if ((lat1 == lat2) && (lon1 == lon2))
        return 0;

    var radLat1 = Math.PI * lat1 / 180;
    var radLat2 = Math.PI * lat2 / 180;
    var theta = lon1 - lon2;
    var radTheta = Math.PI * theta / 180;
    var dist = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
    if (dist > 1)
        dist = 1;

    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515 * 1.609344 * 1000;
    if (dist < 100) dist = Math.round(dist / 1) * 1;
    else dist = Math.round(dist / 10) * 10;

    return dist;
}

/* GET home page. */
router.get('/', async (req, res) => {
	
	let latitude = req.query.latitude;
	let logitude = req.query.logitude;
	let distance = req.query.distance;
	
	const stores = await _Store.find({},{"_id":false, "__v":false, menus: {"_id":false}});
	
	returnArr = []
	await stores.forEach(store=>{
		if( getDistance( store.latitude,store.longitude, latitude,logitude ) <= distance )
			returnArr.push(store);
	})
	
	res.send({stores:returnArr});
});

module.exports = router;
