define([
    'backbone',
    'text!templates/post.html'
], function(Backbone, template) {
    var PostView = Backbone.View.extend({
        template: _.template(template),

        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });
    return PostView;
});
