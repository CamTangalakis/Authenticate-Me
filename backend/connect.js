var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: 5432,
  user: "untokd_app",
  password: "RYcbAR"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
