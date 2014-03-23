define([
    'models/expression',
    'views/simplify_form',
    'views/expression_result'
], function(Expression, SimplifyForm, ExpressionResult) {
    var expression = new Expression();

    var simplifyForm = new SimplifyForm({
        el: $("#simplify-form-div"),
        model: expression
    });

    var expressionResult = new ExpressionResult({
        el: $("#expression-result"),
        model: expression
    });

    simplifyForm.render();

});
