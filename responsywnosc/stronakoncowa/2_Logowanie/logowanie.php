<?php
require_once("connect.php");

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Oficjalna strona Caseo - Luksusowe Oscypki</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Concert+One&family=Dokdo&family=Gamja+Flower&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
  <link rel="icon" href="../0_Graficzki/oscypek.svg">
  <link rel="stylesheet" href="logowanie.css">
  <script src="./logowanie.js"></script>  
  <script src="https://kit.fontawesome.com/7a7898750c.js" crossorigin="anonymous"></script>
</head>
<body>
  <!-- TŁO -->
  <div class="tlo">
    <div class="tlo-slide">
      <img src="../0_Graficzki/tlologowania.jpg" />
      <img src="../0_Graficzki/tlologowania.jpg" />
      <img src="../0_Graficzki/tlologowania.jpg" />
      <img src="../0_Graficzki/tlologowania.jpg" />
    </div>
  </div>
  

  
  <!-- LOGOWANIE -->
  <section class="logowanie">
    <div class="rozmazanetlo"></div>
    <div class="boxlogowania">
      <div class="wprowadzanie">
        <form action="">
          <h1 id="witoj"><i>WITOJ W CASEO</i></h1> 
          <a id="domek" href="../stronaglowna/stronaglowna.html"><i class="fa-solid fa-house"></i></a>
          <div class="avatar">
            <h2 id="profilowe"><img id="goralprof" src="../0_Graficzki/juhas.png"></h2>
          </div>
          <div class="centrowanielogpass">
          <div class="inputbox">
            <input type="name" required>
            <i class="fa-solid fa-user"></i>
            <label for="">Nazwa</label>
          </div>
          <div class="inputbox">
            <input type="password" id="logowaniehaslo" required>
            <i class="fa-regular fa-eye-slash" id="eyeicon-lock"></i>
            <i class="fa-solid fa-lock"></i>
            <label for="">Hasło</label>
          </div>
          </div>
          <div class="forget">
            <label for=""><input type="checkbox" class="checkboxrozmiar"> Zapamiętaj mnie  | <b><a href="#" id="przejsciedolewej"> Zapomniałem hasła</a></b></label>
          </div>
          <button id="zaloguj">Zaloguj</button>
          <div class="register">
            <p>Nie masz konta? <b><a href="#" id="przjsciedoprawej">Zarejestruj się</a></p></b>
          </div>
        </form>
      </div>
    </div>
  </section>



  <!-- REJESTRACJA -->
  <section class="rejestracja">
    <div class="boxrejestracji">
      <div class="srodekrejestracji">
        <form action="insert_user_inc.php" method="post">
          <div class="boxinfodlaczego">
            <div>
              <form action="">
              <div class="argu">
                <i id="ikonkidlaczego" class="fa-solid fa-clipboard"><b class="argumenty" >Sprawdzaj poprzednie zamówienia</b></i><br>
                <i id="ikonkidlaczego" class="fa-solid fa-tag"><b class="argumenty" >Dostęp do unikalnych promocji</b></i><br>
                <i id="ikonkidlaczego" class="fa-solid fa-dollar-sign"><b class="argumenty" >Korzystaj z rabatów i promocji</b></i><br>
                <i id="ikonkidlaczego" class="fa-solid fa-forward-fast"><b class="argumenty" >Szybki proces zamawiania</b></i><br>
                <i id="ikonkidlaczego" class="fa-solid fa-truck-fast"><b class="argumenty" >Śledż swoją paczke</b></i><br>
                <i id="ikonkidlaczego" class="fa-solid fa-credit-card"><b class="argumenty" >Karta myCASEO</b></i><br>
              </div>
              </form>
            </div>
          </div>
          
          <h1 id="dlaczego"><i>Dlaczego warto do nas dołączyć?  <br><br><b><a href="#" id="infodlaczegowartodolaczyc"><p id="tekst">WIĘCEJ</p></a></b></i></h1> 

        <div class="impurejest">
          <i id="scolka-rej" class="fa-solid fa-arrow-left"></i>
          <a id="domek" href="../1_Home/index.html"><i class="fa-solid fa-house"></i></a>   
          
        <div class="schowanezebypokazacargu">
          <div class="danerejesrt">
            <input type="text" name="name" id="name"required>
            <label for="name">Imię</label>
          </div>
          <div class="danerejesrt">
            <input type="text" name="surname" id="surname" required>
            <label for="surname">Nazwisko</label>
          </div>
          <div class="danerejesrt">
            <input type="text" name="nickname" id="nickname" required>
            <label for="nickaname">Nazwa ( będziesz się nią logował )</label>
          </div>
          <div class="danerejesrt">
            <input type="text" name="email" id="email" required>
            <label for="email">Adres e-mail</label>
          </div>
          <div class="danerejesrt">
            <input type="number" name="phonenumber" id="phonenumber" required>
            <label for="phonenumber">Numer telefonu</label>
          </div>
          <div class="danerejesrt">
            <input type="password" id="rejestrhaslo" name="password"required>
            <label for="password">Hasło</label>
            <i class="fa-regular fa-eye-slash" id="eyerejestracjahaslo"></i>
          </div>
          <div class="danerejesrt">
            <input type="password" id="rejestrhaslopotw" required>
            <label for="">Potwierdź hasło</label>
            <i class="fa-regular fa-eye-slash" id="eyeiconrejestracjapotwhasla"></i>
          </div>
          
          <label class="toggle" for="myToggle">
            <p class="akceptuje">Akceptuję <a href="https://pl.pornhub.com/information/terms"><b class="regulamin"> regulamin </b></a>sklepu Internetowego</p>
            <input class="toggle__input" name="" type="checkbox" id="myToggle">
            <div class="toggle__fill"></div> 
        </label>

          <button id="zaloguj" class="zaluzkonto">Załóż konto</button>
          <div class="register">
            <p>Masz już konto? <b><a href="#" id="wroczrejestracjilink">Zaloguj się</a></p></b>
          </div>
        </div>
      </div>
    </form>

      </div>
    </div>
  </section>



  <!-- RESET HASŁA -->
  <section class="resethasla">
    <div class="boxresetu">
      <div class="srodekresetu">
        <form action="">
          <i id="scolka-res" class="fa-solid fa-arrow-left"></i>
          <a id="domek" href="../1_Home/index.html"><i class="fa-solid fa-house"></i></a>
        </form>
      </div>
    </div>
  </section>

</body>
</html>



<!--
  stronka resetu hasła
  baza danych do logowania
-->