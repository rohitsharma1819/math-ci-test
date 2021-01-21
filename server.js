const express = require('express');

const app = express();

app.get('/math/add/:first/:second', function (req, res) {
    let { first, second } = req.params;

    let result = parseInt(first) + parseInt(second);

    res.send({ data: result, status: 200 }).end();
})

app.get('/math/sub/:first/:second', function (req, res) {
    let { first, second } = req.params;
    res.send(first - second);
})


app.listen(3500);