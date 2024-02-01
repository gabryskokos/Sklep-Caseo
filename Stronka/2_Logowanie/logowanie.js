window.addEventListener('DOMContentLoaded', () => {



    // nieskończone tło
    var copy = document.querySelector(".tlo-slide").cloneNode(true);
    document.querySelector(".tlo").appendChild(copy);
    


    // zmiana hasła z gwiazdek na litery LOGOWANIE
    document.querySelector('#eyeicon-lock').addEventListener('click',function(){
        var logowaniehaslo = document.querySelector('#logowaniehaslo');
        if(logowaniehaslo.type == 'password'){
            logowaniehaslo.type = 'text';
        }else{
            logowaniehaslo.type = 'password'
        }



    // zmiana oka przekreślonego na zwykłe logowanie
        var icon = document.getElementById("eyeicon-lock");
        if (icon.classList.contains("fa-eye-slash")) {
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
        } else {
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
        }
    });



    // HASŁO REJESTRACJA
    document.querySelector('#eyerejestracjahaslo').addEventListener('click',function(){
        var rejestrhaslo = document.querySelector('#rejestrhaslo');
        if(rejestrhaslo.type == 'password'){
            rejestrhaslo.type = 'text';
        }else{
            rejestrhaslo.type = 'password'
        }

    // zmiana oka przekreślonego na zwykłe rejestracja hasło
        var icon = document.getElementById("eyerejestracjahaslo");
        if (icon.classList.contains("fa-eye-slash")) {
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
        } else {
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
        }
    });



    // HASŁO REJESTRACJA POTWIERDZENIE
    document.querySelector('#eyeiconrejestracjapotwhasla').addEventListener('click',function(){
        var rejestrhaslopotw = document.querySelector('#rejestrhaslopotw');
        if(rejestrhaslopotw.type == 'password'){
            rejestrhaslopotw.type = 'text';
        }else{
            rejestrhaslopotw.type = 'password'
        }

    // zmiana oka przekreślonego na zwykłe rejestracja potwierdzenie hasła
        var icon = document.getElementById("eyeiconrejestracjapotwhasla");
        if (icon.classList.contains("fa-eye-slash")) {
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
        } else {
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
        }
    });



    //Wysunięcie okna rejestracji z prawej strony
    document.getElementById("przjsciedoprawej").addEventListener("click", function() {
        var boxRejestracji = document.querySelector('.boxrejestracji');
        boxRejestracji.classList.toggle('centered'); // Dodajemy klasę 'centered'
    });
    //Schowanie okna rejestracji do rpawej strony
    document.getElementById("wroczrejestracjilink").addEventListener("click", function() {
        var boxRejestracji = document.querySelector('.boxrejestracji');
        boxRejestracji.classList.remove('centered'); // Usuwamy klasę 'centered' aby wrócić do poprzedniego wyglądu
    });


    //Zniknięcie strony logowania po wyswietleniu okna rejestracji
    document.getElementById("przjsciedoprawej").addEventListener("click", function() {
        var logowanie = document.querySelector('.boxlogowania');
        logowanie.classList.toggle('opacity'); // Dodajemy klasę 'centered'
    });
    //Pojawienie sie logowaniu po schowaniu okna rejestracji
    document.getElementById("wroczrejestracjilink").addEventListener("click", function() {
        var logowanie = document.querySelector('.boxlogowania');
        logowanie.classList.remove('opacity'); // Usuwamy klasę 'centered' aby wrócić do poprzedniego wyglądu
    });



});