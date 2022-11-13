'use strict';
let flag=true;
let i=0;

while (flag){
    i = Math.random();
    console.log(i);
    if (i>0.5) {
     flag=false   
    }
}

for (let i=1;i<=2;i++) {
    console.log('Hello World!', i);
    
}
do {
    i = Math.random();
    console.log(i);
    if (i>0.5) {
     flag=false} 
     else {flag=true}   
} while (flag);

for (let i=1;i<=2;i++) {
    console.log(Math.round(12.5));
    console.log(Math.round(13.5));
    
}
function sayhello(){
    console.log('Hello!');
}
const sayhello2 = function(){
    console.log('Hello!');
}
const sayhello3 = () => {
    console.log('Hello!');
}
function sayHelloTo(firstname,lastname = '') {
    console.log(`Hello, ${firstname} ${lastname}`)
    
}
(function(){
    console.log('Hello!');
})()
sayhello();
sayhello2();
sayhello3();
sayHelloTo('Иван','Петров');
sayHelloTo('Иван');