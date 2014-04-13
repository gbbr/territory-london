
function HomeController($scope, $dataSource, $location) {

    $dataSource.getHome()
        .then(function(response) {

            $scope.home = response.data;
            $scope.activePage = $location.search().page || 0;

            // Preload images

            var images = [];

            $scope.home.pages.forEach(function (item) {
                item.images.forEach(function (imageItem) {
                    var image = new Image();
                    image.src = imageItem.url;
                    images.push(image);
                });
            }, images);

            $scope.$on('$destroy', function () {
                // delete images;
            });
        });

    $scope.$on('$locationChangeStart', function() {
        var pageExists = $location.search().page && $scope.home.pages[$location.search().page];
        $scope.changePage(pageExists ? $location.search().page : 0);
    });

    $scope.goLeft = function() {
        if ($scope.activePage > 0) {
            $scope.changePage(--$scope.activePage);
        }
    }

    $scope.goRight = function() {
        if ($scope.activePage < $scope.home.pages.length - 1) {
            $scope.changePage(++$scope.activePage);
        }
    }

    $scope.changePage = function(id) {
        $location.search('page', id !== 0 ? id : null);
        $scope.activePage = id;
    };
}