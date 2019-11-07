//сумма всех цифр в числе
sumNum(123456789);
function sumNum(num) {
  let result = num
        .toString()
        .split('')
        .map(Number)
       .reduce(function(sum, item){
        return sum + item;
        });
        num = result;
        if (result > 9) {
        return sumNum(num);
        }

console.log(result);
  }
