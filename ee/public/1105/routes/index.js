var express = require('express');
var router = express.Router();
const createConn = require("../sources/Conn");

/* GET home page. */
router.get('/', function (req, res, next) {

  var conn = createConn();

  conn.connect(function (err) {
    if (!err) {
      conn.query("SELECT * FROM `users`", function (err, rows) {
        if (!err) {
          res.render("index", {title: "博客", users: rows});
        } else {
          res.json(err);
        }

        conn.end();
      });
    } else {
      res.json(err);
    }
  });

});

router.get("/register", function (req, res) {
  var conn = createConn();
  conn.connect(function (err) {
    if (!err) {
      conn.query("DELETE FROM `users` WHERE `id`=?", [req.query.id], function (err) {
        if (!err) {
          res.json({state: 1});

        }
      })
    }
  });
});
module.exports = router;
