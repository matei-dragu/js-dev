var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {

    console.info("PhoneListCtrl Constructor")
    console.info($scope)
    
    $scope.phones = [ {
        'name' : 'Nexus S',
        'snippet' : 'Fast just got faster with Nexus S.'
    }, {
        'name' : 'Motorola XOOM™ with Wi-Fi',
        'snippet' : 'The Next, Next Generation tablet.'
    }, {
        'name' : 'MOTOROLA XOOM™',
        'snippet' : 'The Next, Next Generation tablet.'
    } ];

    $scope.name = "Pls2";

    $scope.gob = function() {
        return "GOOOBIIEE6";
    }
});


var testModule001 = angular.module('testModule001', []);

/**
 * The 'DemoController1' CONTROLLER CONSTRUCTOR FUNCTION.
 */
testModule001.controller('DemoController1', ['$scope', 'serviceWithoutDependencies', function($scope, serviceWithoutDependencies) {
    
}])

/**
 * This is the 'serviceWithoutDependencies' SERVICE FACTORY FUNCTION.
 */
testModule001.factory('serviceWithoutDependencies', [function() {
    console.log("Constructing the 'serviceWithoutDependencies' service instance");
    
}]);

