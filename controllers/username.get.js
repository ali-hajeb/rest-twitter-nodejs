const Users = require("../models/User/methods.js");
const Tweets = require("../models/Tweet/methods.js");

function register({ app }, path = "/api/user/:username") {
	app.get(path, async function (req, res) {
		try {
			const { username } = req.params;
			const user = await Users.findByUserName(username);
			if (user === null) {
				return res.status(404).send({ message: "user not found" });
			}
			const tweets = await Tweets.getUserTweetsCleaned(user);
			const followers = await Users.cleanUsers(user.followers);
			const followings = await Users.cleanUsers(user.followings);
			return res.send({ tweets, followings, followers, username: user.username, biography: user.biography, name: user.name, id: user._id });
		} catch (err) {
			console.error(err);
			return res.status(400).send({ error: err });
		}
	});
}

module.exports = register;
