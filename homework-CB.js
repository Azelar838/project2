const arr=[1,2,3,4,15,26,37];
function mapping(arr,cb){ 
let somme=0;
let resarray=[];
for(let i=0;i<arr.length;i++){
   somme= cb(arr[i],somme);
   resarray[i]=somme 
}
return resarray;
}

console.log(mapping(arr,function sum(val,somme){
    return somme+val;
}))

        