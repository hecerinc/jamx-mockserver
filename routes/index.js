var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/pm25', function(req, res, next){
	console.log("PM25 Data Received");
	console.log("==========================================================================");
	console.log(req.body);
	res.send("Thanks!");
});
router.get("/hello", function(req, res, next){
	res.send('Hello from the other side');
});
router.post('/twitterfeed', function(req, res, next){
	console.log("Twitter Feed");
	console.log("==========================================================================");
	console.log(req.body);
	res.send("Thanks!");
});




module.exports = router;
