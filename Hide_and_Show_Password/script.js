const eyeicon = document.querySelector('#eye')
const password = document.querySelector('#password')

eyeicon.addEventListener('click',function(){
    if(password.type === "password"){
        password.type = "text";
        eyeicon.src="eye-close.png"
    }
    else{
        password.type = "password"
        eyeicon.src="eye-open.png"
    }
})