const mysql = require('mysql');

// DBに接続する設定情報
const con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'Laravel_user',
    password: 'password123',
    database: 'health_care'
});

con.connect((err) => {

    if (err) throw err;

    console.log('接続完了');
//テーブル作成
    con.query('CREATE TABLE calorie_data (id int NOT NULL, name VARCHAR(10) NOT NULL, num int NOT NULL)', (err, result) =>  {
        if (err) throw err;
        console.log('テーブルが作成されました');
        console.log(result);
    });
});
