
function DataSourceService($http) {
    return {

        getHome: function() {
            return $http({ method: 'GET', url: 'json/home.json', cache: true });
        }

    }
}