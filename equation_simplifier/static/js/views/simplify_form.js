define([
    'backbone',
    'text!templates/simplify_form.html'
], function(Backbone, template) {
    var SimplifyForm = Backbone.View.extend({
        events: {
            'submit #simplify-form': 'onSubmit'
        },

        template: _.template(template),

        onSubmit: function(event) {
            event.preventDefault();
            this.model.set('expression', $('input[name=expression-value]').val());
            this.getResult();
        },

        getResult: _.throttle(function() {
            var that = this;
            $.ajax({
                url: '/simplify',
                data: {
                    expression: this.model.get('expression')
                }
            }).done(function(result) {
                if (result.error) {
                    that.model.set({
                        result: '',
                        invalid: true
                    });
                } else {
                    that.model.set({
                        result: result.simplified_expr,
                        invalid: false
                    });
                }
            }).fail(function() {
                alert('error');
            });
        }, 1000),

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
    return SimplifyForm;
});
