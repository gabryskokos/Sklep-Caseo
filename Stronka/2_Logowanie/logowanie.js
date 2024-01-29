window.addEventListener('DOMContentLoaded', () => {
    // nieskończone tło
    var copy = document.querySelector(".tlo-slide").cloneNode(true);
    document.querySelector(".tlo").appendChild(copy);
    
    // zmiana hasła z gwiazdek na litery
    document.querySelector('#eyeicon-lock').addEventListener('click',function(){
        var passwordInput = document.querySelector('#passwordInput');
        if(passwordInput.type == 'password'){
            passwordInput.type = 'text';
        }else{
            passwordInput.type = 'password'
        }

    // zmiana oka przekreślonego na zwykłe
        var icon = document.getElementById("eyeicon-lock");
        if (icon.classList.contains("fa-eye-slash")) {
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
        } else {
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
        }
    });
});