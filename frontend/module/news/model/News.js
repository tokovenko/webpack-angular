import Comment from './Comment';

class News {
    constructor (attributes = []) {
        this.id = attributes.id || '';
        this.name = attributes.name || '';
        this.create_time = attributes.create_time || '';
        this.short_text = attributes.short_text || '';
        this.image = attributes.image || '';
        this.likesCount = attributes.likesCount || 0;
        this.isLiked = attributes.isLiked || false;

        let comments = attributes.comments || [];
        this.comments = comments.map(attrs => new Comment(attrs))

    }

    setLike(like) {
        this.isLiked = like;
        this.isLiked ? this.likesCount++ : this.likesCount--;
    }

    addComment(data) {
        var attrs = Object.assign({}, data);
        attrs.author = "E.T.";
        attrs.create_time = new Date();
        this.comments.push(new Comment(attrs));
    }
}

export default News;