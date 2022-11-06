'use strict'
/*
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

///*1*/
/*const person2 = Object.assign({},person);
///*2*/
/*const person2 = {};
///*2*/
/*Object.assign(person2,person);
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
*/
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

const filteredArray = objectList.filter((item)=>{
    return item.lastName[0]==='G'
})
const mappedArray = objectList.map((item)=>{
    return {
        name:item.firstName,
        surname:item.lastName,
    }
})
const mappedArray2 = objectList.map((item,index)=>{
    return {
        ...item,
        in:index,
    }
})
const mappedArray3 = objectList.map((item,index)=>{
    return {
        name:item.firstName,
    }
})

/*const reducedArray = objectList.reduce((accumulator,item,index)=>{
    let resString = `${item.firstName} ${item.lastName}, `;
    if (index)
    accumulator+=`${item.firstName} ${item.lastName}, `
    return  accumulator;
},'')
*/

/*function deleteFromArray((array=[],index=0){
    return objectList.filter((item,innerIndex){
        return index!==innerIndex
    )
}
)
*/
console.log(objectList);    
console.log(filteredArray);    
console.log(mappedArray);    
console.log(mappedArray2);   
console.log(mappedArray3);   
console.log(reducedArray);  
/*
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
console.log(arr3);*/
