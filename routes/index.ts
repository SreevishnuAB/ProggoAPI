import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/ping', function(req, res, next) {
  console.log("Getting ping, responding with pong");
  return res.status(200).jsonp({"data": "pong"});
});

module.exports = router;
