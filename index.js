var fs = require('fs'),
    path = require('path'),
    restify = require('restify')


// Exception/Erros tracker for NodeJS

process.on('uncaughtException', function (err) {
    console.log(err);
});

var app = restify.createServer({
    name: "Microservice1",
    version: ['1.0.0']
    /*formatters: {
        'application/json': function (req, res, body, cb) {
            return cb(null, JSON.stringify(body, null, space = 2));
        }
    }*/
});


app.pre(restify.plugins.fullResponse());
app.pre(restify.pre.sanitizePath());
app.use(restify.plugins.gzipResponse());
app.use(restify.plugins.bodyParser());


// Load all API modules

require('./modules/routes.js')(app);



// Needed for development only. Angular 4 issue with CORS

// app.on("MethodNotAllowed", gbl.methodNotAllowed);
// app.use(gbl.allowCrossDomain);

app.listen(7002);

console.log(" ");
console.log(app.name, "listening on port", 7002);
console.log(" ");
