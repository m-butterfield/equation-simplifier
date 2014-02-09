define([
    'views/post'
], function(Post) {
    var Post = new Post({
        el: $('#post')
    });
    Post.render();
});
