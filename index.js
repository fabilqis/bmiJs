function bmi(berat, tinggi){ 
    return berat/(tinggi*tinggi);   
}
console.log(bmi(10, 1.63));
 
function bmi1(bmi){
    if (bmi<=18){
        return "Too skinny";
    }
    else if(bmi>=25){
        return "Too fat";    
    }
    else{
        return "normal";
    } 
}

console.log(bmi1());