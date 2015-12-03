class Comment {
    constructor (attributes = {}) {
        this.id = attributes.id || '';
        this.author = attributes.author || '';
        this.create_time = attributes.create_time || '';
        this.text = attributes.text || '';
    }
}

export default Comment;