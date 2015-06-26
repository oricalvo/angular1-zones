angular.module("ngZone", []).run(["$rootScope", function ($rootScope) {
    var scopePrototype = $rootScope.constructor.prototype;

    var originalApply = scopePrototype.$apply;

    var zoneOptions = {
        afterTask: function () {
            try {
                $rootScope.$digest();
            } catch (e) {
                $exceptionHandler(e);
                throw e;
            }
        }
    };

    scopePrototype.$apply = function () {
        var scope = this;
        var applyArgs = arguments;

        zone.fork(zoneOptions).run(function () {
            originalApply.apply(scope, applyArgs);
        });
    }
}]);
