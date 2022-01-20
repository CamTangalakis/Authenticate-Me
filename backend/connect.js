var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: 5433,
  user: "auth_app",
  password: "password"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
