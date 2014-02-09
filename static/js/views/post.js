define([
    'backbone',
    'text!templates/post.html'
], function(Backbone, template) {
    var PostView = Backbone.View.extend({
        template: template,

        render: function() {
            this.$el.html(this.template);
            return this;
        }
    });
    return PostView;
});
