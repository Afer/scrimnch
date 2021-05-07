var express = require('express');
var app = express();

app.use(express.static('./'));

app.get('/:x/:y', function (req, res) {
   console.log(req.params.x, req.params.y);
   res.send('done');
});

app.listen(5000, function () {
    console.log('listening...');
});