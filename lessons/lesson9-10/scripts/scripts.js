
function sayhello(){
console.log('hello!')
};
const sayhello2 = function (){
    console.log('hello from expression!')
    };
const sayhello3 = () => {
    console.log('hello from lambda!')
    };
    sayhello3();
    sayhello2();
    sayhello();
    console.log(x);
var x=3;
let xx=3;

function printx(){
    console.log(x);
    var x=5;
    console.log(x);

}
function printxx(){
    console.log(xx);
    var xx=5;
    console.log(xx);

}
printx();
printxx();

let func;
for (let i=1;i<10;i++){
    if (i===5) {
        func = function () {
            console.log(i);
            
        }
    }
}
func();

const btn=document.getElementById('button');
const someVariable = 'gHBDTN';
btn.addEventListener('click',function () {
console.log(someVariable);    
})

const person = {
    name: 'Ringo',
    surname: 'Starr',
    body:{
        age:50,
        height:185
    }

}
console.log(person.body.age)    