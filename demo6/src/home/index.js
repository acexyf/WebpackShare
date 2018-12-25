
import bar from './bar';
bar();



async function init() {
    console.log(1)
    let res = await getDelay()
    console.log(2)
}


init()

function getDelay(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(2)
        }, 1500)
    })    
}




