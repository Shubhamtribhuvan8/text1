var n=14;
var m=12;
var ans=absolutediff(n,m);
console.log(ans);
function absolutediff(n,m){
    var diff=n-m;
    var absolutediff=absolute(diff);
    return absolutediff;
}    ``
function absolute(diff){
    var absolute=0;
    if(diff<0){
        absolute=-1*diff;
    }
    else{
        absolute=diff;
    }
    return absolute;
}