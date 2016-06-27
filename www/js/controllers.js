angular.module('app.controllers', [])
  
.controller('page1Ctrl', function($scope,$stateParams,rateService) {


    loadRates = function(response){
        $scope.rateData = response;
    }
    rateService.getRates(loadRates);
    
    $scope.currencies = [
        {
            "id":145,
            "title_eng":"USD",
            "title_rus":"(Американский доллар)",
            "image":"img/32/United-States.png"
                        
        },
        {
            "title_eng":"EUR",
            "title_rus":"(Евро)",
            "image":"img/32/European-Union.png"
        },
        {
            "title_eng":"RUB",
            "title_rus":"(Российский рубль)",
            "image":"img/32/Russia.png"
        },
        {
            "title_eng":"GBP",
            "title_rus":"(Фунт стерлингов)",
            "image":"img/32/United-Kingdom.png"
        },
        {
            "title_eng":"CFH",
            "title_rus":"(Швейцарский франк)",
            "image":"img/32/Switzerland.png"
        },
        {
            "title_eng":"CAD",
            "title_rus":"(Канадский доллар)",
            "image":"img/32/Canada.png"
        },
        {
            "title_eng":"AUD",
            "title_rus":"(Австралийский доллар)",
            "image":"img/32/Australia.png"
        },
        {
            "title_eng":"CZK",
            "title_rus":"(Чешская крона)",
            "image":"img/32/Czech-Republic.png"
        },
        {
            "title_eng":"PLN",
            "title_rus":"(Польский злотый)",
            "image":"img/32/Poland.png"
        },
        {
            "title_eng":"BGN",
            "title_rus":"(Болгарский лев)",
            "image":"img/32/Bulgaria.png"
        },
        {
            "title_eng":"TRY",
            "title_rus":"(Турецкая лира)",
            "image":"img/32/Turkey.png"
        },
        {
            "title_eng":"CNY",
            "title_rus":"(Китайский юань)",
            "image":"img/32/China.png"
        },
        {
            "title_eng":"UAH",
            "title_rus":"(Украинская гривна)",
            "image":"img/32/Ukraine.png"
        },

    ]
    
    myTrackingFunction = function(rate) {
        $scope.currencies.forEach(function(element) {            
            if(element.id == rate._Id)
                return true;            	
        });             
        return false;   
    }
})
   
.controller('page2Ctrl', function($scope) {

})
   
.controller('page3Ctrl', function($scope) {

})
      
.controller('page4Ctrl', function($scope) {

})
   
.controller('page6Ctrl', function($scope) {

})
 