
let frontendGroup={
    teachers:{
        name:'Andrew',
        surname:'Gulin',
        personalInfo: {
            ident:0,
            passportSerie:'9999',
            pasportNum:'999999',
        },
        status:'Teacher'
    },
    students:[
        {
            name:'Name1',
            surname:'Surname1',
            personalInfo: {
                ident:1,
                passportSerie:'0101',
                pasportNum:'010101',
            },
            status:'Student',
            rating:7.9,
        },
        {
            name:'Name2',
            surname:'Surname2',
            personalInfo: {
                ident:2,
                passportSerie:'0202',
                pasportNum:'020202',
            },
            status:'Student',
            rating:6.3,
        },
        {
            name:'Name3',
            surname:'Surname3',
            personalInfo: {
                ident:3,
                passportSerie:'0303',
                pasportNum:'030303',
            },
            status:'Student',
            rating:6.8,
        },
        {
            name:'Name4',
            surname:'Surname4',
            personalInfo: {
                ident:4,
                passportSerie:'0404',
                pasportNum:'040404',
            },
            status:'Student',
            rating:8.7,
        }
    ]
}
const errorSet = new Set([NaN,undefined,null,Infinity,-Infinity]);
function offsetString(offset,start=1){
    if (start>=offset) return ''
    else return offsetString(offset,start+1)+'    ';
}
function firstUpper(inputString){
    return inputString[0].toUpperCase()+inputString.substring(1, inputString.length);
}
function printStructure(obj,offset=1) {
    console.log(offsetString(offset+1),'<->');
    for (const entry in obj) {
        if (typeof(obj[entry])==='object') {
            errorSet.has(Number(entry))?console.log(offsetString(offset+2),'=',firstUpper(entry)):{};
            printStructure(obj[entry],offset+1); 
        } else { console.log(offsetString(offset+2),'-',firstUpper(entry),':',obj[entry])}
    }
    console.log(offsetString(offset+1),'^');
}

printStructure(frontendGroup);


