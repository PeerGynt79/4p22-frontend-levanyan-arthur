'use strict';
let operation='';
let operand1=0.0;
let operand2=0.0;
let resultat=0.0;
document.getElementById('result').addEventListener('click' , (event)=>{
    operand1 = document.getElementById('operand1').value;
    operand2 = document.getElementById('operand2').value;
    operation = document.getElementById('operation').value;
    if (operand1.length===0) {
        console.log('Первое число не указано.')   
    } else if (!((Number(operand1)*0) === 0) ) {
        console.log('Некорректный ввод 1-го числа.')    
    };
    if (operand2.length===0) {
        console.log('Второе число не указано.')   
    } else if (!((Number(operand2)*0) === 0 )) {
        console.log('Некорректный ввод 2-го числа.')    
    };
    if (operation.length===0) {
        console.log('Не введен знак операции.')   
    } else if (!((operation === '/')||(operation === '*')||(operation === '+')||(operation === '-'))) {
        console.log('Программа не поддерживает такую операцию.')    
    }
    switch (operation){ 
        case '*': resultat = Number(operand1)*Number(operand2);break;
        case '/': resultat = Number(operand1)/Number(operand2);break;
        case '-': resultat = Number(operand1)-Number(operand2);break;
        case '+': resultat = Number(operand1)+Number(operand2);break;
    }
    if ((resultat*0) === 0 ) {console.log(resultat)
    } else {
    console.log('Результат невозможно вычислить!')
    };
});
