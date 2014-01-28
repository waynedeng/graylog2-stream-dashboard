'use strict';

angular.module('graylog2StreamdashApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'base64',
  'settingsProvider',
  'streamsServices',
  'streamAlertsServices',
  'messagesServices'
])
  .config(function ($httpProvider, settingsProvider) {
  var Settings = settingsProvider.$get();
	$httpProvider.defaults.withCredentials = true;
	$httpProvider.defaults.headers.common.Authorization = Settings.authToken();
})
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/streams.html',
        controller: 'StreamsCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .when('/messages/:id', {
        templateUrl: 'views/messages.html',
        controller: 'MessagesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
