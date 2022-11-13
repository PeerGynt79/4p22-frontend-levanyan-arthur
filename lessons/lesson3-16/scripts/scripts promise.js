'use strict'
setTimeout(()=>{console.log('hello timeout')});
setInterval(()=>{console.log('hello interval')});

function maketimefunc(){
    let i=0;
    return ()=>{
        i++;
        console.log(`dspdfyj ${i} hfp`);
    }
}
function stopinterval(){
    clearInterval(interval)
}
const timeoutfunc = maketimefunc();
const interval=setInterval(timeoutfunc);
 fetch('https://reqres.in/api/users')
 .then ((response)=>{
    console.log(response);
    return response.json();
 })
 .then ((result)=>{
    console.log(result);

 })
 .catch ((e)=>{
    console.log(e);

 })

 