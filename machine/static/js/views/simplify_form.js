define([
    'backbone',
    'text!templates/simplify_form.html'
], function(Backbone, template) {
    var ExpressionView = Backbone.View.extend({
        template: _.template(template),

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
    return ExpressionView;
});
