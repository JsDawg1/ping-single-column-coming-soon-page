const btn = document.querySelector('.submit');
const email = document.querySelector('.email');
const error = document.querySelector('#errorP')

btn.addEventListener('click', Main);

function Main(){
    var value = email.value;
    if(!emailVal(value)){
        error.style.display = 'block';
        email.classList.add('active');
    }
    else{
        error.style.display = 'none';
        email.classList.remove('active');
    }
    

} 

function emailVal(mail){
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(mail) && mail.length>0;
}