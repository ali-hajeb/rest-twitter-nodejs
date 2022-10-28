const User = require("../models/User/methods.js");

function register({ app, auth }, path = "/api/login") {
	app.post(path, async function (req, res) {
		const message = "User Not Found";
		try {
			const { username, password } = req.body;
			const user = await User.isValid(username, password);
			if (user === null) {
				return res.status(400).send({ message });
			}
			const token = auth.generateToken(username, user._id);
			return res.status(200).send({ token });
		} catch {
			return res.status(400).send({ message });
		}
	});
}

module.exports = register;
