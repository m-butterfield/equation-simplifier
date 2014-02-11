define([
    'backbone'
], function(Backbone) {
    var Expression = Backbone.Model.extend({
        defaults: {
            "expression": ""
        }
    });
    return Expression;
});
