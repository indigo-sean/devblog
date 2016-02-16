DevBlog.controller('HomeCtrl', ['$scope', '$http', 'UserService', function ($scope, $http, UserService) {
    
  console.log('HomeCtrl Loaded!');
    
  $scope.UserService = UserService;
  console.log('UserService: ', UserService);

  $scope.userCheck = function (field) {
    //console.log(field);
  };
  $scope.submitUser = function (obj) {
    nullify(obj);
    if (obj.userName == null) { return };
    if (obj.email == null) { return };
    console.log('Sending...');
    $http.post('/api/users', UserService)
      .then(function (res){
        console.log('Response: ', res);
        clearFields(obj);
      }, function (err) {
        console.log('Error: ', err);
      });
  };

  function clearFields(obj) {
    for(var prop in obj) {
      obj[prop] = null;
    };
  };

  function nullify(obj) {
    for (var prop in obj) {
      if (obj[prop] == '') {
        obj[prop] = null;
      };
    };
  };




}]);