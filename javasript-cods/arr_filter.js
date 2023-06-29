let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
let newarr=arr.filter(check)
function check(num){
    return num>=10;
}
console.log(newarr)