
var numbers = [2,3,4,5,6,7];
console.log(averagearry(numbers));
function averagearry(numbers) {
var sum=0;
if(numbers.length==0){
    return 0;
}
for(var i=0;i<numbers.length;i++){
     sum=sum+numbers[i];
}
return sum/numbers.length;
}
