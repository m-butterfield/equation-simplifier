define([
    'backbone',
    'text!templates/expression_result.html'
], function(Backbone, template) {
    var ExpressionResult = Backbone.View.extend({
        template: _.template(template),

        initialize: function() {
            this.listenTo(this.model, "change:result change:invalid", this.render);
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
    return ExpressionResult;
});
