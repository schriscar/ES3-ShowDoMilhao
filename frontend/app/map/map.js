/**
 * Created by Pinipa on 20/10/2017.
 */

angular.module('myApp.map', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/map', {
            templateUrl: 'map/map.html',
            controller: 'mapCtrl'
        });
    }])

    .controller('mapCtrl', function($scope) {

        /**
         * SVG path for target icon
         */
        var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

        /**
         * SVG path for plane icon
         */
        var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";

        planeSVG = 'M892.4,307.7C892.4,107.4,764.1,10,500,10c-264.1,0-392.4,97.4-392.4,297.7c0,230.4,369.2,496.2,384.9,507.4c0,0,0.1,0,0.1,0c0.3,0.2,0.6,0.2,1,0.4c2,1.2,4.1,2,6.3,2c2.2,0,4.4-0.9,6.4-2c0.3-0.2,0.7-0.2,1-0.4c0,0,0.1,0,0.1,0C523.2,803.9,892.4,538.2,892.4,307.7z M612.1,307.7c0,176.1-80.6,383.9-112.1,458.4C468.5,691.7,387.9,484,387.9,307.7c0-238.5,64-266,112.1-266C548.1,41.7,612.1,69.2,612.1,307.7z M359.8,307.7c0,152,55.5,321.2,93.4,419.2c-76.9-91.8-205.5-267.8-205.5-419.2c0-148.5,53.8-232,167.5-257.5C378.2,96,359.8,181.4,359.8,307.7z M640.1,307.7c0-126.3-18.3-211.7-55.4-257.5c113.8,25.5,167.5,109,167.5,257.5c0,151.4-128.6,327.4-205.5,419.2C584.7,628.9,640.1,459.7,640.1,307.7z M135.6,307.7c0-125.7,55.7-204.9,172.6-241.7c-59.3,48.4-88.5,128.7-88.5,241.7c0,133.1,87.9,278.5,163.6,379.2C275.2,589.8,135.6,438.9,135.6,307.7z M616.7,686.9c75.8-100.7,163.6-246.1,163.6-379.2c0-113-29.2-193.2-88.5-241.7C808.7,102.8,864.4,182,864.4,307.7C864.4,438.9,724.8,589.8,616.7,686.9z';
        planeSVG = "M764.6,268.6c0.8,144.4-124.4,182.7-162.3,284.8c0,0,0.1,0,0.1,0c-0.2,0.6-0.5,1.1-0.7,1.6,c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0,0,0c-0.7,1.4-1.5,2.6-2.7,3.4c-1,4.8-2.2,10-3.3,15c-2.7,12-5.1,3.9-7.7,16,c-0.5,2.4-2,5.7-1.7,7.6c0.6,5.4,9.7,17.6,12.7,35.2c4.2,0.6,8.1,0.7,8.3,5.1c0.2,3.9-2.9,4.4-7.4,4.5c-0.3,9.9,0,20.2-0.4,30,c-0.5,10.7,0.7,5.8-0.9,14.9c-1.6,8.9-5.6,14.7-13.3,16.8c-7.5,2.1-18.5,1.7-28.2,2.5h-27.8c-19.9,0.3-33.5-3.5-35.6-21.5,c-2-17.6,0.5-23.6-0.2-42.6c-3-0.5-5.6,0.5-7.4-1.1c-2.2-2-1.6-6.2,1.1-7.4c2.1-0.9,4.4,0.2,7.2-0.2,c3.6-21.6,9.1-25.8,11.6-30.9c0.6-1.3,0.8-3,0.9-4.3c0.1-2-1-4.6-1.5-7.2c-3.5-16.9-7-14.5-10.5-30.8c-0.3-1.5-0.5-1.7-1.3-2.5,c-0.8-0.7-1.2-1.6-1.6-2.4c-0.3,0-0.5-0.1-0.8-0.1c-41.4-107.6-172.2-140.1-160.4-299.7c4.7-62.7,47.6-117.6,81.5-136.1,c32.5-17.8,61.4-37.1,133.2-37.1c71.8,0,98,18.6,125.8,35.4C698.8,134.4,764.1,194.4,764.6,268.6z M591.4,632.9,c-3.6-20.5-23.6-27.1-23.6-27.1c0.8,10.9-18.8,11-17.9,0h-7.7c0.3,10.5-18.5,10.7-18.1,0c0,0-18.7,7.3-22.5,27.3,C531.5,633,561.8,633.2,591.4,632.9z";
        /**
         * Create the map
         */
        var map = AmCharts.makeChart( "chartdiv", {
            "type": "map",
            "theme": "none",

            "projection": "winkel3",
            "dataProvider": {
                "map": "worldLow",

                "lines": [ {
                    "id": "line1",
                    "arc": -0.85,
                    "alpha": 0.3,
                    "latitudes": [ 48.8567, 43.8163, 34.3, 23 ],
                    "longitudes": [ 2.3510, -79.4287, -118.15, -82 ]
                }, {
                    "id": "line2",
                    "alpha": 0,
                    "color": "#000000",
                    "latitudes": [ 48.8567, 43.8163, 34.3, 23 ],
                    "longitudes": [ 2.3510, -79.4287, -118.15, -82 ]
                } ],
                "images": [ {
                    "svgPath": targetSVG,
                    "title": "Paris",
                    "latitude": 48.8567,
                    "longitude": 2.3510
                }, {
                    "svgPath": targetSVG,
                    "title": "Toronto",
                    "latitude": 43.8163,
                    "longitude": -79.4287
                }, {
                    "svgPath": targetSVG,
                    "title": "Los Angeles",
                    "latitude": 34.3,
                    "longitude": -118.15
                }, {
                    "svgPath": targetSVG,
                    "title": "Havana",
                    "latitude": 23,
                    "longitude": -82
                }, {
                    "svgPath": planeSVG,
                    "positionOnLine": 0,
                    "color": "#000000",
                    "alpha": 0.1,
                    "animateAlongLine": true,
                    "lineId": "line2",
                    "flipDirection": true,
                    "loop": true,
                    "scale": 0.03,
                    "positionScale": 1.8
                }, {
                    "svgPath": planeSVG,
                    "positionOnLine": 0,
                    "color": "#585869",
                    "animateAlongLine": true,
                    "lineId": "line1",
                    "flipDirection": true,
                    "loop": true,
                    "scale": 0.03,
                    "positionScale": 1.8
                } ]
            },

            "areasSettings": {
                "unlistedAreasColor": "#8dd9ef"
            },

            "imagesSettings": {
                "color": "#585869",
                "rollOverColor": "#585869",
                "selectedColor": "#585869",
                "pauseDuration": 0.2,
                "animationDuration": 4,
                "adjustAnimationSpeed": true
            },

            "linesSettings": {
                "color": "#585869",
                "alpha": 0.4
            },

            "export": {
                "enabled": true
            }

        } );
    });