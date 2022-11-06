function toLowerCase(string){
    return string.toLowerCase();
}
var arr=["MA", "SA", "I", "SCH", "OOL"];
var ans=[];
for(var i=0;i<arr.length;i++){
    ans[i]=toLowerCase(arr[i]);
}
console.log(ans);