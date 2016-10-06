angular.module("routerApp",['ui.router']).config(function($stateProvider,$urlRouterProvider){
  $stateProvider
  .state("home",{
    url: "/",
    templateUrl: "<h2>views/home.html</h2>",
    controller: "homeCtrl.js"
  });

.state("about",{
  url:"/about",
  templateUrl: "views/about.html",
  controller:"mainCtrl.js"
});

.state("contact",{
  url:"/contact",
  templateUrl: "views/contact.html",
  controller:"mainCtrl.js"
});
};
  {
    .state("about",{url:"/about",templateUrl:"views/about.html"
  //  ui.router above
  })

  .state("contact",{url: "/contact",templateUrl:"views/contact.html"
});

{{test?/?/}};
  $urlRouterProvider.otherwise("/");


});
