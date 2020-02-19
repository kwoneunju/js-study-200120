(function($){
    var arrayPrac = function(_counter) {
        var member = ['윤효상', '신비', '김희진', '홍수조', '권은주', '김원진', '최은혜', '문채민', '이형주', '조현욱', '윤홍미', '김지혜'];
    
        run2();
    
        function run2() {
            var memberCopy = member.slice(),
                howMany = _counter,
                survivor = [],
                nonSurvivor = [];
    
            // step 1 :: 1차 살아남은 팀원
            var savedMember = saveMember(memberCopy, howMany, true);
            nonSurvivor = savedMember[0];
            survivor = savedMember[1];
            outputHtml('<strong style="display:block;padding:5px 0;">step1.</strong><p style="padding:10x 0;"> <strong>survivor</strong>: ' + survivor + '</p><p style="padding:10x 0;"><strong>nonSurvivor:</strong> ' + nonSurvivor + '</p>');
            // console.log('step1. survivor: ', survivor, ' / nonSurvivor: ', nonSurvivor);
    
            // step 2 :: 식량을 구하러 간 팀원
            var mealMember = findMeal(survivor);
            outputHtml('<strong style="display:block;padding:5px 0;">step2.</strong> <p style="padding:10x 0;"> <strong>mealMember</strong>: ' + mealMember + '</p>');
            // console.log('step2. mealMember: ', mealMember);
    
            // step 3 :: 식량을 구하고 살아남은 팀원
            var bestMealMember = bestMeal(mealMember);
            outputHtml('<strong style="display:block;padding:5px 0;">step3.</strong><p style="padding:10x 0;"> <strong> bestMealMember</strong>: ' + bestMealMember[0] + '</p>');
            // console.log('step3. bestMealMember: ', bestMealMember);
    
            // step 4 :: 살아남은 자 & 살아남지 못한 자 출력
            survivor = survivor.concat(bestMealMember[0]);
            nonSurvivor = nonSurvivor.concat(bestMealMember[1]);
            outputHtml('<strong style="display:block;padding:5px 0;">step4.</strong> <p style="padding:10x 0;"> <strong>survivor</strong>: ' + survivor + '</p><p style="padding:10x 0;"><strong>nonSurvivor</strong>: ' + nonSurvivor + '</p>');
            // console.log('step4. survivor: ', survivor, ' / nonSurvivor: ', nonSurvivor);
        }
    
        // random new member
        function random(_counter) {
            return parseInt(Math.floor(Math.random() * _counter));
        }
    
        // save member
        function saveMember(_group, _counter, _noRandom, _condition) {
            var arrNonSurvivor = _group,
                arrMember = [],
                noRandom = _noRandom == true ? true : false,
                counter = _counter | 0,
                index = random(arrNonSurvivor.length);
    
            arrMember.push(arrNonSurvivor);
            arrMember.push([]);
    
            if(noRandom == false) {
                index = 1;
            }
            
            for(var i = 0; i < counter; i++) {
                if(index == 0) {
                    arrMember[1].push(arrNonSurvivor.shift());
                } else if(index == arrNonSurvivor.length) {
                    arrMember[1].push(arrNonSurvivor.pop());
                } else {
                    arrMember[1].push(arrNonSurvivor[index]);
                    arrNonSurvivor.splice(index, 1);
                }
                
                if(noRandom) {
                    index = random(arrNonSurvivor.length);
                } else {
                    index += (_condition - 1);
                }
            }
            arrMember[0] = arrNonSurvivor;
            return arrMember;
        }
    
        function findMeal(_group) {
            return saveMember(_group, Math.floor(_group.length / 2), false, 2)[1];
        }
        
        function bestMeal(_saveMealMember) {
            var bestMealMember = [],
                sortMealMember;
            for(var j = 0; j < (_saveMealMember.length); j++) {
                _saveMealMember[j] = random(10)+':'+_saveMealMember[j];
            }
            sortMealMember = _saveMealMember.sort().reverse();
            bestMealMember.push(sliceText(sortMealMember, 0, _saveMealMember.length/2));
            bestMealMember.push(sliceText(sortMealMember, 2, _saveMealMember.length));
            return bestMealMember;
        }
    
        // slice text
        function sliceText(_group, _startIndex, _endIndex) {
            var returnArrMember = [];
            for(var i = _startIndex; i<_endIndex; i++) {
                returnArrMember.push(_group[i].split(':')[1]);
            }
            return returnArrMember;
        }
    
        function outputHtml(_result) {
            $('.answer').append('<li style="margin:10px 0;">' + _result + '</li>');
        }
    };
    arrayPrac(9);
})(jQuery)