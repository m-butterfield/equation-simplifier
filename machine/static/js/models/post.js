define([
    'backbone'
], function(Backbone) {
    var Post = Backbone.Model.extend({
        defaults: {
            "postContent":  "give me some content!"
        }
    });
    return Post;
});
