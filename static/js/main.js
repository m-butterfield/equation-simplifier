require.config({
    baseUrl: 'static/js',
    paths: {
        jquery: '../vendor/jquery',
        riot: '../vendor/riot'
    },
    "shim": {
        "riot": ["jquery"]
    },
    urlArgs: "bust=" + Math.floor(Math.random() * 1000000000)
});

require(['app']);
