/*
//bad magic
function Fibonacci () {
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
const fibonacci = Fibonacci();
*/
/*
//good magic (star-evolution)
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
/**/
//super magic (superstar-evolution)
const fibonacci = ((current = 0, next = 0) => () => {
    if ((current + next) === 0) {next=1
    } else {
    [current,next] = [next,current+next]
    }
    return current;
})()
/**/
document.getElementById('button').addEventListener('click',(event) =>{
//    document.getElementById('fibonacci').innerText=fibonacci();
    console.log(fibonacci());
});

