var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "e764qqay0xlsc4cz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "ohixxovzcll1okxh",
  password: "lgl0yi23dca3puw1",
  database: "mphejuc49ge13wxq"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
