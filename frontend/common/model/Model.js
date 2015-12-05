class Model {
    constructor (attributes, attrs) {
        this._attributes = attributes;
        this._attributes.map(attribute => this[attribute] = attrs[attribute] || '');
    }

    get attributes() {
        let attributes = {};
        this._attributes.map(attribute => attributes[attribute] = this[attribute] || '');
        return attributes;
    }

    save() {
        var attrs = this.attributes;
        var promise = new Promise(function(resolve, reject) {
            var oReq = new XMLHttpRequest();
            oReq.onload = function(e) {
                if(oReq.status==200) {
                    resolve(attrs);
                } else {
                    //resolve(attrs);
                    reject({});
                }
            };
            oReq.onerror = function() {
                reject();
            };
            oReq.open("post", '/save', true);
            oReq.send(JSON.stringify(attrs));
        });
        return promise;
    }
}

export default Model;