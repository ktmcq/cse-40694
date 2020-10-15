// component for logging into an account
const login = {
    templateUrl: './auth-login.html',
    controller: 'LoginController'
}

angular
    .module('components.auth')
    .component('login', login)
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            // parent component
            .state('auth', {
                redirectTo: 'auth.login',
                url: '/auth',
                template: '<div ui-view></div>'
            })
            .state('auth.login', {
                url: '/login',
                component: 'login'
            });
        $urlRouterProvider.otherwise('/auth/login');
    });