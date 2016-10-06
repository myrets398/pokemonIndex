angular.module("routerApp").controller("homeCtrl",function($scope,mainServ){
  $scope.name=mainServ.name;
})
//list pokemon
var pokemons=["happy", "sad", "indifferent", "fourth demeanor"];

return $http({
  method: "GET",

url: "http://pokeapi.co/api/v2/pokemon"
}).then(function(response){
  return response.data.results;
});

return $http({
  method: "GET",
 url: "http://pokeapi.co/api/v2/pokemon/2/"
}).then(function(response){
  return response.data.results;
});
