// WSPOLNY KONTRAKT: nazwy zmiennych i funkcji uzgadnia caly zespol.
const MAKS_ENERGIA = 10;
let pokoj = 1;
let energia = MAKS_ENERGIA;
let karta = false;
let bezpiecznik = false;
let zasilanie = false;
let koniec = false;
let wygrana = false;

// SEKCJA 0 — GOTOWY SILNIK NAUCZYCIELA
function start() {
  pokoj = 1;
  energia = MAKS_ENERGIA;
  karta = false;
  bezpiecznik = false;
  zasilanie = false;
  koniec = false;
  wygrana = false;
  console.log("UCIECZKA Z PSYCHIATRYKA. Zasilanie awaryjne wystarczy na 10 tur.");
  pomoc();
  rozejrzyj();
}

function zakonczTure() {
  energia = energia - 1;
  console.log("Pozostala energia: ");
  pasekEnergii();
  if (wygrana) {
    console.log("WYGRANA! Drzwi otwarte. Mozesz wrocic do domu.");
  } else if (energia === 0) {
    koniec = true;
    console.log("PRZEGRANA. Zasilanie awaryjne padlo. Wpisz start().");
  }
}

// SEKCJA A — INFORMACJE I MAPA
function nazwaPokoju(numer) {
  switch (numer) {
    case 1:
      return "Twoja sypialnia";
    case 2:
      return "Magazyn";
    case 3:
      return "Elektrownia";
    case 4:
      return "Wyjscie";
    default:
      return "Nieznane pomieszczenie";
  }
}
function pasekEnergii() {
  let bateria="[";
  for(let i=0;i<energia;i++){
    bateria+="#";
  }
  for(let i=energia;i<10;i++){
    bateria+=".";
  }
  bateria+="]";
  console.log(bateria);
}

function pomoc() {
  console.log('Dostepne: start(), pomoc(), status(), mapa(), rozejrzyj(), idz("prawo"), akcja("karta")');
  console.log('idz("prawo") - zwiększa pokój o 1');
  console.log('idz("lewo") - zmniejsza pokój o 1 ');
  console.log('akcja("karta") - obsługuje "karta", "bezpiecznik", "napraw", "wyjdz" ');
  console.log('Każdy udany ruch i wykonana akcja kosztują dokładnie 1 energię.');
  console.log('Oglądanie mapy, opisów, pomocy i stanu jest bezpłatne.');
  console.log('Literówka, ruch w ścianę, ponowne zabranie przedmiotu i akcja bez spełnionych warunków są bezpłatne.');
  console.log('Bezpiecznik znika z kieszeni po naprawie. Nie odradza się w magazynie.');
  console.log('Przy energii 0 przegrywamy, chyba że właśnie skutecznie otworzyliśmy wyjście. Wygrana ostatnim ruchem jest dozwolona.');
  console.log('Po końcu gry można oglądać informacje, ale ruch i akcje są zablokowane. start() zaczyna od nowa.');
}

function status() {
  console.log("Pokoj: " + (pokoj));
  pasekEnergii()
  console.log("Bezpiecznik: " + (bezpiecznik ? "tak" : "nie"));
  console.log("Zasilanie: " + (zasilanie ? "tak" : "nie"));
  console.log("Stan gry: ");
  console.log("Wygrana: " + (wygrana ? "tak" : "nie"));
  console.log("Koniec: " + (koniec ? "tak" : "nie"));
  console.log("Karta: " + (karta ? "tak" : "nie"));
}
function mapa() {
  for (let numer = 1; numer <= 4; numer = numer + 1) {
    let text = (numer==pokoj) ? nazwaPokoju(numer) + '<-- jestes tutaj' : nazwaPokoju(numer) ;
    console.log(text);
  }
}
function rozejrzyj() {
  
  switch(pokoj){
    case 1:
      if(!karta) console.log("Na biurku leży karta");
      else console.log("Nic ciekawego. Rusz się dalej =)");
      break;
    case 2:
      if(!bezpiecznik && !zasilanie) console.log("Bezpiecznik leży na półce");
      else console.log("Nic ciekawego. Rusz się dalej =)");
      break;
    case 3:
      console.log("Zasilanie: " + (zasilanie ? "tak" : "nie"));
      break;
    case 4:
      console.log("Tu można otworzyć drzwi, gdy mamy kartę i działa zasilanie");
      
      break;
  }
    
}

// SEKCJA B — RUCH
function idz(kierunek) {
  if(koniec){
    console.log("Koniec gry, muchacho.");
    return;
  }

  let nastepnyPokoj = pokoj;

  switch (kierunek){
    case "prawo":
      nastepnyPokoj++;
      break;
    case "lewo":
      nastepnyPokoj--;
      break;
    default:
      console.log("Mano, takiego kierunku za chiny nie istnieje");
      return;
  }
    
    
    if(nastepnyPokoj<1||nastepnyPokoj>4){
      console.log("Winszuję. Wbiłeś się w ścianę.");
      return;
    }
    pokoj=nastepnyPokoj;
    rozejrzyj();
    zakonczTure();
}

// SEKCJA C — PRZEDMIOTY I WYGRANA
function akcja(co) {
  // TODO C1: zablokuj akcje po koncu gry.
   if(koniec == true || energia == 0)
   {
     console.log("blokada");
	return;
   }

  // TODO C2: switch: karta / bezpiecznik / napraw / wyjdz.
   switch(co)
   {
      case "karta":
         if (pokoj == 1 && karta == false)
          {
            karta = true;
            console.log("Zabierasz karte.");
            return;
          }
        else
         {
           console.log("Tutaj nie ma karty do zabrania.");
           return;
         }
         break;

      case "bezpiecznik":
         if(pokoj == 2 && bezpiecznik == false && zasilanie == false)
          {
            bezpiecznik = true;
            console.log("Zabierasz bezpiecznik.");
            return;
          }
        else
         {
           console.log("Tutaj nie ma bezpiecznik do zabrania.");
           return;
         }
         break;

      case "napraw":
         if(pokoj == 3 && bezpiecznik == true && zasilanie == false)
          {
            bezpiecznik = false;
            zasilanie = true;
            console.log("Naprawiasz zasilanie.");
            return;
          }
        else
         {
           console.log("Tutaj nie ma nic do naprawy.");
           return;
         }
         break;

      case "wyjdz":
         if(pokoj == 4 && karta == true && zasilanie == true)
          {
            wygrana = true;
            koniec = true;
            console.log("Wychodzisz. JUPIIII!!!");
            return;
          }
        else
         {
           console.log("Nie ma tutaj wyjscia.");
           return;
         }
         break;

     default:
         console.log("Blednie napisales przedmiot/akcje");
         return;
   }

  zakonczTure();
  // TODO C2: przed zmiana sprawdz pokoj i wymagany stan.

  // TODO C3: przy odrzuceniu return; przy sukcesie break.
  // TODO C3: po switch jedno zakonczTure().
  // TODO C4: wygrana i koniec ustawione przed rozliczeniem tury!
  console.log("Akcje do uzupelnienia");
}

start();
