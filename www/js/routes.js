angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('side-menu21.page1', {
    url: '/Rates',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page1.html',
        controller: 'page1Ctrl'
      }
    }
  })

  .state('side-menu21.page2', {
    url: '/Charts',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page2.html',
        controller: 'page2Ctrl'
      }
    }
  })

  .state('side-menu21.page3', {
    url: '/Settings',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page3.html',
        controller: 'page3Ctrl'
      }
    }
  })

  .state('side-menu21', {
    url: '/Side-Menu',
    templateUrl: 'templates/side-menu21.html',
    abstract:true
  })

  .state('side-menu21.page4', {
    url: '/Converter',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page4.html',
        controller: 'page4Ctrl'
      }
    }
  })

  .state('side-menu21.page6', {
    url: '/Info',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page6.html',
        controller: 'page6Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/Side-Menu/Rates')

  

});