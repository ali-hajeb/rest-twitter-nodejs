const User = require("../models/User/methods.js");

function register({ app, auth }, path = "/signup") {
	async function handler(req, res) {
		try {
			const { email, username, password } = req.body;
			const user = await User.create(username, email, password);
			return res.status(201).send({
				message: "User Created Successfully",
			});
		} catch (err) {
			const errors = err.keyPattern;
			return res.status(400).send({ errors });
		}
	}

	app.post(path, handler);
}

module.exports = register;
