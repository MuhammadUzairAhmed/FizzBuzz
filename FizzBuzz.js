
FizzBuzzQuiz = (number) =>{
    var i; 
    for (i=1; i<=number; i++) 
    { 
        // 'FizzBuzz' if divisible by 15 
        if (i%15 == 0)         
            console.log("FizzBuzz ",i," ");     
          
        // 'Fizz' if divisble by 3 
        else if ((i%3) == 0)     
            console.log("Fizz ",i," ");                  
          
        // 'Buzz' if divisble by 5
        else if ((i%5) == 0)                        
            console.log("Buzz ",i," ");                  
    }

}

FizzBuzzQuiz(100)