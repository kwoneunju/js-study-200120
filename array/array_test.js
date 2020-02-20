var arr = [],
    arr2 = [10,20,30,40,50];

for(var i = 0; i < 10; i++) {
    arr.push(i);
}

console.log('length: ', arr.length);
console.log('arr.push: ', arr.push(30), ' / arr: ', arr);
console.log('arr.pop: ', arr.pop(), ' / arr: ', arr);
// console.log('arr.unshift: ', arr.unshift(100), ' / arr: ', arr);
// console.log('arr.shift: ', arr.shift(), ' / arr: ', arr);
// console.log('arr.reverse: ', arr.reverse(), ' / arr: ', arr);
// console.log('arr.indexOf: ', arr.indexOf(3), ' / arr: ', arr);
console.log('arr.splice(0,3): ', arr.splice(0, 3), ' / arr: ', arr);
console.log('arr.splice(1,3,100): ', arr.splice(1,3,100), ' / arr: ', arr);
console.log('arr.slice(3,6): ', arr.slice(3, 6), ' / arr: ', arr);
console.log('arr.slice(3): ', arr.slice(3), ' / arr: ', arr);
console.log('arr.slice(-3,-5): ', arr.slice(-3,-5), ' / arr: ', arr);
console.log('arr.slice(-5,-3): ', arr.slice(-5,-3), ' / arr: ', arr);
console.log('arr.sort: ', arr.sort(), ' / arr: ', arr);
console.log('arr.sort(b-a): ', arr.sort(function(a, b) {return b-a;}), ' / arr: ', arr);
console.log('arr.shift: ', arr.shift(), ' / arr: ', arr);
console.log('arr.unshift: ', arr.unshift(), ' / arr: ', arr);
console.log('arr.join: ', arr.join(), ' / arr: ', arr);
console.log('arr.concat: ', arr.concat(arr2), ' / arr: ', arr);
