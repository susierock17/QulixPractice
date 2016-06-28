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
            for(var i = 0;i<$scope.currencies.length;i++){
                if($scope.currencies[i].id == rate._Id)
                    return true;
            }
            return false;
        }
    })

    .controller('page2Ctrl', function ($scope) {

    })

    .controller('page3Ctrl', function ($scope) {

    })

    .controller('page4Ctrl', function ($scope, $stateParams, rateService) {
        
        $scope.currencyConvert = function(){
            var list_first = document.getElementById('currency-first');
            console.log(list_first);
            var option_first = list_first.options[list_first.selectedIndex].text;
            console.log(option_first);
            var input = document.getElementById('input-value').value;
            console.log(input);
            var list_second = document.getElementById('currency-second');
            var option_second = list_second.options[list_second.selectedIndex].text;
            console.log(option_second);
            // if(list_first.selectIndex!= -1)
            console.log(option_first);
        }
    })

    .controller('page6Ctrl', function ($scope) {

    })
