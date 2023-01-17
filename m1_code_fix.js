let num=7;
let count=0;

for(let i=1; i<=num; i++){

if(num%i==0){

count++;
}
}
(count==2)? console.log("prime num") : console.log("not prime num");