function CarouselDirective($interval) {
    return {
        restrict: 'A',
        transclude: true,
        scope: {
            dataStore: '=carousel'
        },
        templateUrl: 'templates/CarouselView.html',

        link: function(scope, element, attr) {
            var interval;

            scope.$watch('dataStore', function(newVal) {

                if (!newVal)
                    return;

                scope.activeSlide = 0;
                scope.imageStore = scope.dataStore.images;

                if (interval)
                    $interval.cancel(interval);

                if(scope.imageStore.length > 1) {
                    interval = $interval(function() {
                        scope.activeSlide = (scope.activeSlide < scope.imageStore.length - 1) ? scope.activeSlide + 1 : 0;
                    }, 3000);
                }
            });

            scope.$on('$destroy', function() {
                $interval.cancel(interval);
            });
        }
    }
}