const form = document.querySelector('.right-col form');
const inputs = document.querySelectorAll('.right-col form input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputs.forEach(input => {
        //입력값이 없으면 부모인 field-group에 에러 클래스 붙여줘서 에러 메세지와 아이콘 보여주기
        if(!input.value){
            input.parentElement.classList.add('error');
        } else {
            input.parentElement.classList.remove('error');
            if(input.type == 'email'){ //이메일 유효성 검사 함수 적용
                if(validateEmail(input.value)){
                    input.parentElement.classList.remove('error');
                } else {
                    input.parentElement.classList.add('error');
                }
            }
            if(input.type == 'password'){
                if(strongPassword(input.value)){
                    input.parentElement.classList.remove('error');
                } else {
                    input.parentElement.classList.add('error');
                }
            }
        }
    });
});

//이메일 유효성 검사
function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function strongPassword(str) {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
}
  