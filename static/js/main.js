require.config({
    baseUrl: 'static/js',
    paths: {
        domReady: '../vendor/domReady',
        jquery: '../vendor/jquery',
        riot: '../vendor/riot'
    },
    "shim": {
        "riot": ["jquery"]
    },
    urlArgs: "bust=" + Math.floor(Math.random() * 1000000000)
});

require(['domReady', 'jquery', 'riot'], function(domReady, $) {
    domReady(function() {
        require(['app']);
    });
});
