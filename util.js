function addZeros(nums,dummy_num,size) {
    let again_dummy = []
    again_dummy.push(nums)
     for(var i = checkNumberLength(nums) ; i < size ; i++){
         again_dummy.push('0')
     }
    var convert_number=String(again_dummy);
        for(var j = 0; j < size ; j++){
            convert_number=convert_number.replace(",", "");
        }
    return convert_number
};
export function checkingDigits(num1, num2){
    const num11 = num1.split(".")
    const num22 = num2.split(".")
    const dummy_num11 = [];
    const dummy_num22 = [];
    
    for(let i = 0; i< num11.length; i++){
      if (checkNumberLength(num11[i]) <= checkNumberLength(num22[i])){
           dummy_num11.push(addZeros(num11[i],num11[i],checkNumberLength(num22[i])))
        }
         else{
            dummy_num11.push(num11[i])
        }
    }
    for(let i = 0; i< num22.length; i++){
      if (checkNumberLength(num22[i]) <= checkNumberLength(num11[i])){
           dummy_num22.push(addZeros(num22[i],num22[i],checkNumberLength(num11[i])))
        } else{
            dummy_num22.push(num22[i])
        }
    }
    var convert_number11=String(dummy_num11);
    var convert_number22=String(dummy_num22);
        for(var j = 0; j < convert_number11.length ; j++){
            convert_number11=convert_number11.replace(",", "");
            convert_number22=convert_number22.replace(",", "");
        }
    return{ num1_Data: convert_number11, num2_Data:convert_number22} 
    
}

function checkNumberLength(number) {
    return number.toString().length;
}

function chooseBiggerNumber(num1, num2){
    if(num1 == num2){
        return num1
    }else if(num1 > num2){
        return num1
    }else{
        return num2
    }
}

function setZeros(nums,dummy_num,size) {
     for(var i = nums.length ; i < size+1 ; i++){
         dummy_num.push('0')
     }
    var convert_number=String(dummy_num);
        for(var j = 0; j < size ; j++){
            convert_number=convert_number.replace(",", ".");
        }
    return convert_number
};
 
export function arrangeOrder(num1, num2){
    let num1_count = num1.split('.').length - 1;
    let num2_count = num2.split('.').length - 1;
    let num1_array = num1.split('.')
    let num2_array = num2.split('.')
    let checkNumberstatus = chooseBiggerNumber(num1_count,num2_count)
    if(checkNumberstatus == num1_count && checkNumberstatus == num2_count){
        return { num1_Data: num1, num2_Data:num2}
    }else if(checkNumberstatus == num1_count){
        return{ num1_Data: num1, num2_Data:setZeros(num2_array, num2_array, checkNumberstatus)}   
    }else{
        return{ num1_Data: setZeros(num1_array, num1_array, checkNumberstatus), num2_Data:num2}
    }
   return chooseBiggerNumber(num1_count+1,num1_count+1)
}