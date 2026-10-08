
Mapa ma cztery pokoje, tylko jeden zaznaczony. Informacje są bezpłatne.

próba: mapa()
wynik oczekiwany: 4 pozycje, przy której oznaczenie "jesteś tutaj" jest na Recepcji
wynik otrzymany: pozytywny 
Recepcja<-- jestes tutaj
Magazyn 
Serwerownia 
Wyjscie

Lewo z pokoju 1 i nieznany kierunek nie zmieniają danych.

próba: idz("lewo")
wynik oczekiwany: komunikat "Winszuję. Wbiłeś się w ścianę."
wynik otrzymany: Winszuję. Wbiłeś się w ścianę.

Prawo przesuwa o jeden pokój i zużywa jedną energię.

próba: idz("prawo")
wynik oczekiwany: komunikat "Bezpiecznik leży na półce" i zużycie jednej energii, w sumie ma być 9/10
wynik otrzymany: 
Bezpiecznik leży na półce
Pozostala energia: [#########.]

Tego samego przedmiotu nie da się zabrać dwa razy.

próba: akcja("karta") akcja("karta")
wynik oczekiwany: komunikat "Zabierasz karte." po pierwszej akcji, po drugiej komunikat "Tutaj nie ma karty do zabrania."
wynik otrzymany: 
akcja("karta")
Zabierasz karte.
akcja("karta")
Tutaj nie ma karty do zabrania.

Nie da się naprawić zasilania bez bezpiecznika ani otworzyć drzwi bez obu wymagań.

próba: idz("prawo") idz("prawo") akcja("napraw") idz("prawo") akcja("wyjdz")
wynik oczekiwany: W serwerowni po wykorzystaniu akcja("napraw") komunikat "Tutaj nic do naprawy", w wyjsciu po akcji("wyjdz") sarkastyczny komunikat "Nie ma tutaj wyjscia."
wynik otrzymany:
akcja("napraw")
Tutaj nie ma nic do naprawy.
akcja("wyjdz")
Nie ma tutaj wyjscia.

Da się wygrać, wykonując potrzebne czynności w rozsądnej kolejności.

próba :akcja("karta") idz("prawo") akcja("bezpiecznik")  idz("prawo") akcja("napraw") idz("prawo") akcja("wyjdz")
wynik oczekiwany : kolejność działań : zabrać kartę, iść w prawo, zabrać bezpiecznik, iść w prawo, naprawić zasilanie, iść w prawo, wyjść

wynik otrzymany :

akcja("karta")
Zabierasz karte.

idz("prawo")
Bezpiecznik leży na półce 
Pozostala energia:
[#########.]

akcja("bezpiecznik")
Zabierasz bezpiecznik.

idz("prawo")
Zasilanie: nie
Pozostala energia: 
[########..]

akcja("napraw")
Naprawiasz zasilanie.

idz("prawo")
Tu można otworzyć drzwi, gdy mamy kartę i działa zasilanie 
Pozostala energia: 
[#######...]

akcja("wyjdz")
Wychodzisz. JUPIIII!!!

Po dziesięciu poprawnych ruchach bez wygranej następuje porażka. Kolejny ruch nie zmienia już stanu.

próba: wykorzystywanie od cholery komend idz
wynik oczekiwany: "Wypisanie poziomu energii i komunikat PRZEGRANA. Zasilanie awaryjne padlo. Wpisz start()."
wynik otrzymany: 
idz("lewo")
Zasilanie: nie
Pozostala energia: 
[..........]
PRZEGRANA. Zasilanie awaryjne padlo. Wpisz start().

start() przywraca energię, pozycję oraz wszystkie flagi.

próba: start() status()
wynik oczekiwany: flagi mają być po starcie na nie a enegia na maksie
wynik otrzymany: 
start()
UCIECZKA Z SERWEROWNI. Zasilanie awaryjne wystarczy na 10 tur.
Dostepne: start(), pomoc(), status(), mapa(), rozejrzyj(), idz("prawo"), akcja("karta") 
idz("prawo") - zwiększa pokój o 1 
idz("lewo") - zmniejsza pokój o 1 
akcja("karta") - obsługuje "karta", "bezpiecznik", "napraw", "wyjdz"
Każdy udany ruch i wykonana akcja kosztują dokładnie 1 energię.
Oglądanie mapy, opisów, pomocy i stanu jest bezpłatne.
Literówka, ruch w ścianę, ponowne zabranie przedmiotu i akcja bez spełnionych warunków są bezpłatne.
Bezpiecznik znika z kieszeni po naprawie. Nie odradza się w magazynie.
Przy energii 0 przegrywamy, chyba że właśnie skutecznie otworzyliśmy wyjście. Wygrana ostatnim ruchem jest dozwolona.
Po końcu gry można oglądać informacje, ale ruch i akcje są zablokowane. start() zaczyna od nowa. 
Na biurku leży karta
status()
Pokoj: 1 
[##########] 
Bezpiecznik: nie 
Zasilanie: nie
Stan gry:
Wygrana: nie
Koniec: nie
Karta: nie
