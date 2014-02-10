define([
    'models/post',
    'views/post'
], function(Post, PostView) {

    var post = new Post();

    var postView = new PostView({
        el: $('#post'),
        model: post
    });
    postView.render();
});
