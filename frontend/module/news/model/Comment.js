import Model from './../../../common/model/Model';

class Comment extends Model {
    constructor (attrs = {}) {
        let attributes = ['id', 'author', 'create_time', 'text'];
        super(attributes, attrs);
    }
}

export default Comment;