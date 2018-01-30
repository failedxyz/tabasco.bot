const login = require("facebook-chat-api");

const config = require("./config");

login(config, function callback(err, api) {
	if (err) return console.error(err);
	console.log("Connected to Facebook.");
	api.listen(function(err, message) {
	});
});