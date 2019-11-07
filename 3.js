//первый вариант
let array = [1, 1, 1, 2, 2, 2, 3, 3, 3, 'str', 'str', 'str', true, true, false, false];
let uniqueArray = Array.from(new Set(array));

console.log( uniqueArray);


//второй вариант
let array = [1, 1, 1, 2, 2, 2, 3, 3, 3, 'str', 'str', 'str', true, true, false, false];
let uniqueArray = [...new Set(array)]; 

console.log(uniqueArray);


//третий вариант
let array = [1, 1, 1, 2, 2, 2, 3, 3, 3, 'str', 'str', 'str', true, true, false, false];
let uniqueArray = array.filter((item, i, array) => array.indexOf(item) === i);

console.log(uniqueArray);





