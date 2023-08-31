import { arrangeOrder,checkingDigits } from './util.js';

export function addedTwoNumbers(number1,number2,model){
    if (typeof number1 === "string"){
        if(typeof number2 === "string"){
            let positionArray = [];
            let finalResponse = [];
            let dummy = 0
            let final = '';
            let response = arrangeOrder(number1,number2)
            console.log("response  addTwoNumbers ",response)
            let input = response['num1_Data'];
            console.log("input  addTwoNumbers ",input)
            let input_array = input.split('.');
            input_array.forEach((item, index) => {
                positionArray.push(item.length)
            });
            // console.log("input_array ",input_array)
            let response2 =  checkingDigits(response['num1_Data'],response['num2_Data'])
            console.log(" response2 ",response2);
            let total = 0;
            let digitConunt =  response2['num1_Data']
            if(model == 'add'){
             total = Number(response2['num1_Data']) + Number(response2['num2_Data'])
            }else if(model == 'sub'){
                total = Number(response2['num1_Data']) - Number(response2['num2_Data'])
            }
             console.log(" total ",total);
             if(total == 0){
                return 0;
             }else{
                if (total < 0){
                    let numStringnew = '';
                    total = Math.abs(total);
                    const numString = String(total);
                    for (let i = 0; i < digitConunt.length - numString.length; i++){
                        numStringnew = numStringnew+'0' 
                      }
                      total = numStringnew+total;
                      for(let i = 0; i <= positionArray.length-1; i++){
                        let new1 = total.substring(0, positionArray[i]);
                        dummy = total.substring(positionArray[i]);
                        total = dummy
                        finalResponse.push(new1)
                    }
                    final = finalResponse.join('.');
                    if(final.endsWith(".")) {
                        final = final.slice(0, -1);
                    }
                    return '-'+final;
                }else{
                    total = String(total);
                    console.log("response['num1_Data'] ",response['num1_Data'])
                    // let input_array = response['num1_Data'].split('.');
                    
                    for(let i = 0; i <= positionArray.length-1; i++){
                        let new1 = total.substring(0, positionArray[i]);
                        dummy = total.substring(positionArray[i]);
                        total = dummy
                        finalResponse.push(new1)
                    }
                    console.log("finalResponse.join('.') ",finalResponse.join('.'));
                    final = finalResponse.join('.');
                    if(final.endsWith(".")) {
                        final = final.slice(0, -1);
                    }
                    return final;
                }
            }
        }else {
            return "passing data issues1, accept string only"
        }
    }else {
        return "passing data issues1, accept string only"
    }
}

