const mongoose = require("mongoose");

function initMongo() {
	mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	return ["Tweet", "User"]
		.map((model) => ({
			[model]: require(`./${model}/model.js`),
		}))
		.reduce((p, c) => ({ ...p, ...c }), {});
}

module.exports = initMongo;
