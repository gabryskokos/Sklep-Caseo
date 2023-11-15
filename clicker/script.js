window.addEventListener("DOMContentLoaded", ()=> {
    //zmienne

    //wynik
    var wynik = 0;
    
    //klikanie oscypka
    var oscypkiZaKlik = 1
    var oscypek = document.querySelector("#oscypek")
    
    //kursory
    var kursory = 0;
    var kosztKursora = 15;
    var wartoscKursora = 1

    //juhasi
    var juhasi = 0;
    var kosztJuhasa = 100;
    var wartoscJuhasa = 10;

    //kursory
    function kupKursory() {
        if(wynik>=kosztKursora){
            wynik = wynik - kosztKursora;
            kursory = kursory + 1;
            kosztKursora = Math.round(kosztKursora*1.15);

            document.getElementById("wynik").innerHTML=wynik;
            document.getElementById("kursory").innerHTML="Kursory[" + kursory + "] = " + kosztKursora;
        }
    }
   
    function wynikKursory() {
        wynik = wynik + kursory * wartoscKursora;
        document.getElementById("wynik").innerHTML = wynik;
        setTimeout(wynikKursory, 1000);
    }

    wynikKursory();
    
    document.getElementById("kursory").innerHTML="Kursory[" + kursory + "] = " + kosztKursora;
    document.querySelector("#kursory").addEventListener("click",() => {
        kupKursory()
    });

    //juhasi
    function kupJuhasa() {
        if(wynik>=kosztJuhasa){
            wynik = wynik - kosztJuhasa;
            juhasi = juhasi + 1;
            kosztJuhasa = Math.round(kosztJuhasa*1.15);

            document.getElementById("wynik").innerHTML=wynik;
            document.getElementById("juhasi").innerHTML="Juhasi[" + juhasi + "] = " + kosztJuhasa;
        }
    }
   
    function wynikJuhasi() {
        wynik = wynik + juhasi * wartoscJuhasa;
        document.getElementById("wynik").innerHTML = wynik;
        setTimeout(wynikJuhasi, 1000);
    }

    wynikJuhasi();
    
    document.getElementById("juhasi").innerHTML="Juhasi[" + juhasi + "] = " + kosztJuhasa;
    document.querySelector("#juhasi").addEventListener("click",() => {
        kupJuhasa()
    });
    
    //klikanie oscypka
   document.getElementById("wynik").innerHTML=wynik;
    oscypek.addEventListener("click", ()=>{
        wynik=wynik+oscypkiZaKlik;
        document.getElementById("wynik").innerHTML=wynik;
    });
});
