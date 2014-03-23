define([
    'backbone'
], function(Backbone) {
    var Expression = Backbone.Model.extend({
        defaults: {
            "expression": "",
            "result": "",
            "invalid": false
        }
    });
    return Expression;
});
