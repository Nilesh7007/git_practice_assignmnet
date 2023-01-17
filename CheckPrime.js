let num = 7;
let count = 0;
for(let i=0; i<=num; i++){
if(num%i==0){
count++;
}
(count==2) ? console.log(num,"prime") : console.log(num, "not prime")