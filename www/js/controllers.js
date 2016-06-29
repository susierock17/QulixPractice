angular.module('app.controllers', [])

    .controller('page1Ctrl', function ($scope, $stateParams, rateService) {


        loadRates = function (response) {
            $scope.rateData = response;
        }
        rateService.getRates(loadRates);

        $scope.currencies = [
            {
                "id": 170,
                "title_eng": "AUD",
                "title_rus": "(Австралийский доллар)",
                "image": "img/32/Australia.png"
            },
            {
                "id": 191,
                "title_eng": "BGN",
                "title_rus": "(Болгарский лев)",
                "image": "img/32/Bulgaria.png"
            },
            {
                "id": 224,
                "title_eng": "UAH",
                "title_rus": "(Украинская гривна)",
                "image": "img/32/Ukraine.png"
            },
            {
                "id": 145,
                "title_eng": "USD",
                "title_rus": "(Американский доллар)",
                "image": "img/32/United-States.png"

            },
            {
                "id": 19,
                "title_eng": "EUR",
                "title_rus": "(Евро)",
                "image": "img/32/European-Union.png"
            },
            {
                "id": 219,
                "title_eng": "PLN",
                "title_rus": "(Польский злотый)",
                "image": "img/32/Poland.png"
            },
            {
                "id": 23,
                "title_eng": "CAD",
                "title_rus": "(Канадский доллар)",
                "image": "img/32/Canada.png"
            },
            {
                "id": 254,
                "title_eng": "CNY",
                "title_rus": "(Китайский юань)",
                "image": "img/32/China.png"
            },
            {
                "id": 190,
                "title_eng": "RUB",
                "title_rus": "(Российский рубль)",
                "image": "img/32/Russia.png"
            },
            {
                "id": 256,
                "title_eng": "TRY",
                "title_rus": "(Турецкая лира)",
                "image": "img/32/Turkey.png"
            },
            {
                "id": 143,
                "title_eng": "GBP",
                "title_rus": "(Фунт стерлингов)",
                "image": "img/32/United-Kingdom.png"
            },
            {
                "id": 171,
                "title_eng": "CZK",
                "title_rus": "(Чешская крона)",
                "image": "img/32/Czech-Republic.png"
            },
            {
                "id": 130,
                "title_eng": "CFH",
                "title_rus": "(Швейцарский франк)",
                "image": "img/32/Switzerland.png"
            }

        ]

        $scope.currencyFilterFunction = function (rate) {
            for (var i = 0; i < $scope.currencies.length; i++) {
                if ($scope.currencies[i].id == rate._Id)
                    return true;
            }
            return false;
        }
    })

    .controller('page2Ctrl', function ($scope, $stateParams, rateService) {
        $scope.currentDate = new Date();
        $scope.minDate = new Date('2011-03-01');

        $scope.data = {
            choice: null,
            inputFirst: null,
            inputSecond: null,
            currencies: [
                {
                    "id": 145,
                    "code": "USD",
                },
                {
                    "id": 19,
                    "code": "EUR",
                },
                {
                    "id": 190,
                    "code": "RUB",
                }
            ]
        }
        $scope.$watch('data.choice', function (newValue) {
            console.log(newValue);
        })

        $scope.$watch('data.inputFirst', function (newValue) {
            console.log(newValue);
        })

        $scope.$watch('data.inputSecond', function (newValue) {
            console.log(newValue);
        })

        loadRates = function (response) {
            $scope.rateHistory = response;
        }

        $scope.getRatesOnPeriod = function () {
            if ($scope.data.inputFirst == null || $scope.data.inputSecond == null || $scope.data.choice == null)
                return;
            else {
            var startDate = ($scope.data.inputFirst.getMonth() + 1) + '/' + $scope.data.inputFirst.getDate() + '/' + $scope.data.inputFirst.getFullYear();
            console.log(startDate);
            var toDate = ($scope.data.inputSecond.getMonth() + 1) + '/' + $scope.data.inputSecond.getDate() + '/' + $scope.data.inputSecond.getFullYear();
            console.log(toDate);
            rateService.getRatesOnPeriod(loadRates, $scope.data.choice, startDate, toDate);
            }
        }
    })

    .controller('page3Ctrl', function ($scope) {

    })

    .controller('page4Ctrl', function ($scope, $stateParams, rateService) {
        loadRates = function (response) {
            $scope.rateData = response;
        }
        rateService.getRates(loadRates);

        $scope.data = {
            firstSelectChoice: null,
            secondSelectChoice: null,
            amount: 0,
            currencies: [
                {
                    "code": "USD",
                },
                {
                    "code": "EUR",
                },
                {
                    "code": "RUB",
                },
                {
                    "code": "BYR",
                },
                {
                    "code": "AUD",
                },
                {
                    "code": "BGN",
                },
                {
                    "code": "UAH",
                },
                {
                    "code": "PLN",
                },
                {
                    "code": "CAD",
                },
                {
                    "code": "CNY",
                },
                {
                    "code": "TRY",
                },
                {
                    "code": "GBP",
                },
                {
                    "code": "CZK",
                },
                {
                    "code": "CFH",
                }
            ]
        }
        getRate = function (some_option) {
            if (!$scope.rateData)
                return;
            for (var i = 0; i < $scope.rateData.length; i++) {
                if (some_option == 'BYR')
                    return 1;
                if ($scope.rateData[i]['CharCode'] == some_option) {
                    return $scope.rateData[i].Rate;
                }
            }
        }

        $scope.$watch('data.amount', function (newValue) {
            $scope.result = (getRate($scope.data.firstSelectChoice) * newValue) / getRate($scope.data.secondSelectChoice);
        });

        $scope.$watch('data.firstSelectChoice', function (newValue) {
            $scope.result = (getRate(newValue) * $scope.data.amount) / getRate($scope.data.secondSelectChoice);
        });

        $scope.$watch('data.secondSelectChoice', function (newValue) {
            $scope.result = (getRate($scope.data.firstSelectChoice) * $scope.data.amount) / getRate(newValue);
        });
    })

    .controller('page6Ctrl', function ($scope) {

    })
