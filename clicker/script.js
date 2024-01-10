window.addEventListener("DOMContentLoaded", () => {
    // wynik
    var wynik = 0;
    var oscypkiNaSekunde;
    window.addEventListener("click", () => {
        oscypkiNaSekunde = wartoscKursora*kursory+wartoscJuhasa*juhasi+wartoscSopy*sopy;
        document.getElementById("oscypkiNaSekunde").innerHTML = oscypkiNaSekunde + " o/s";
    });
    //ulepszenia
    var Kursoryx2v1 = false;
    var Juhasix2v1 = false;
    var Sopyx2v1 = false;
    var Kursoryx2v2 = false;
    var Juhasix2v2 = false;
    var Sopyx2v2 = false;
    var Kliknieciex2v1 = false;
    var Kliknieciex2v2 = false;
    var Kliknieciex2v3 = false;
    var Kliknieciex2v4 = false;
    var Kliknieciex2v5 = false;
    var Kliknieciex2v6 = false;
    var Kliknieciex2v7 = false;

    function sprawdzPrzycisk() {
        if (Kliknieciex2v1==true && !Kliknieciex2v2) {
            document.querySelector(".ulepszenieKlikniecia2").style.display = "inline-block";
        };

        if (Kliknieciex2v2==true && !Kliknieciex2v3) {
            document.querySelector(".ulepszenieKlikniecia3").style.display = "inline-block";
        };

        if (Kliknieciex2v3==true && !Kliknieciex2v4) {
            document.querySelector(".ulepszenieKlikniecia4").style.display = "inline-block";
        };

        if (Kliknieciex2v4==true && !Kliknieciex2v5) {
            document.querySelector(".ulepszenieKlikniecia5").style.display = "inline-block";
        };

        if (Kliknieciex2v5==true && !Kliknieciex2v6) {
            document.querySelector(".ulepszenieKlikniecia6").style.display = "inline-block";
        };

        if (Kliknieciex2v6==true && !Kliknieciex2v7) {
            document.querySelector(".ulepszenieKlikniecia7").style.display = "inline-block";
        };

        if (kursory >= 1 && !Kursoryx2v1) {
            document.querySelector(".ulepszenieKursora1").style.display = "inline-block";
        };

        if (juhasi >= 1 && !Juhasix2v1) {
            document.querySelector(".ulepszenieJuhasa1").style.display = "inline-block";
        };

        if (sopy >= 1 && !Sopyx2v1) {
            document.querySelector(".ulepszenieSopy1").style.display = "inline-block";
        };

        if (kursory >= 25 && !Kursoryx2v2) {
            document.querySelector(".ulepszenieKursora2").style.display = "inline-block";
        };

        if (juhasi >= 25 && !Juhasix2v2) {
            document.querySelector(".ulepszenieJuhasa2").style.display = "inline-block";
        };

        if (sopy >= 25 && !Sopyx2v2) {
            document.querySelector(".ulepszenieSopy2").style.display = "inline-block";
        };
    };

    sprawdzPrzycisk();

    //klikanie ulepszen
    document.querySelector(".ulepszenieKursora1").addEventListener("click", () => {
        if (!Kursoryx2v1 && wynik>=100) {
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

    document.querySelector(".ulepszenieJuhasa1").addEventListener("click", () => {
        if (!Juhasix2v1 && wynik>=1000) {
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

    document.querySelector(".ulepszenieSopy1").addEventListener("click", () => {
        if (!Sopyx2v1 && wynik>=10000) {
            wynik=wynik-10000;
            document.getElementById("wynik").innerHTML = wynik;
            document.querySelector(".ulepszenieSopy1").style.display = "none";
            wartoscSopy = wartoscSopy * 2;
            Sopyx2v1 = true;
            sopy=sopy-1;
            wynik=wynik + kosztSopy;
            dodajSope();
            wynik=wynik-wartoscSopy;
        };
    });

    document.querySelector(".ulepszenieKursora2").addEventListener("click", () => {
        if (!Kursoryx2v2 && wynik>=5000) {
            wynik=wynik-5000;
            document.getElementById("wynik").innerHTML = wynik;
            document.querySelector(".ulepszenieKursora2").style.display = "none";
            wartoscKursora = wartoscKursora * 2;
            Kursoryx2v2 = true;
            kursory=kursory-1;
            wynik=wynik + kosztKursora;
            dodajKursor();
            wynik=wynik-wartoscKursora;
        };
    });

    document.querySelector(".ulepszenieJuhasa2").addEventListener("click", () => {
        if (!Juhasix2v2 && wynik>=50000) {
            wynik=wynik-50000;
            document.getElementById("wynik").innerHTML = wynik;
            document.querySelector(".ulepszenieJuhasa2").style.display = "none";
            wartoscJuhasa = wartoscJuhasa * 2;
            Juhasix2v2 = true;
            juhasi=juhasi-1;
            wynik=wynik + kosztJuhasa;
            dodajJuhasa();
            wynik=wynik-wartoscJuhasa; 
        };
    });

    document.querySelector(".ulepszenieSopy2").addEventListener("click", () => {
        if (!Sopyx2v2 && wynik>=500000) {
            wynik=wynik-500000;
            document.getElementById("wynik").innerHTML = wynik;
            document.querySelector(".ulepszenieSopy2").style.display = "none";
            wartoscSopy = wartoscSopy * 2;
            Sopyx2v2 = true;
            sopy=sopy-1;
            wynik=wynik + kosztSopy;
            dodajSope();
            wynik=wynik-wartoscSopy;
        };
    });

    document.querySelector(".ulepszenieKlikniecia1").addEventListener("click", () => {
        if(wynik>=10){
            wynik=wynik-10;
            document.getElementById("wynik").innerHTML = wynik;
            document.querySelector(".ulepszenieKlikniecia1").style.display = "none";
            oscypkiZaKlik = oscypkiZaKlik * 2;
            Kliknieciex2v1 = true;
            sprawdzPrzycisk();
        };
    });
    
    document.querySelector(".ulepszenieKlikniecia2").addEventListener("click", () => {
        if(!Kliknieciex2v2 && wynik>=100){
            wynik=wynik-100;
            document.getElementById("wynik").innerHTML = wynik;
            document.querySelector(".ulepszenieKlikniecia2").style.display = "none";
            oscypkiZaKlik = oscypkiZaKlik * 2;
            Kliknieciex2v2 = true;
            sprawdzPrzycisk();
        };
    });

    document.querySelector(".ulepszenieKlikniecia3").addEventListener("click", () => {
        if(!Kliknieciex2v3 && wynik>=500){
            wynik=wynik-500;
            document.getElementById("wynik").innerHTML = wynik;
            document.querySelector(".ulepszenieKlikniecia3").style.display = "none";
            oscypkiZaKlik = oscypkiZaKlik * 2;
            Kliknieciex2v3 = true;
            sprawdzPrzycisk();
        };
    });

    document.querySelector(".ulepszenieKlikniecia4").addEventListener("click", () => {
        if(!Kliknieciex2v4 && wynik>=2500){
            wynik=wynik-2500;
            document.getElementById("wynik").innerHTML = wynik;
            document.querySelector(".ulepszenieKlikniecia4").style.display = "none";
            oscypkiZaKlik = oscypkiZaKlik * 2;
            Kliknieciex2v4 = true;
            sprawdzPrzycisk();
        };
    });

    document.querySelector(".ulepszenieKlikniecia5").addEventListener("click", () => {
        if(!Kliknieciex2v5 && wynik>=12500){
            wynik=wynik-12500;
            document.getElementById("wynik").innerHTML = wynik;
            document.querySelector(".ulepszenieKlikniecia5").style.display = "none";
            oscypkiZaKlik = oscypkiZaKlik * 2;
            Kliknieciex2v5 = true;
            sprawdzPrzycisk();
        };
    });

    document.querySelector(".ulepszenieKlikniecia6").addEventListener("click", () => {
        if(!Kliknieciex2v6 && wynik>=62500){
            wynik=wynik-62500;
            document.getElementById("wynik").innerHTML = wynik;
            document.querySelector(".ulepszenieKlikniecia6").style.display = "none";
            oscypkiZaKlik = oscypkiZaKlik * 2;
            Kliknieciex2v6 = true;
            sprawdzPrzycisk();
        };
    });

    document.querySelector(".ulepszenieKlikniecia7").addEventListener("click", () => {
        if(!Kliknieciex2v7 && wynik>=312500){
            wynik=wynik-312500;
            document.getElementById("wynik").innerHTML = wynik;
            document.querySelector(".ulepszenieKlikniecia7").style.display = "none";
            oscypkiZaKlik = oscypkiZaKlik * 2;
            Kliknieciex2v7 = true;
            sprawdzPrzycisk();
        };
    });
    //kursory
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
            document.querySelector("#juhasi").style.display = "inline-block";
            document.getElementById("wynik").innerHTML = wynik;
            document.getElementById("kursory").innerHTML = "Kursory[" + kursory + "] = " + kosztKursora;
        };
    };
    
    document.getElementById("kursory").innerHTML = "Kursory[" + kursory + "] = " + kosztKursora;
    
    document.querySelector("#kursory").addEventListener("click", () => {
        dodajKursor();
        sprawdzPrzycisk();
    });

    //juhasi
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
            document.querySelector("#sopy").style.display = "inline-block";
            document.getElementById("wynik").innerHTML = wynik;
            document.getElementById("juhasi").innerHTML = "Juhasi[" + juhasi + "] = " + kosztJuhasa;
        }
    }

    document.getElementById("juhasi").innerHTML = "Juhasi[" + juhasi + "] = " + kosztJuhasa;
    
    document.querySelector("#juhasi").addEventListener("click", () => {
        dodajJuhasa();
        sprawdzPrzycisk();
    });

    //sopy
    var sopy = 0;
    var kosztSopy = 1000;
    var wartoscSopy = 100;

    function wynikSopy() {
        wynik = wynik + sopy * wartoscSopy;
        document.getElementById("wynik").innerHTML = wynik;
    }

    function dodajSope() {
        if (wynik >= kosztSopy) {
            wynik = wynik - kosztSopy;
            sopy = sopy + 1;
            kosztSopy = Math.round(kosztSopy * 1.15);

            document.getElementById("wynik").innerHTML = wynik;
            document.getElementById("sopy").innerHTML = "Sopy[" + sopy + "] = " + kosztSopy;
        }
    }

    document.getElementById("sopy").innerHTML = "Sopy[" + sopy + "] = " + kosztSopy;
    
    document.querySelector("#sopy").addEventListener("click", () => {
        dodajSope();
        sprawdzPrzycisk();
    });

    // aktualizuj wynik co sekunde
    function aktualizujWynik() {
        wynikKursory();
        wynikJuhasi();
        wynikSopy();
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