<div id="test"></div>

// первый вариант с forEach
let  elem = document.getElementById( 'test' );
let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let result = arr.map(x => x*x);

arr.forEach(function(item, i) {
    elem.innerHTML +=  '<strong>' + result[i]  + '</strong>'+'<br>';
    
});

//второй вариант с for
let  elem = document.getElementById( 'test' );
let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let result = arr.map(x => x*x);

  for (i = 0; i < arr.length; ++i) {
    elem.innerHTML +=  '<strong>' + result[i]  + '</strong>'+'<br>';
}



//Обратный порядок:
let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let result = arr.map(x => x*x);
let  elem = document.getElementById( 'test' );
let arrBack= result.reverse()

  arr.forEach(function(item, i) {
	elem.innerHTML +=  '<strong>' + arrBack[i]  + '</strong>'+'<br>';
});



//Обратный порядок:
let  elem = document.getElementById( 'test' );
let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let result = arr.map(x => x*x)
 .reduceRight(function(previous, current) {
  previous.push(current);
  return previous;
}, []);

arr.forEach(function(item, i) {
    elem.innerHTML +=  '<strong>' + result[i]  + '</strong>'+'<br>';    
});