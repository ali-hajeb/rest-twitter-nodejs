const jwt = require("jsonwebtoken");

function Auth(token) {
	this.token = token;

	this.generateToken = (username, id) => {
		const access = jwt.sign({ username, id }, this.token);
		return access;
	};

	this.validateToken = (req, res, next) => {
		const token = req.headers["jwt"];
		if (!token) {
			return res.status(401).json({ message: "not valid token" });
		}
		jwt.verify(token, this.token, (err, username) => {
			if (err) {
				return res.status(403).json({ message: "not valid token" });
			}
			req.username = username.username;
			next();
		});
	};
}

module.exports = Auth;
