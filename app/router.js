var util = require('util');

var images = require("./controller/images");

function router(app){

	app.get("/", function (req, res) {
		var index_html = require('fs').readFileSync(__dirname+'/public/index.html');
        res.end(index_html)
	})	

	app.get("/images", images.getImages);
}

module.exports = router;

