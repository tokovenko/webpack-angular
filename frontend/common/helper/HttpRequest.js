class HttpRequest {
    constructor(config) {
        var attrs = config.data || {};
        var url = config.url || '';
        var type = config.type || 'get';
        var modelName = config.modelName;
        return new Promise(function(resolve, reject) {
            var oReq = new XMLHttpRequest();
            oReq.onload = function(e) {
                if(oReq.status==200) {
                    resolve((modelName ? attrs[modelName] : attrs));
                } else {
                    resolve((modelName ? attrs[modelName] : attrs));
                    reject({});
                }
            };
            oReq.onerror = function() {
                reject();
            };
            oReq.open(type, url, true);
            oReq.send(JSON.stringify(attrs));
        });
    }
}

export default HttpRequest;