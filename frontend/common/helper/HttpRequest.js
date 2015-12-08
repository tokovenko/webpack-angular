class HttpRequest {
    constructor(config) {
        var attrs = config.data || {};
        var url = config.url || '';
        var type = config.type || 'get';
        var modelName = config.modelName;
        return new Promise((resolve, reject) => {

            var oReq = new XMLHttpRequest();

            oReq.onload = (e) => {
                if(oReq.status==200) {
                    resolve((modelName ? attrs[modelName] : attrs));
                } else {
                    resolve((modelName ? attrs[modelName] : attrs));
                    reject({});
                }
            };

            oReq.onerror = () => {
                reject();
            };

            oReq.open(type, url, true);

            oReq.send(JSON.stringify(attrs));
        });
    }
}

export default HttpRequest;