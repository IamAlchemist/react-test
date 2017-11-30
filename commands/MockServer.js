/**
 * Created by kerwinliu on 2017/11/9.
 */
/**
 * Mock 服务器
 */
var app = require('express')(),
    cors = require('cors'),
    config = require('../mock.config');

app.use(cors());

Object.keys(config).forEach(function(router) {
    app.all(`/mock${router}`, function(req, res) {
        if(typeof config[router] === 'function') {
            config[router](req, res);
        } else if(typeof config[router] === 'object') {
            res.end(JSON.stringify(config[router]));
        } else {
            res.end(config[router]);
        }
    });
});

var server = app.listen(3000, () => {
    var port = server.address().port;
    console.log('Listening at http://localhost:' + port);
});
