function validate(x)
{
  if(x != "" & !isNaN(x)){
    return true;
  }
  return false;
}

app.controller('classCtrl', function($scope) {
  $scope.classes=[
    {name: "Project Management",period: 4, teacher: "Ray Liddick" }, 
    {name: "Content Management",period: 3, teacher: "Charles Wall" }, 
    {name: "JavaScript",period: 5, teacher: "David Whitmarsh" }, 
    {name: "Job Search",period: 1, teacher: "Mike Gates" }, 
    {name: "Apple Application Development",period: 2, teacher: "Jeffery joiner" }
  ];
  $scope.userArray = [];
  $scope.name = "";
  $scope.price = "";
  $scope.result = 0
  $scope.val1 = 1
  $scope.val2 = 1
  $scope.val3 = 1

  $scope.addItem = function() 
  {
    if($scope.name != "" && $scope.price != "" & !isNaN($scope.price))
    {
      document.getElementById("inpPrice").style = "color: black"
      $scope.userArray.push($scope.name+" / $"+$scope.price); 
      console.log($scope.userArray)
      $scope.name = ""
      $scope.price = ""
    }
    else if(isNaN($scope.price))
    {
      $scope.price = "ENTER A NUMBER"
      document.getElementById("inpPrice").style = "color: red"
    }
  }

  $scope.addition = function() 
  {
    if(validate($scope.val1)&&validate($scope.val2)&&validate($scope.val3))
    {
      $scope.result =  Number($scope.val1)+Number($scope.val2)+Number($scope.val3) 
    }
    else 
    {
      $scope.result = "Malformed input. One of the three boxes is not a valid number."
    }
  }
  
});
