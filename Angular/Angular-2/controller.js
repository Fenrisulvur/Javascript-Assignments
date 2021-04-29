app.controller('classCtrl', function($scope) {
  $scope.car = new Car();
  $scope.carTypes = [
    {Type: "Car", Price: 10000},
    {Type:"Van", Price: 12000},
    {Type:"Truck", Price: 15000}
  ];
  $scope.carEnginesPrice = {
    "V6": 2000,
    "V8": 3000,
  };
  $scope.carDoorPrice = {
    "2 Door": 500,
    "4 Door": 100,
  };
  $scope.carColorPrice = {
    "Black": 900,
    "Red": 1000,
    "Blue": 1050,
  };


  $scope.selectedType = $scope.carTypes[0];
  $scope.selectedColor = "Black";
  $scope.selectedDoor = "2 Door";
  $scope.selectedEngine = "V6";
  $scope.finalPrice = 0;

  $scope.calc = function()
  {
    $scope.finalPrice = $scope.selectedType.Price +
    $scope.carEnginesPrice[$scope.selectedEngine] +
    $scope.carDoorPrice[$scope.selectedDoor] +
    $scope.carColorPrice[$scope.selectedColor]
    document.getElementById("orderData").textContent =
    "Vehicle Type: "+ $scope.selectedType.Type + " / $" + $scope.selectedType.Price +
    "\nColor: "+ $scope.selectedColor + " / $" + $scope.carColorPrice[$scope.selectedColor] +
    "\nDoor Option: "+ $scope.selectedDoor + " / $" + $scope.carDoorPrice[$scope.selectedDoor] +
    "\nEngine: "+ $scope.selectedEngine + " / $" + $scope.carEnginesPrice[$scope.selectedEngine]
  }

});
