import { arrangeOrder,checkingDigits } from './util.js';


export function firstIsgreaterThenSecond(number1,number2,model){
    let listoutResults = []
    if (typeof number1 === "string"){
        if(typeof number2 === "string"){
            let response = arrangeOrder(number1,number2)
            const number2ArrayList = response['num2_Data'].split(".");
            const number1ArrayList = response['num1_Data'].split(".");
           let response2 =  checkingDigits(response['num1_Data'],response['num2_Data'])
            if(response2['num1_Data'] >= response2['num2_Data']){
                return true
            }else{
                return false
            }
        }else {
            return "passing data issues2, accept string only"
        }
    }else {
        return "passing data issues1, accept string only"
    }
}
