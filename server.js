//install express server
const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('./dist/assignment'))

app.get('/*', function(req,res) {
    res.sendFile(path.join(_dirname, '/dist/assignment}/index.html'));
});

app.listen(process.env.PORT || 5000)