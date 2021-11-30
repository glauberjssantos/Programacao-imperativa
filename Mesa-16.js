let numeros  = (a, b) => {
    for (i=0; i < 100; i++){
        if (a % i == 0){
            console.log("Fizz")
        }else if (b % i == 0){
            console.log("Buzz")
        }else(a % i == 0 && b % i == 0); {
            console.log("FizzBuzz")
        }
        
    }

}

console.log(numeros(10, 5))