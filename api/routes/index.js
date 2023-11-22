var express = require('express');
var router = express.Router();
var my_sql = require('mysql');



const connection = my_sql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'trusted_brands',
});
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});
/* GET home page. */
router.get('/', function(req, res, next)
{


  connection.query('SELECT * FROM brands', (err, results) => {
    if (err) {
      console.error('Error executing MySQL query: ' + err.stack);
      res.status(500).send('Error fetching data from MySQL');
      return;
    }
    // Send the fetched data as JSON response
    res.json(results);
  });
  //res.render('index', { title: 'Express' });
});
const app = express();
const PORT = 500; // Choose a port number
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


module.exports = router;
