'use strict'
//bad magic
/*
function myFibonacci () {
    let current = 0;
    let next = 0;
    function badMagic() {
        if ((current+next)===0) {
            next=1
        } else {
            [current,next]=[next,current+next];
        }
        return current;
    }
    return badMagic;
}
const fibonacci = myFibonacci();
*/
/*
//good magic
const fibonacci=(()=> {
    let current = 0;
    let next = 0;
    return () =>{
        if ((current+next)===0) {
        next=1
        } else {
        [current,next]=[next,current+next];
        }
        return current;
    }
})()
*/
/*
//super magic 
const fibonacci = ((current = 0, next = 0) => () => {
    if ((current + next) === 0) {next=1
    } else {
    [current,next] = [next,current+next]
    }
    return current;
})()
*/
//Salimov Magic
/*const fibonacci=( function () {
    var num=0;
    var fn1=1;
    var fn2=1;
    var fn;
    return () =>{
        if (num===0) {
        num ++;    
        return 0;
        } else if (num===1){
        num ++;    
        return 1;
        } else if (num===2){
        num ++;    
        return 1;
        } else {
        fn=fn1+fn2;
        fn1=fn2;
        fn2=fn;
        return fn;
        }
    }
})()
*/
/*
document.getElementById('button').addEventListener('click',(event) =>{
//    document.getElementById('fibonacci').innerText=fibonacci();
    console.log(fibonacci());
});
*/
'use strict'

let chowFibo = function () {
	let prevNum = -1;
	let nextNum = 1;
	let sumFibo;

	return function () {
		sumFibo = prevNum + nextNum;
		prevNum = nextNum;
		nextNum = sumFibo;
		return nextNum;
	}
}();

console.log(chowFibo());
console.log(chowFibo());
console.log(chowFibo());
console.log(chowFibo());
console.log(chowFibo());
console.log(chowFibo());
console.log(chowFibo());
console.log(chowFibo());
console.log(chowFibo());
console.log(chowFibo());
console.log(chowFibo());
console.log(chowFibo());
console.log(chowFibo());
console.log(chowFibo());
console.log(chowFibo());
console.log(chowFibo());
const person = {
    firstName:'Peer',
    lastName:'Gynt'
}
const employee = {
    id:123,
    lastName:'GyntEmployee',
    tax:'123156456456456',
    personalInfo: {
        passport_series: '0101',
        passport_number: 888888
    }
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
console.log(Object.entries(person).forEach((entry) =>{
    console.log(`Ключ ${entry[0]} Значение ${entry[1]}`)
}));
console.log(Object.entries(person).forEach(([key, value]) =>{
    console.log(`Ключ ${key} Значение ${value}`)
}));

///*1*/const person2 = Object.assign({},person);
///*2*/const person2 = {};
///*2*/Object.assign(person2,person);
const person2 = Object.assign({},person,employee);
const person3 = { ...person, ...employee };
const employee2 = { ...employee};
const stringJson = JSON.stringify(employee)
const employee3=JSON.parse(stringJson);
//console.log(employee3)
//console.log(stringJson)
//console.log(person2);
//console.log(person3);

const array = [];
const arr2 = ['яблоко','банан','персик','арбуз','дыня','апельсин'];

const objectList = [
    {
        firstName:'Petr',
        lastName:'Cech'
    },
    {
        firstName:'Bran',
        lastName:'Ivic'
    },
    {
        firstName:'Ric',
        lastName:'Zami'
    },
    {
        firstName:'Joe',
        lastName:'Stunt'
    },
    {
        firstName:'Sonny',
        lastName:'Liston'
    },
    {
        firstName:'Ben',
        lastName:'Gross'
    }

]

for (let i = 0; i<objectList.length; i++) {
   console.log(objectList[i].firstName)    
}

const numberList = [1,2,3,4,5,6,7,8,9,10];
//const numberList = [1,2,3,4,'5',6,7,false,9,10];
let sum=0;
for (let i = 0; i<numberList.length; i++) {
    sum+=numberList[i];
}
console.log(sum);
array.forEach(element => {
    
});
objectList.forEach ((item, index)=>{
    console.log(`${index+1}. ${item.firstName}`)
})

objectList.push ({
    firstName:'Ron',
    lastName:'Zacappa'
})

arr2.push('папайя');
console.log(arr2);

arr2.pop();
console.log(arr2);
const last = arr2.pop();
console.log(last);

arr2.unshift('ананас');
console.log(arr2);

arr2.shift();
console.log(arr2);

console.log(arr2.indexOf('банан'));
const idx2 = objectList.findIndex((item) => {
    return item.firstName==='asdasdas'
});
console.log(idx2);
const elem = objectList.find((item) => {
    return item.firstName === 'Bran';
});
console.log(elem);
//вырезаем из позиции  количество
arr2.splice(1,2);
console.log(arr2);
//возращаем срез с индекса по индекс не включая верхнию границу
const arr3 = arr2.slice(1,2);
console.log(arr3);
