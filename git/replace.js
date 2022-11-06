var str='I am aspiring java developer';
console.log(split(str));
function split(str){
    var word=str.split(' ');
    for(var i=0;i<word.length;i++){
        if(word[i]==='java'){
            word[i]='am';
        }
    }
    return (word.join(' '));
}