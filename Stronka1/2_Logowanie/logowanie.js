


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


    // WYBÓR PŁCI 
    const select = document.querySelector(".select");
    const options_list = document.querySelector(".options-list");
    const options = document.querySelectorAll(".option");

    //show & hide options list
    select.addEventListener("click", () => {
      options_list.classList.toggle("active");
      select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
    });

    //select option
    options.forEach((option) => {
      option.addEventListener("click", () => {
        options.forEach((option) => {option.classList.remove('selected')});
        select.querySelector("span").innerHTML = option.innerHTML;
        option.classList.add("selected");
        options_list.classList.toggle("active");
        select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
      });
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
        boxRejestracji.classList.toggle('centeredrejestr'); // Dodajemy klasę 'centeredrejestr'
    });
    //Schowanie okna rejestracji do rpawej strony
    document.getElementById("wroczrejestracjilink").addEventListener("click", function() {
        var boxRejestracji = document.querySelector('.boxrejestracji');
        boxRejestracji.classList.remove('centeredrejestr'); // Usuwamy klasę 'centeredrejestr' aby wrócić do poprzedniego wyglądu
    });
    //Schowanie okna rejestracji do rpawej strony (scołka)
    document.getElementById("scolka-rej").addEventListener("click", function() {
        var boxRejestracji = document.querySelector('.boxrejestracji');
        boxRejestracji.classList.remove('centeredrejestr'); // Usuwamy klasę 'centeredrejestr' aby wrócić do poprzedniego wyglądu
    });


    //Zniknięcie strony logowania po wyswietleniu okna rejestracji
    document.getElementById("przjsciedoprawej").addEventListener("click", function() {
        var logowanie = document.querySelector('.boxlogowania');
        logowanie.classList.toggle('opacity'); // Dodajemy klasę 'centeredrejestr'
    });
    //Pojawienie sie logowaniu po schowaniu okna rejestracji
    document.getElementById("wroczrejestracjilink").addEventListener("click", function() {
        var logowanie = document.querySelector('.boxlogowania');
        logowanie.classList.remove('opacity'); // Usuwamy klasę 'centeredrejestr' aby wrócić do poprzedniego wyglądu
    });
    //Pojawienie sie logowaniu po schowaniu okna rejestracji (scołka)
    document.getElementById("scolka-rej").addEventListener("click", function() {
        var logowanie = document.querySelector('.boxlogowania');
        logowanie.classList.remove('opacity'); // Usuwamy klasę 'centeredrejestr' aby wrócić do poprzedniego wyglądu
    });



    //Wysunięcie okna resetu z prawej strony
    document.getElementById("przejsciedolewej").addEventListener("click", function() {
        var boxresetu = document.querySelector('.boxresetu');
        boxresetu.classList.toggle('centeredreset'); // Dodajemy klasę 'centeredreset'
    });
    //Schowanie okna resetu do rpawej strony (scołka)
    document.getElementById("scolka-res").addEventListener("click", function() {
        var boxresetu = document.querySelector('.boxresetu');
        boxresetu.classList.remove('centeredreset'); // Usuwamy klasę 'centeredreset' aby wrócić do poprzedniego wyglądu
    });


    //Zniknięcie strony logowania po wyswietleniu okna resetu
    document.getElementById("przejsciedolewej").addEventListener("click", function() {
        var logowanie = document.querySelector('.boxlogowania');
        logowanie.classList.toggle('opacity'); // Dodajemy klasę 'centeredrejestr'
    });
    //Pojawienie sie logowaniu po schowaniu okna resetu
    document.getElementById("scolka-res").addEventListener("click", function() {
        var logowanie = document.querySelector('.boxlogowania');
        logowanie.classList.remove('opacity'); // Usuwamy klasę 'centeredrejestr' aby wrócić do poprzedniego wyglądu
    });
});