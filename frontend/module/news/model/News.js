import Comment from './Comment';
import Like from './Like';

class News {
    constructor (attributes = {}) {
        this.id = attributes.id || '';
        this.name = attributes.name || '';
        this.create_time = attributes.create_time || '';
        this.short_text = attributes.short_text || '';
        this.image = attributes.image || '';
        this.likesCount = attributes.likesCount || 0;

        let comments = attributes.comments || [];
        this.comments = comments.map(attrs => new Comment(attrs));

        this.isLiked = attributes.isLiked ? new Like(attributes.isLiked) : null;
    }

    setLike(model) {
        if(!model) {
            let model = new Like({
                news_id: 1,
                author_id: 1
            });
            return model.save().then(function(data) {
                return new Like(data);
            });
        } else {
            return model.remove().then(function(data) {
                return null;
            });
        }
    }

    addComment(data) {
        let attrs = Object.assign({}, data);
        let model = new Comment(attrs);
        return model.save();
    }
}

export default News;