const mongoose = require('mongoose');

const { Schema } = mongoose;
const storeSchema = new Schema({
	name: { type: String, required: true },
	type: { type: String, required: true },
	phoneNumber: { type: String, required: true },
	dong: { type: String, required: true },
	location: { type: { type: String }, coordinates: [] }
});

storeSchema.index({ location: "2dsphere"});

module.exports = mongoose.model('Store', storeSchema);