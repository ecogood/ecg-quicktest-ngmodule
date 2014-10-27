(function() {
  'use strict';

  angular.module('ecg-quicktest')
    .config(config);

  /* @ngInject */
  function config($stateProvider, $urlRouterProvider, urlConfigProvider) {

    var rootUrl = urlConfigProvider.getTemplateRootUrl('ecg-quicktest');

    $stateProvider
      .state('ecgQuicktest', {
        abstract: true,
        url: '/',
        templateUrl: rootUrl+'wrapper/wrapper.html',
        controller: 'EcgQuicktestWrapperCtrl as vm'
      })
      .state('ecgQuicktest.home', {
        url: '',
        templateUrl: rootUrl+'home/home.html',
        controller: 'EcgQuicktestHomeCtrl as vm'
      })
      .state('ecgQuicktest.question', {
        url: 'question/:questionNumber',
        templateUrl: rootUrl+'question/question.html',
        controller: 'EcgQuicktestQuestionsCtrl as vm'
      })
      .state('ecgQuicktest.results', {
        url: 'results',
        templateUrl: rootUrl+'results/results.html',
        controller: 'EcgQuicktestResultsCtrl as vm'
      });
    $urlRouterProvider.otherwise('/');

  }

})();