window.addEventListener("DOMContentLoaded", () => {
    // wynik
    var wynik = 0;
    var oscypkiNaSekunde;

    function round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Number((Math.round(value * multiplier) / multiplier).toFixed(1));
    }

    window.addEventListener("click", () => {
        oscypkiNaSekunde = wartoscKursora * kursory + (wartoscJuhasa*10) * juhasi + (wartoscSopy*10) * sopy;
        document.querySelector("#oscypkiNaSekunde").innerHTML = round(oscypkiNaSekunde, 1) + " o/s";
        zapiszGre();
    });

    // ulepszenia
    var Kursoryx2v1 = false;
    var Juhasix2v1 = false;
    var Sopyx2v1 = false;
    var Kursoryx2v2 = false;
    var Juhasix2v2 = false;
    var Sopyx2v2 = false;
    var Kursoryx2v3 = false;
    var Juhasix2v3 = false;
    var Sopyx2v3 = false;
    var Kliknieciex2v1 = false;
    var Kliknieciex2v2 = false;
    var Kliknieciex2v3 = false;
    var Kliknieciex2v4 = false;
    var Kliknieciex2v5 = false;
    var Kliknieciex2v6 = false;
    var Kliknieciex2v7 = false;

    function sprawdzPrzycisk() {
        if (Kliknieciex2v1 == true && !Kliknieciex2v2) {
            document.querySelector(".ulepszenieKlikniecia2").style.display = "inline-block";
        };

        if (Kliknieciex2v2 == true && !Kliknieciex2v3) {
            document.querySelector(".ulepszenieKlikniecia3").style.display = "inline-block";
        };

        if (Kliknieciex2v3 == true && !Kliknieciex2v4) {
            document.querySelector(".ulepszenieKlikniecia4").style.display = "inline-block";
        };

        if (Kliknieciex2v4 == true && !Kliknieciex2v5) {
            document.querySelector(".ulepszenieKlikniecia5").style.display = "inline-block";
        };

        if (Kliknieciex2v5 == true && !Kliknieciex2v6) {
            document.querySelector(".ulepszenieKlikniecia6").style.display = "inline-block";
        };

        if (Kliknieciex2v6 == true && !Kliknieciex2v7) {
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

        if (kursory >= 10 && !Kursoryx2v2) {
            document.querySelector(".ulepszenieKursora2").style.display = "inline-block";
        };

        if (juhasi >= 10 && !Juhasix2v2) {
            document.querySelector(".ulepszenieJuhasa2").style.display = "inline-block";
        };

        if (sopy >= 10 && !Sopyx2v2) {
            document.querySelector(".ulepszenieSopy2").style.display = "inline-block";
        };

        if (kursory >= 25 && !Kursoryx2v3) {
            document.querySelector(".ulepszenieKursora3").style.display = "inline-block";
        }

        if (juhasi >= 25 && !Juhasix2v3) {
            document.querySelector(".ulepszenieJuhasa3").style.display = "inline-block";
        }

        if (sopy >= 25 && !Sopyx2v3) {
            document.querySelector(".ulepszenieSopy3").style.display = "inline-block";
        }
    };

    sprawdzPrzycisk();

    // klikanie ulepszeń
    document.querySelector(".ulepszenieKursora1").addEventListener("click", () => {
        if (!Kursoryx2v1 && wynik >= 100) {
            wynik = wynik - 100;
            document.querySelector("#wynik").innerHTML = round(wynik, 1);
            document.querySelector(".ulepszenieKursora1").style.display = "none";
            wartoscKursora = wartoscKursora * 2;
            Kursoryx2v1 = true;
            kursory = kursory - 1;
            wynik = wynik + kosztKursora;
            dodajKursor();
            wynik = wynik - wartoscKursora;
        };
    });

    document.querySelector(".ulepszenieJuhasa1").addEventListener("click", () => {
        if (!Juhasix2v1 && wynik >= 1000) {
            wynik = wynik - 1000;
            document.querySelector("#wynik").innerHTML = round(wynik, 1);
            document.querySelector(".ulepszenieJuhasa1").style.display = "none";
            wartoscJuhasa = wartoscJuhasa * 2;
            Juhasix2v1 = true;
            juhasi = juhasi - 1;
            wynik = wynik + kosztJuhasa;
            dodajJuhasa();
            wynik = wynik - wartoscJuhasa;
        };
    });

    document.querySelector(".ulepszenieSopy1").addEventListener("click", () => {
        if (!Sopyx2v1 && wynik >= 10000) {
            wynik = wynik - 10000;
            document.querySelector("#wynik").innerHTML = round(wynik, 1);
            document.querySelector(".ulepszenieSopy1").style.display = "none";
            wartoscSopy = wartoscSopy * 2;
            Sopyx2v1 = true;
            sopy = sopy - 1;
            wynik = wynik + kosztSopy;
            dodajSope();
            wynik = wynik - wartoscSopy;
        };
    });

    document.querySelector(".ulepszenieKursora2").addEventListener("click", () => {
        if (!Kursoryx2v2 && wynik >= 500) {
            wynik = wynik - 500;
            document.querySelector("#wynik").innerHTML = round(wynik, 1);
            document.querySelector(".ulepszenieKursora2").style.display = "none";
            wartoscKursora = wartoscKursora * 2;
            Kursoryx2v2 = true;
            kursory = kursory - 1;
            wynik = wynik + kosztKursora;
            dodajKursor();
            wynik = wynik - wartoscKursora;
        };
    });

    document.querySelector(".ulepszenieJuhasa2").addEventListener("click", () => {
        if (!Juhasix2v2 && wynik >= 5000) {
            wynik = wynik - 5000;
            document.querySelector("#wynik").innerHTML = round(wynik, 1);
            document.querySelector(".ulepszenieJuhasa2").style.display = "none";
            wartoscJuhasa = wartoscJuhasa * 2;
            Juhasix2v2 = true;
            juhasi = juhasi - 1;
            wynik = wynik + kosztJuhasa;
            dodajJuhasa();
            wynik = wynik - wartoscJuhasa;
        };
    });

    document.querySelector(".ulepszenieSopy2").addEventListener("click", () => {
        if (!Sopyx2v2 && wynik >= 50000) {
            wynik = wynik - 50000;
            document.querySelector("#wynik").innerHTML = round(wynik, 1);
            document.querySelector(".ulepszenieSopy2").style.display = "none";
            wartoscSopy = wartoscSopy * 2;
            Sopyx2v2 = true;
            sopy = sopy - 1;
            wynik = wynik + kosztSopy;
            dodajSope();
            wynik = wynik - wartoscSopy;
        };
    });

    document.querySelector(".ulepszenieKursora3").addEventListener("click", () => {
        if (!Kursoryx2v3 && wynik >= 2500) {
            wynik -= 2500;
            document.querySelector("#wynik").innerHTML = round(wynik, 1);
            document.querySelector(".ulepszenieKursora3").style.display = "none";
            wartoscKursora *= 2;
            Kursoryx2v3 = true;
            kursory -= 1;
            kosztKursora *= 10;
            dodajKursor();
            wynik -= wartoscKursora;
        }
    });

    document.querySelector(".ulepszenieJuhasa3").addEventListener("click", () => {
        if (!Juhasix2v3 && wynik >= 25000) {
            wynik -= 25000;
            document.querySelector("#wynik").innerHTML = round(wynik, 1);
            document.querySelector(".ulepszenieJuhasa3").style.display = "none";
            wartoscJuhasa *= 2;
            Juhasix2v3 = true;
            juhasi -= 1;
            kosztJuhasa *= 10;
            dodajJuhasa();
            wynik -= wartoscJuhasa;
        }
    });

    document.querySelector(".ulepszenieSopy3").addEventListener("click", () => {
        if (!Sopyx2v3 && wynik >= 250000) {
            wynik -= 250000;
            document.querySelector("#wynik").innerHTML = round(wynik, 1);
            document.querySelector(".ulepszenieSopy3").style.display = "none";
            wartoscSopy *= 2;
            Sopyx2v3 = true;
            sopy -= 1;
            kosztSopy *= 10;
            dodajSope();
            wynik -= wartoscSopy;
        }
    });

    document.querySelector(".ulepszenieKlikniecia1").addEventListener("click", () => {
        if (wynik >= 10) {
            wynik = wynik - 10;
            document.querySelector("#wynik").innerHTML = round(wynik, 1);
            document.querySelector(".ulepszenieKlikniecia1").style.display = "none";
            oscypkiZaKlik = oscypkiZaKlik * 2;
            Kliknieciex2v1 = true;
            sprawdzPrzycisk();
        };
    });

    document.querySelector(".ulepszenieKlikniecia2").addEventListener("click", () => {
        if (!Kliknieciex2v2 && wynik >= 100) {
            wynik = wynik - 100;
            document.querySelector("#wynik").innerHTML = round(wynik, 1);
            document.querySelector(".ulepszenieKlikniecia2").style.display = "none";
            oscypkiZaKlik = oscypkiZaKlik * 2;
            Kliknieciex2v2 = true;
            sprawdzPrzycisk();
        };
    });

    document.querySelector(".ulepszenieKlikniecia3").addEventListener("click", () => {
        if (!Kliknieciex2v3 && wynik >= 500) {
            wynik = wynik - 500;
            document.querySelector("#wynik").innerHTML = round(wynik, 1);
            document.querySelector(".ulepszenieKlikniecia3").style.display = "none";
            oscypkiZaKlik = oscypkiZaKlik * 2;
            Kliknieciex2v3 = true;
            sprawdzPrzycisk();
        };
    });

    document.querySelector(".ulepszenieKlikniecia4").addEventListener("click", () => {
        if (!Kliknieciex2v4 && wynik >= 2500) {
            wynik = wynik - 2500;
            document.querySelector("#wynik").innerHTML = round(wynik, 1);
            document.querySelector(".ulepszenieKlikniecia4").style.display = "none";
            oscypkiZaKlik = oscypkiZaKlik * 2;
            Kliknieciex2v4 = true;
            sprawdzPrzycisk();
        };
    });

    document.querySelector(".ulepszenieKlikniecia5").addEventListener("click", () => {
        if (!Kliknieciex2v5 && wynik >= 12500) {
            wynik = wynik - 12500;
            document.querySelector("#wynik").innerHTML = round(wynik, 1);
            document.querySelector(".ulepszenieKlikniecia5").style.display = "none";
            oscypkiZaKlik = oscypkiZaKlik * 2;
            Kliknieciex2v5 = true;
            sprawdzPrzycisk();
        };
    });

    document.querySelector(".ulepszenieKlikniecia6").addEventListener("click", () => {
        if (!Kliknieciex2v6 && wynik >= 62500) {
            wynik = wynik - 62500;
            document.querySelector("#wynik").innerHTML = round(wynik, 1);
            document.querySelector(".ulepszenieKlikniecia6").style.display = "none";
            oscypkiZaKlik = oscypkiZaKlik * 2;
            Kliknieciex2v6 = true;
            sprawdzPrzycisk();
        };
    });

    document.querySelector(".ulepszenieKlikniecia7").addEventListener("click", () => {
        if (!Kliknieciex2v7 && wynik >= 312500) {
            wynik = wynik - 312500;
            document.querySelector("#wynik").innerHTML = round(wynik, 1);
            document.querySelector(".ulepszenieKlikniecia7").style.display = "none";
            oscypkiZaKlik = oscypkiZaKlik * 2;
            Kliknieciex2v7 = true;
            sprawdzPrzycisk();
        };
    });

    // kursory
    var kursory = 0;
    var kosztKursora = 15;
    var wartoscKursora = 0.1;

    function wynikKursory() {
        wynik = wynik + kursory * wartoscKursora;
        document.querySelector("#wynik").innerHTML = round(wynik, 1);
    };

    function dodajKursor() {
        if (wynik >= kosztKursora) {
            wynik = round(wynik, 1) - kosztKursora;
            kursory = kursory + 1;
            kosztKursora = Math.round(kosztKursora * 1.15);
            document.querySelector("#infoJuhasi").style.display = "inline-block";
            document.querySelector("#juhasi").style.display = "inline-block";
            document.querySelector("#wynik").innerHTML = round(wynik, 1);
            document.querySelector("#infoKursory").innerHTML = "Cena: "+kosztKursora+"<br>Ilość: "+kursory+"<br>Wartość: "+wartoscKursora;
        };
    };
    
    document.querySelector("#kursory").innerHTML = "Kursory[" + kursory + "] = " + kosztKursora;
    
    document.querySelector("#kursory").addEventListener("click", () => {
        dodajKursor();
        sprawdzPrzycisk();
    });

    //juhasi
    var juhasi = 0;
    var kosztJuhasa = 100;
    var wartoscJuhasa = 0.1;

    function wynikJuhasi() {
        wynik = wynik + juhasi * wartoscJuhasa;
        document.querySelector("#wynik").innerHTML = wynik = round(wynik, 1);
    }

    function dodajJuhasa() {
        if (wynik >= kosztJuhasa) {
            wynik = wynik - kosztJuhasa;
            juhasi = juhasi + 1;
            kosztJuhasa = Math.round(kosztJuhasa * 1.15);
            document.querySelector("#infoSopy").style.display = "inline-block";
            document.querySelector("#sopy").style.display = "inline-block";
            document.querySelector("#wynik").innerHTML = wynik = round(wynik, 1);
            document.querySelector("#infoJuhasi").innerHTML = "Cena: "+kosztJuhasa+"<br>Ilość: "+juhasi+"<br>Wartość: "+wartoscJuhasa*10;
        }
    }

    document.querySelector("#juhasi").innerHTML = "Juhasi[" + juhasi + "] = " + kosztJuhasa;
    
    document.querySelector("#juhasi").addEventListener("click", () => {
        dodajJuhasa();
        sprawdzPrzycisk();
    });

    //sopy
    var sopy = 0;
    var kosztSopy = 1000;
    var wartoscSopy = 1;

    function wynikSopy() {
        wynik = wynik + sopy * wartoscSopy;
        document.querySelector("#wynik").innerHTML = wynik = round(wynik, 1);
    }

    function dodajSope() {
        if (wynik >= kosztSopy) {
            wynik = wynik - kosztSopy;
            sopy = sopy + 1;
            kosztSopy = Math.round(kosztSopy * 1.15);

            document.querySelector("#wynik").innerHTML = wynik = round(wynik, 1);
            document.querySelector("#infoSopy").innerHTML = "Cena: "+kosztSopy+"<br>Ilość: "+sopy+"<br>Wartość: "+wartoscSopy*10;
        }
    }

    document.querySelector("#sopy").innerHTML = "Sopy[" + sopy + "] = " + kosztSopy;
    
    document.querySelector("#sopy").addEventListener("click", () => {
        dodajSope();
        sprawdzPrzycisk();
    });

    // aktualizuj wynik co sekunde
    function aktualizujWynik() {
        wynik = round(wynik, 1);
        wynikJuhasi();
        wynikSopy();
        setTimeout(aktualizujWynik, 100);
    }
    function aktualizujWynik1() {
        wynikKursory();
        wynik = round(wynik, 1);
        zapiszGre();
        setTimeout(aktualizujWynik1, 1000);
    }
    aktualizujWynik();
    aktualizujWynik1();
    
    // klikanie oscypka
    var oscypek = document.querySelector("#oscypek");
    var oscypkiZaKlik = 1;

    document.querySelector("#wynik").innerHTML = wynik = round(wynik, 1);
    oscypek.addEventListener("click", (e) => {
        wynik = wynik + oscypkiZaKlik;
        document.querySelector("#wynik").innerHTML = wynik = round(wynik, 1);
        createNumberOnClicker(e);
        });


    //liczby nad kursorem
    function createNumberOnClicker(event) {
        const clickerOffset = oscypek.getBoundingClientRect();
        const position = {
            x: event.pageX - clickerOffset.left,
            y: event.pageY - clickerOffset.top
        };
    
        const element = document.createElement("div"); 
        element.textContent = "+" + oscypkiZaKlik;
        element.classList.add("number", "unselectable"); 
        element.style.position = "absolute";
        element.style.left = position.x - 20 + "px"; 
        element.style.top = position.y + "px";
    
        oscypek.appendChild(element);
    
        function updatePosition() {
            const cursorOffset = oscypek.getBoundingClientRect();
            position.y--;
            element.style.top = position.y - 20 + "px";
            setTimeout(updatePosition, 10); 
        }
        
        function fadeOut(element, duration, finalOpacity, callback) {
            let opacity = 1;
        
            function fade() {
                opacity -= 50 / duration;
        
                if (opacity <= finalOpacity) {
                    element.style.opacity = finalOpacity;
                    callback();
                } else {
                    element.style.opacity = opacity;
                    setTimeout(fade, 50);
                }
            }
        
            fade();
        }

        fadeOut(element, 3000, 0 , function(){
            element.remove();
        })
        
        updatePosition();
        
        
    }
    
    //oscypek losowy
    const minInterval = 600000;
    const maxInterval = 720000;
    const displayTime = 5000;
    let czklik = false;

    function displayImageWithTimeout() {
       displayImage();
    }

    function displayImage() {
        const oscypekImage = document.createElement('img');
        oscypekImage.src = 'obrazy/oscypek.svg';
        oscypekImage.style.position = 'fixed';
        oscypekImage.style.top = `${Math.random() * 90}%`;
        oscypekImage.style.left = `${Math.random() * 90}%`;
        oscypekImage.style.width = '6vw';
        oscypekImage.style.height = 'auto';
        document.body.appendChild(oscypekImage);

        setTimeout(function() {
        fadeOutAndRemove(oscypekImage);
        }, displayTime);

        oscypekImage.addEventListener('click', function() {
            czklik = true;
            this.remove();
            oscypkiZaKlik *= 7;
            setTimeout(function() {
                oscypkiZaKlik /= 10;
            }, 90000);
        });
    }

    function fadeOutAndRemove(element) {
        let opacity = 1;
        const fadeOutInterval = setInterval(function() {
            opacity -= 0.1;
            element.style.opacity = opacity;
            if(opacity <= 0 && czklik == false) {
                clearInterval(fadeOutInterval);
                document.body.removeChild(element);
                setTimeout(displayImageWithTimeout, getRandomInterval());
            }
            else if(czklik == true){
                clearInterval(fadeOutInterval);
                setTimeout(displayImageWithTimeout, getRandomInterval());
                czklik = false;
            }
        }, 100);
    }

    function getRandomInterval() {
        return Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;
    }

    setTimeout(displayImageWithTimeout, getRandomInterval());
    //zapisywanie
    function zapiszGre() {
        var graSave = {
            wynik: wynik,
            kursory: kursory,
            kosztKursora: kosztKursora,
            wartoscKursora: wartoscKursora,
            juhasi: juhasi,
            kosztJuhasa: kosztJuhasa,
            wartoscJuhasa: wartoscJuhasa,
            sopy: sopy,
            kosztSopy: kosztSopy,
            wartoscSopy: wartoscSopy,
            Kursoryx2v1: Kursoryx2v1,
            Juhasix2v1: Juhasix2v1,
            Sopyx2v1: Sopyx2v1,
            Kursoryx2v2: Kursoryx2v2,
            Juhasix2v2: Juhasix2v2,
            Sopyx2v2: Sopyx2v2,
            Kursoryx2v3: Kursoryx2v3,
            Juhasix2v3: Juhasix2v3,
            Sopyx2v3: Sopyx2v3,
            Kliknieciex2v1: Kliknieciex2v1,
            Kliknieciex2v2: Kliknieciex2v2,
            Kliknieciex2v3: Kliknieciex2v3,
            Kliknieciex2v4: Kliknieciex2v4,
            Kliknieciex2v5: Kliknieciex2v5,
            Kliknieciex2v6: Kliknieciex2v6,
            Kliknieciex2v7: Kliknieciex2v7,
        };
        
        localStorage.setItem("graSave", JSON.stringify(graSave));
    }

    function wczytajGre() {
        var saveJSON = localStorage.getItem("graSave");
        if (saveJSON) {
            var saveData = JSON.parse(saveJSON);

            wynik = saveData.wynik;
            kursory = saveData.kursory;
            kosztKursora = saveData.kosztKursora;
            wartoscKursora = saveData.wartoscKursora;
            juhasi = saveData.juhasi;
            kosztJuhasa = saveData.kosztJuhasa;
            wartoscJuhasa = saveData.wartoscJuhasa;
            sopy = saveData.sopy;
            kosztSopy = saveData.kosztSopy;
            wartoscSopy = saveData.wartoscSopy;
            Kursoryx2v1 = saveData.Kursoryx2v1;
            Juhasix2v1 = saveData.Juhasix2v1;
            Sopyx2v1 = saveData.Sopyx2v1;
            Kursoryx2v2 = saveData.Kursoryx2v2;
            Juhasix2v2 = saveData.Juhasix2v2;
            Sopyx2v2 = saveData.Sopyx2v2;
            Kursoryx2v3 = saveData.Kursoryx2v3;
            Juhasix2v3 = saveData.Juhasix2v3;
            Sopyx2v3 = saveData.Sopyx2v3;
            Kliknieciex2v1 = saveData.Kliknieciex2v1;
            Kliknieciex2v2 = saveData.Kliknieciex2v2;
            Kliknieciex2v3 = saveData.Kliknieciex2v3;
            Kliknieciex2v4 = saveData.Kliknieciex2v4;
            Kliknieciex2v5 = saveData.Kliknieciex2v5;
            Kliknieciex2v6 = saveData.Kliknieciex2v6;
            Kliknieciex2v7 = saveData.Kliknieciex2v7;
            sprawdzPrzycisk();
        }
    }
    wczytajGre();
});