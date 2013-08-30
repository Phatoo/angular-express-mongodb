function contentList($scope, $http) {

    $scope.init = function(){
        console.log('contentList init')
        fetch();
    }

    function fetch() {
        $http({
            url: "http://localhost:5000/images?id="+$scope.id,
            method: "GET"

        }).success(function(data, status, headers, config) {
            $scope.content = data;

        }).error(function(data, status, headers, config) {
            $scope.status = status;
        });
    }
    
}