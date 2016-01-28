Post = Parse.Object.extend("Post", {}, {
    create: function (text, Author) {
        var post = new Post();
        post.set("text", text);
        post.set("Author", Author);
        return post;
    }
});
