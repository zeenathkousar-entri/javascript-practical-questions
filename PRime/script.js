

let a=10
let b=20
let c=a+b
console.log(c)




function prime(num){
     
    if(num <= 1){
        console.log("it is not a prime number")
    }
    else{

    for(let i=2; i<num; i++)
    {
        if(num % i == 0){
            console.log("It is not a prime number")
        }
    }
   console.log('It is a prime number')
}
    
}

prime(4)

//template literals

console.log(`${num} is a prime number)
// let result=prime(15)
// console.log(result)
// if(result===false){
//     console.log("IT is not a prime number")
// }
// else if(result===true){
//     console.log('IT is a prime number')
// }

