let sum=0;
const number ="153"
let temp=number;
while(temp>0){
    let remainder=temp%10;
    let count=number.length;
    sum+=Math.pow(remainder,count)
    temp=parseInt(temp/10);
}
if(sum==number){
    console.log(`${number} is a Armsrong no`);
}
else{
    console.log(`${number} is not a Armstrong no`);
}