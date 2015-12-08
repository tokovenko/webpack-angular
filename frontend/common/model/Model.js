import HttpRequest from './../helper/HttpRequest';

class Model {
    constructor (attributes, attrs) {
        this._attributes = attributes;
        this._attributes.map(attribute => this[attribute] = attrs[attribute] || '');

        this.behaviours = {};
        this.addBehaviour('beforeSave', () => {
            this.setAttribute('create_time', new Date());
        });
        this.addBehaviour('afterSave', function() {
            console.log('afterSave...');
        });

        this.isNewRecord = this._attributes.id == '';
    }

    get attributes() {
        let attributes = {};
        this._attributes.map(attribute => attributes[attribute] = this[attribute] || '');
        return attributes;
    }

    setAttribute(name, value) {
        if(this._attributes[name]) {
            this._attributes[name] =  this[name] =  value;
        }
    }

    addBehaviour(name, callback) {
        let behaviours = this.behaviours[name] || [];
        behaviours.push(callback);
        this.behaviours[name] = behaviours;

        return this;
    }

    runBehaviours(name) {
        let behaviours = this.behaviours[name] || [];
        behaviours.map(behaviour => behaviour());
    }

    save() {
        const self = this;

        let data = {};
            data[this.constructor.name] = this.attributes;

        this.runBehaviours('beforeSave');
        let promise = new HttpRequest({
            type: 'post',
            data: data,
            url: '/' + this.constructor.name.toLowerCase() + '/save',
            modelName: this.constructor.name
        });

        promise.then(() => {
            this.id = this.id || 4;
            this.runBehaviours('afterSave');
        });

        return promise;
    }

    remove() {
        let promise = new HttpRequest({
            url: '/' + this.constructor.name.toLowerCase() + '/delete?id=' + this.id,
            modelName: this.constructor.name
        });

        promise.then(() => {
            this.id = '';
        });

        return promise;
    }
}

export default Model;