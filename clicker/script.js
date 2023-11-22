window.addEventListener("DOMContentLoaded", () => {
    // wynik
    var wynik = 0;

    //ulepszenia
    var Kursoryx2v1 = false;
    var Juhasix2v1 = false;

    function sprawdzPrzycisk() {
        if (kursory >= 1 && !Kursoryx2v1) {
            document.querySelector(".ulepszenieKursora1").style.display = "inline-block";
        };

        if (juhasi >= 1 && !Juhasix2v1) {
            document.querySelector(".ulepszenieJuhasa1").style.display = "inline-block";
        };
    };

    sprawdzPrzycisk();

    //klikanie ulepszen
    document.querySelector(".ulepszenieJuhasa1").addEventListener("click", () => {
        if (!Juhasix2v1&&wynik>=1000) {
            wynik=wynik-1000;
            document.getElementById("wynik").innerHTML = wynik;
            document.querySelector(".ulepszenieJuhasa1").style.display = "none";
            wartoscJuhasa = wartoscJuhasa * 2;
            Juhasix2v1 = true;
            juhasi=juhasi-1;
            wynik=wynik + kosztJuhasa;
            dodajJuhasa();
            wynik=wynik-wartoscJuhasa; 
        };
    });

    document.querySelector(".ulepszenieKursora1").addEventListener("click", () => {
        if (!Kursoryx2v1&&wynik>=100) {
            wynik=wynik-100;
            document.getElementById("wynik").innerHTML = wynik;
            document.querySelector(".ulepszenieKursora1").style.display = "none";
            wartoscKursora = wartoscKursora * 2;
            Kursoryx2v1 = true;
            kursory=kursory-1;
            wynik=wynik + kosztKursora;
            dodajKursor();
            wynik=wynik-wartoscKursora;
        };
    });

    document.querySelector(".ulepszenieKlikniecia1").addEventListener("click", () => {
        if(wynik>=100){
            wynik=wynik-100;
            document.getElementById("wynik").innerHTML = wynik;
            document.querySelector(".ulepszenieKlikniecia1").style.display = "none";
            oscypkiZaKlik = oscypkiZaKlik * 2;
        };
    });
    
    // kursory
    var kursory = 0;
    var kosztKursora = 15;
    var wartoscKursora = 1;

    function wynikKursory() {
        wynik = wynik + kursory * wartoscKursora;
        document.getElementById("wynik").innerHTML = wynik;
    };

    function dodajKursor() {
        if (wynik >= kosztKursora) {
            wynik = wynik - kosztKursora;
            kursory = kursory + 1;
            kosztKursora = Math.round(kosztKursora * 1.15);

            document.getElementById("wynik").innerHTML = wynik;
            document.getElementById("kursory").innerHTML = "Kursory[" + kursory + "] = " + kosztKursora;
        };
    };
    
    document.getElementById("kursory").innerHTML = "Kursory[" + kursory + "] = " + kosztKursora;
    
    document.querySelector("#kursory").addEventListener("click", () => {
        dodajKursor();
        sprawdzPrzycisk();
    });

    // juhasi
    var juhasi = 0;
    var kosztJuhasa = 100;
    var wartoscJuhasa = 10;

    function wynikJuhasi() {
        wynik = wynik + juhasi * wartoscJuhasa;
        document.getElementById("wynik").innerHTML = wynik;
    }

    function dodajJuhasa() {
        if (wynik >= kosztJuhasa) {
            wynik = wynik - kosztJuhasa;
            juhasi = juhasi + 1;
            kosztJuhasa = Math.round(kosztJuhasa * 1.15);

            document.getElementById("wynik").innerHTML = wynik;
            document.getElementById("juhasi").innerHTML = "Juhasi[" + juhasi + "] = " + kosztJuhasa;
        }
    }

    document.getElementById("juhasi").innerHTML = "Juhasi[" + juhasi + "] = " + kosztJuhasa;
    
    document.querySelector("#juhasi").addEventListener("click", () => {
        dodajJuhasa();
        sprawdzPrzycisk();
    });

    // aktualizuj wynik co sekunde
    function aktualizujWynik() {
        wynikKursory();
        wynikJuhasi();
        setTimeout(aktualizujWynik, 1000);
    }

    aktualizujWynik();
    
    // klikanie oscypka
    var oscypkiZaKlik = 1;
    var oscypek = document.querySelector("#oscypek");

    document.getElementById("wynik").innerHTML = wynik;
    oscypek.addEventListener("click", () => {
        wynik = wynik + oscypkiZaKlik;
        document.getElementById("wynik").innerHTML = wynik;
    });
});