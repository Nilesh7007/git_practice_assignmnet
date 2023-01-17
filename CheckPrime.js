let num = 7;
let count = 0;
for(let i=2; i<=num/2; i++){
if(num%i==0){
count++;
}
}
(count==0) ? console.log(num,"prime") : console.log(num, "not prime")