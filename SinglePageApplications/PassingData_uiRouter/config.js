app.config(config);
config.$inject=["$stateProvider","$urlRouterProvider"];
function config($stateProvider,$urlRouterProvider) {
    $stateProvider.state("page_one",{
        url:"/page_one/:id/:name",
        templateUrl:"templates/page_one.html",
        controller:"page_one"
    })
        .state("page_two",{
            url:"/page_two/:id/:name",
            templateUrl:"templates/page_two.html",
            controller:"page_two"
        });

    $urlRouterProvider.otherwise("/page_one");
}