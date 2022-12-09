const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Laravel_user',
  password: 'password123',
  database: 'health_care'
});
 
connection.connect((err) => {
    if (err) {
      console.log('error connecting: ' + err.stack);
      return;
    }
    console.log('success');
  });

  app.get('/', (req, res) => {
    connection.query(
      'SELECT * FROM users',
      (error, results) => {
        console.log(results);
        res.render('hello.ejs');
      }
    );
  });
  
  app.listen(3000);
