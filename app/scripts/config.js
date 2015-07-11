/* 
Author: Pedro Martins
email: pedro.martins@pixelkiller.net
*/
var require = {
    baseUrl: '/bower_components',
    paths: {
        main: '../scripts/main',
        app: '../scripts/app',
        board: '../scripts/board',
        moonhero: '../scripts/moon-hero',
        jquery: 'jquery/dist/jquery',
    },
    shim: {
        board: {
            deps: [
                'jquery'
            ],
            exports: 'board'
        },
        moonhero: {
            deps: [
                'jquery'
            ],
            exports: 'moonhero'
        }
    },
    packages: []
};