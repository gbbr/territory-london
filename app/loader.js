
require.config({
    baseUrl: 'app',

    paths: {
        'libs': '../libs'
    }
});

require([
        // Vendor
        'libs/angular.min'

    ], function() {
         require([
             // Vendor Plug-ins
             'libs/angular-route.min',
             'libs/angular-animate.min',
             'libs/angular-sanitize-1.0.1.js',
             'libs/angular-touch.min.js',
             'libs/jquery-1.11.0.min'

         ], function() {
             require([
                 // Components
                 'controllers/HomeController',
                 'controllers/AboutController',

                 'directives/CarouselDirective',
                 'directives/AnimateOutDirective',

                 'services/DataSourceService'

             ], function() {
                 // Bootstrap the document
                 require(['app'], function() { angular.bootstrap(document, ["TerritoryLondon"]); });
             });

         });
    }
);
