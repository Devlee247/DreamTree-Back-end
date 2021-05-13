const mongoose = require('mongoose');

const { Schema } = mongoose;
const storeSchema = new Schema({
	name: { type: String, required: true },
	type: { type: String, required: true },
	address: { type: String, required: true},
	phoneNumber: { type: String, required: true },
	dong: { type: String, required: true },
	latitude: { type: Number, required: true},
	longitude: { type: Number, required: true},
	distance: { type: Number, required: true},
	imgurl: {type: String, required:true},
	rating: {type: Number, required:true},
	storeID : {type:String , required:true},
	menus:
		[
			{
				name: {type: String},
				price: {type: String}
			}
		]
});


module.exports = mongoose.model('Store', storeSchema);