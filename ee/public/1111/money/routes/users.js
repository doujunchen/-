var express = require('express');
var router = express.Router();
var createConn = require("../sources/CreateConn");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/money")
    .post('/money', function (req, res) {
      let conn = createConn();
      conn.connect1().then(result=> {
        return conn.query1("INSERT INTO `money` (`name`, `date`, `amount`, `boole`) VALUES (?,?,?,?)",
            [req.body.name, req.body.date,req.body.amount,req.body.boole]);
      }).then(result=> {
        res.json({state: 1, message: "OK"});
          
        conn.end();
      }).catch(error=> {
        console.log(error);
        res.json({state: error.errno, message: error.code});
      });
    });

module.exports = router;
