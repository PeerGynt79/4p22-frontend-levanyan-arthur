'use strict';
let operations = new Set(['+','-','*','/']);
let errorSet = new Set([NaN,Infinity,null]);

document.getElementById('result').addEventListener('click' , (event) => 
{
let operand1=String(document.getElementById('operand1').value).replaceAll(' ','');
let operand2=String(document.getElementById('operand2').value).replaceAll(' ','');
let operation=String(document.getElementById('operation').value).replaceAll(' ','');
let operand1_error='';
let operand2_error='';
let operation_error='';
event.preventDefault();       
if  (operand1 === '') 
    {operand1_error='Первое число не указано. '}   
    else  
    if (errorSet.has(Number(operand1))) 
        {operand1_error='Некорректный ввод 1-го числа. '};
if  (operand2 === '') 
    {operand2_error='Второе число не указано. '}   
    else  
    if (errorSet.has(Number(operand2))) 
        {operand2_error='Некорректный ввод 2-го числа. ';}
if  (operation==='') 
    {operation_error='Не введен знак операции.'}
    else 
    if (!((operation.length===1)&&(operations.has(operation)))) 
        {operation_error='Программа не поддерживает такую операцию.'};
let Error=(operand1_error+operand2_error+operation_error);
if (Error) 
    {
        document.getElementById('result').setAttribute('style','font-size: '+Math.min((Math.round(1.5*(55/(`Результат: ${Error}`+'px').length)*10)/10),1.45)+'rem;');
        document.getElementById('result').value=Error;
    }
    else document.getElementById('result').setAttribute('style','font-size: 1.5rem;');
if (!Error) 
    {switch (operation) 
        {
        case '*': 
            {
                let resVar=Number(operand1)/Number(operand2);
                document.getElementById('result').value = `Результат: ${resVar}`;
                break;
            }
        case '/': 
            {
                if (Number(operand2)===0) 
                    {
                    document.getElementById('result').value = 'Делить на ноль нельзя!';
                    break;
                    } 
                    else 
                    {
                    let resVar=Number(operand1)/Number(operand2);
                    document.getElementById('result').value = `Результат: ${resVar}`;
                    break;
                    }
            }
        case '-': 
            {
                let resVar=Number(operand1)-Number(operand2);
                document.getElementById('result').value = `Результат: ${resVar}`;
                break;
            };
        case '+': 
            {
                let resVar=Number(operand1)+Number(operand2);
                document.getElementById('result').value = `Результат: ${resVar}`;
                break;
            };
        }
    }
});


 
