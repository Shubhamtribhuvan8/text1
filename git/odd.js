var num =17;
function odd(num){
return (num%2!=0)
}
if(odd){
    var bag='';
    for(var i=0;i<num;i++){
        if(i%2!=0){
            bag+=i+' ';
        }
    }
    console.log(bag);
}
