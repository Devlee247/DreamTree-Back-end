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
	imgurl: {type: String, required:true},
	rating: {type: Number, required:true},
	menus:
		[
			{
				menu: {type: String},
				price: {type: String}
			}
		]
});


module.exports = mongoose.model('Store', storeSchema);