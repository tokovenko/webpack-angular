class News {
    constructor (attributes = []) {
        this.id = attributes.id || '';
        this.name = attributes.name || '';
        this.create_time = attributes.create_time || '';
        this.short_text = attributes.short_text || '';
        this.image = attributes.image || '';
        this.likesCount = attributes.likesCount || 0;
        this.isLiked = attributes.isLiked || false;
        this.comments = attributes.comments || [];
    }

    setLike(like) {
        this.isLiked = like;
        this.isLiked ? this.likesCount++ : this.likesCount--;
    }

    addComment(data) {
        var comment = Object.assign({}, data);
        comment.author = "E.T.";
        comment.create_time = new Date();
        this.comments.push(comment);
    }
}

export default News;