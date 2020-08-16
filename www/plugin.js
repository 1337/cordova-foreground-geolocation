var exec = require('cordova/exec');

var PLUGIN_NAME = 'ForegroundGeolocation';

var ForegroundGeolocation = {
    watchPosition: function (str, cb) {
        exec(cb, null, PLUGIN_NAME, 'echo', [str]);
    }
};

module.exports = ForegroundGeolocation;
