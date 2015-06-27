# Angular1-Zones

Integrate zone.js into Angular 1.X application

## What's Angular1-Zones?

With zone.js Angular 1.x application does not need to call $scope.$apply at the end of an asynchronous activity. Zone.js is able to monitor any async activity and inform our code run a digest cycle.

### Installing

```javascript
bower install angular1-zones


Add script references to both zone.js and angular1-zones.js
Your html should look something like

```javascript
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" ng-app="MyApp">
<head>
    <title></title>
</head>
<body>
    <div ng-controller="HomeCtrl">
        <span>{{message}}</span>

        <button ng-click="change()">Change</button>
    </div>

    <script src="angular.js"></script>
    <script src="zone.js"></script>
    <script src="angular1-zones.js"></script>

    <script src="app.js"></script>
    <script src="HomeCtrl.js"></script>
</body>
</html>


Add module dependency. For example,

```javascript
angular.module("MyApp", ["ngZone"]);


Now, inside the controller you can use any browser native async API and don't worry about $scope.$apply. For example,

```javascript
function HomeCtrl($scope) {
    $scope.change = function () {
        setTimeout(function () {
            $scope.message = "XXX";
        }, 1000);
    }
}


## See also
* [zone.js](https://github.com/btford/zone.js/) - zone.js github home
