var arrayPrac = function(_counter) {
    var member = ['윤효상', '신비', '김희진', '홍수조', '권은주', '김원진', '최은혜', '문채민', '이형주', '조현욱', '윤홍미', '김지혜'],
        memberCopy  = member.slice(),
        survivor = [],
        nonSurvivor = [];

    run();

    // random new member
    function random(_counter) {
        return parseInt(Math.floor(Math.random() * _counter));
    }
    // pop member
    function popMember(_group, _counter) {
        var arrNonSurvivor = _group,
            arrSurvivor = [],
            spliceMember = null,
            counter = _counter;
        
        for(var i = 0; i < counter; i++) {
            var index = random(arrNonSurvivor.length);

            if(index == 0) {
                arrSurvivor.push(arrNonSurvivor.shift());
            } else if(index == arrNonSurvivor.length) {
                arrSurvivor.push(arrNonSurvivor.pop());
            } else {
                spliceMember = arrNonSurvivor.splice(0, index);
                arrSurvivor.push(spliceMember.pop());
                arrNonSurvivor = spliceMember.concat(arrNonSurvivor);
            }
        }
        nonSurvivor = nonSurvivor.concat(arrNonSurvivor);
        survivor = arrSurvivor;
    }
    // slice text
    function sliceText(_group, _startIndex, _endIndex) {
        var returnArrMember = [];
        for(var i = _startIndex; i<_endIndex; i++) {
            returnArrMember.push(_group[i].split(':')[1]);
        }
        return returnArrMember;
    }

    function popMealMember() {
        var saveMealMember = [],
            counter = survivor.length - parseInt(survivor.length / 2);

        popMember(survivor, counter);
        saveMealMember = nonSurvivor.splice((member.length - _counter), nonSurvivor.length);

        for(var j = 0; j < (saveMealMember.length); j++) {
            saveMealMember[j] = random(10)+':'+saveMealMember[j];
        }
        saveMealMember.sort().reverse();
        survivor = survivor.concat(sliceText(saveMealMember, 0, saveMealMember.length/2));
        nonSurvivor = nonSurvivor.concat(sliceText(saveMealMember, saveMealMember.length/2, saveMealMember.length));
    }

    function run() {
        // step 1 :: 1차 살아남은 팀원
        popMember(memberCopy, _counter);
        // step 2 :: 식량을 구하러 간 팀원
        popMealMember();
        // step 3 :: 식량을 구하고 살아남은 팀원
        // step 4 :: 살아남은 자 & 살아남지 못한 자 출력
    }

    // function run2() {
    //     member = [];
    //     howMany = 9;
    //     // step 1 :: 1차 살아남은 팀원
    //     savedMember = saveMember(member, howMany);

    //     // step 2 :: 식량을 구하러 간 팀원
    //     mealInfo = findMeal(savedMember);

    //     // step 3 :: 식량을 구하고 살아남은 팀원
    //     savedMember2 = saveMealMember(savedMember, mealInfo);

    //     // step 4 :: 살아남은 자 & 살아남지 못한 자 출력
    //     console.log("survivor : " + savedMember2);
    //     console.log("dead : " + memeber - savedMember2);
    // }

};

arrayPrac(9);