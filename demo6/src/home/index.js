
import bar from './bar';
import { getName } from 'utils/index'
bar();



console.log(getName())

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




