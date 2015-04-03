function processData (str) {
    var squareRoot;
    var ceilingOfSquareRoot;
    var index;
    var result;
    
    squareRoot = Math.sqrt(str.length);
    ceilingOfSquareRoot = Math.ceil(squareRoot);
    index = 0;
        
    for (var i = 0; i < ceilingOfSquareRoot; i++) {
        result = "";
        for (var j = 0; j < ceilingOfSquareRoot; j++) {
         
            if(str[index]) {
                result += str[index];
                index++;
            } 
        }
        console.log(result);
    }
}

processData("kavitsha"); // kav \n its \n ha