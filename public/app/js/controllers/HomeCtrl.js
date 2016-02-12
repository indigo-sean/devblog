DevBlog.controller('HomeCtrl', ['$scope', '$http', 'UserService', function ($scope, $http, UserService) {
    
  console.log('HomeCtrl Loaded!');
    
  $scope.UserService = UserService;
  console.log('UserService: ', UserService);

  $scope.userCheck = function (field) {
    //console.log(field);
  };

  $scope.submitUser = function (obj) {
    console.log(nullify(obj));
    if (nullify(obj) == false) {
      return;
    } else {
      console.log('Sending...');
      $http.post('/api/users', UserService)
        .then(function (res){
          console.log('Response: ', res);
        }, function (err) {
          console.log('Error: ', err);
        });
    }
  };

  function nullify(obj) {
    var res;
    for (var prop in obj) {
      if (obj[prop] === '') {
        obj[prop] = null;
        res = false;
      }
      console.log(prop + ': ', obj[prop]);
    }
    return res;
  }

}]);