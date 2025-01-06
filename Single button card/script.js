var istatus = document.querySelector('h5')
let check = 0;
var buy = document.querySelector('#buy')

buy.addEventListener('click',()=>{
    if(check===0){
        check=1
        istatus.innerHTML = "Bought"
        istatus.style.color="green" 
        buy.innerHTML="Sell"
    }
    else{
        check=0
        istatus.innerHTML = "Sold"
        istatus.style.color="red"
        buy.innerHTML="Buy"
    }
    
})

// var sell = document.querySelector('#sell')
// sell.addEventListener('click',()=>{
//     istatus.innerHTML = "Sold"
//     istatus.style.color="red"
// })