
function AnimateOutDirective($animate) {
    return {
        restrict: 'A',
        scope: {
            animateOut: '='
        },

        link: function(scope, element) {

            scope.$watch('animateOut', function(newValue, oldValue) {

                element.html(oldValue);

                if(newValue && oldValue && newValue.toString() !== oldValue.toString()) {
                    $animate.addClass(element, 'getOut', function() {
                        element.html(newValue);
                        $animate.removeClass(element, 'getOut');
                    });
                }
            });
        }
    }
}