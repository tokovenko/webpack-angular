import Model from './../../../common/model/Model';

class Comment extends Model {
    constructor (attrs = {}) {

        let attributes = ['id', 'author', 'create_time', 'text'];
        super(attributes, attrs);

        this.addBehaviour('beforeSave', () => {
            this.setAttribute('author', 'E.T.');
        })

    }
}

export default Comment;