"use strict";

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    Edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    highlighted = false;
    makeTextHighlighted() {
        this.highlighted = true;
    }
}