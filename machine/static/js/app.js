define([
    'models/expression',
    'views/simplify_form'
], function(Expression, SimplifyForm) {

    var simplifyForm = new SimplifyForm({
        el: $("#simplify-form"),
        model: new Expression()
    });
    simplifyForm.render();

});
