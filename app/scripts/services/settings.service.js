'use strict';

(function() {

    angular
        .module('simpleArmoryApp')
        .factory('SettingsService', SettingsService);

    function SettingsService($log, $routeParams, $locale) {

        var locale = { language: $locale.id.replace(/-\w+/, '') };

        // en/de/ru, etc.
        locale.setLanguage = function(lang) {
            locale.language = lang;
        }

        return {
            'locale' : locale,

            'WowHeadUrl': 'wowhead.com',
            'apiEndPoint':'api.battle.net',
            'apiKey': '&apikey=kwptv272nvrashj83xtxcdysghbkw6ep',
            'apiProtocol': 'https://',
            'debug': $routeParams['debug'] && $routeParams['debug'] === '1' ? true : false,
            'fakeCompletionTime': 312
        };
    }

})();