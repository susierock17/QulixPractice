angular.module('app.services', [])

    .factory('rateService', ['$http', function ($http) {

        var rates;

        return {

            getRates: function (callback) {

                $http.get('http://localhost:8100/api?ondate=', {
                    transformResponse: function (response) {
                        var x2js = new X2JS();
                        rates = x2js.xml_str2json(response);
                        console.log(rates);
                        return rates.DailyExRates.Currency;
                    }
                })
                    .success(function (response, status) {
                        // console.log(response);
                        callback(response);
                    })

            },

            rates: rates
            // ,
            // getRate: function (index) {
            //     return rates[index];
            // }
            
        }

    }])

    .service('BlankService', [function () {

    }]);

