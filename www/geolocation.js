window.ForegroundGeolocation = function(str, callback) {
    cordova.exec(callback, function(err) {
        callback('Nothing to echo.');
    }, "ForegroundGeolocation", "goregroundGeolocation", [str]);
};
