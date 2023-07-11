

 function checkThetwoNumber(num1, num2,model){
    if (model == 'greaterThan'){
        return num1 > num2
    }else if (model == 'greaterThanOrEqual'){
        return num1 >= num2
    }else if (model == 'lessThan'){
        return num1 < num2
    }else if (model == 'lessThanOrEqual'){
        return num1 <= num2
    }
}

export function checkGreaterOrLesser(number1,number2,model){
    let listoutResults = [];
    console.log(typeof number1)
    if (typeof number1 === "string"){
        const number1ArrayList = number1.split(".");
        console.log("number1ArrayList ",number1ArrayList)
        if(typeof number2 === "string"){
            const number2ArrayList = number2.split(".");
            for (var i =0; i<number1ArrayList.length; i++){
                return listoutResults.push(checkThetwoNumber(number1ArrayList[i],number2ArrayList[i], model))
            }
            console.log("number2ArrayList ",number2ArrayList)
            return "number 2"
        }else {
            return "passing data issues2, accept string only"
        }
    }else {
        return "passing data issues1, accept string only"
    }
}
