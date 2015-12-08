import Model from './../../../common/model/Model';

class Like extends Model {
    constructor (attrs = {}) {
        let attributes = ['id', 'news_id', 'author_id', 'create_time'];
        super(attributes, attrs);
    }
}

export default Like;