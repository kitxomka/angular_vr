app.controller('mainCtrl', function($scope, $http, $stateParams, $filter, $rootScope, $state){
    $scope.stateParams = $stateParams;
    var idParam = Object.keys($stateParams)[0];                             //what we want to select by (by: categoryId or tagId)
    var nameCapitalized = $filter('capitalize')($stateParams[idParam]);
    $scope.title = nameCapitalized;
    $http.get('/db-mok/data.json')
        .success(function(data) {
            /**
             * Function get objects by category or tags and put it on $scope
             */
            //console.log(data);
            var countSitesWithSelected = 0;     // counter of matched sites by selected category/tag in $stateParams[idParam]
            var arrByIdParam = [];                     // will contain the sites obj by selected category/tag

            if(idParam == 'categoryId' || idParam == 'tagId'){
                $rootScope.selectedBy = idParam == 'categoryId' ? 'Category' : 'Tag';     //checking What's Extend of idParam
                for(var i= 0; i<data.length; i++){
                    for(var j=0; j<data[i][idParam].length; j++){
                        if(data[i][idParam][j] == nameCapitalized){
                            arrByIdParam.push(data[i]);
                            countSitesWithSelected++;
                        }
                    }
                }
                $scope.listOfSelected = arrByIdParam;
            }
            else if (idParam == 'Search'){
                $rootScope.selectedBy = 'Search';                  //checking What's Extend of idParam
                $scope.tagName = '';
                var tagIdArray = [];                    // will contain all the tags
                for(var h=0; h<data.length; h++){
                    for(var m=0; m<data[h].tagId.length; m++){
                        console.log(data[h].tagId[m]);
                        tagIdArray.push(data[h].tagId[m]);
                        console.log(tagIdArray);
                    }
                    $scope.tags = tagIdArray;
                    console.log(tagIdArray);
                }
            }

        })

        .error(function(err) {
            //return err;
        });

    $(function(){
        $('.nav-tabs li').on('click', function(e){
            $(this).addClass('active-tab').siblings().removeClass('active-tab');
        })
    })
});

