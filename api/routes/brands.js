var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    res.send('respond with a resource');
});

module.exports = router;

/*
const express = require('express');
const my_sql = require('mysql');
const router = express.Router();

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
const app = express();


router.get('/', function (req, res, next) {
    // Perform a MySQL query to fetch data
    connection.query('SELECT * FROM brands', (err, results) => {
        if (err) {
            console.error('Error executing MySQL query: ' + err.stack);
            res.status(500).send('Error fetching data from MySQL');
            return;
        }
        // Send the fetched data as JSON response
        res.json(results);
    });
});

// Start the Express server
const PORT = 5000; // Choose a port number
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = router;*/
