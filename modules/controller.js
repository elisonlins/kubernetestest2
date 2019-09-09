
module.exports = {

    api1: function (req, res, next) {
        console.log('call api1');
        res.json({success: "true", microservice: "2", api: "api1"});
        return next();
    },

    api2: function (req, res, next) {
        console.log('call api2');
        res.json({success: "true",  microservice: "2", api: "api2"});
        return next();
    }
};