


async function fun(){
    let promise = new  Promise((resolve,reject)=>{
        resolve(true)
    })
    await console.log("hello");
}

fun();

function dev(){
    console.log("arcade");
}
dev();

async function myFun (){
// return await fun();
await console.log("san");
}
myFun()


