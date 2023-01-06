const express = require('express');
const app = express();

// public というフォルダに入れられた静的ファイルはそのまま表示
app.use(express.static(__dirname + '/public'));

// bodyParser
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// POSTリクエストを受け付ける
app.post('/api/post', function (req, res) {

    for (key in req.body) {
        console.log(key, '=', req.body[key]);
    }
    res.end();

    res.send('hello world(POST)');
});

// GET リクエストを受け付ける
app.get('/api/get', function (req, res) {
    res.send('hello world(GET)');
});

// app.listen(8080);
app.listen(process.env.PORT || 8080);

console.log(`server start! http://localhost:8080/`);