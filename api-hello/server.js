var express      = require('express');
var bodyParser   = require('body-parser');
var morgan       = require('morgan');
var http         = require('http');
var responseTime = require('response-time');

var port    = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(responseTime());
app.use(morgan('combined'));
var router = express.Router()
router.route('/')
  .get(function(req,res) {
    res.status(200).json({
      message: 'Hello!'
    });
  });
app.use('/api', router);
var server = http.createServer(app);
server.listen(port, function() {
  console.log('Hello API http', port);
});
