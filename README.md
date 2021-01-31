# Strona o szczepionkach na COVID-19

### [Link do strony](https://malelus.github.io/SzczepionkiCovid/)

#### Strona została napisana w edytorze Visual Studio Code używając preprocesora SASS do pisania kodu CSS oraz użyto ikon ze strony https://fontawesome.com/.

- czcionki:
  - [Roboto](https://fonts.google.com/specimen/Roboto?query=robot),
  - [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue?query=bebas).

---

### Obowiązkowe:

- układ:

  - logo,
  - linki,
  - zawartość,
  - stopka.

- 3 szczepionki (Moderna, AstraZeneca, CureVac) ([źródło](https://businessinsider.com.pl/technologie/nowe-technologie/szczepionki-przeciw-covid-19-moderna-astrazeneca-curevac-sanofi/k4znpqf)),

- formularz zapisu na szczepienie.

---

### Dodatkowe:

- strona zbudowana została responsywnie dzięki czemu umożliwa swobodne i wygodne korzystanie z niej na każdym urządzeniu:

| Mobile                                                     | Tablet                                                                                        | Desktop                                                             |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| <699px                                                     | 700px - 999px                                                                                 | >1000px                                                             |
| widok mobilny, hamburger menu (pierwotne ułożenie strony). | widok tabletu, pasek nawigacji na górze, dostosowanie czcionek i animacji do rozmiaru ekranu. | widok desktop, dostosowanie czcionek i animacji do rozmiaru ekranu. |

- użyto znaczników semantycznych,

- animacja przejścia między podstronami wykonana przy pomocy CSS oraz JavaScript.

- okno popup umieszczone w stopce strony, zawiera:

  - skrócone informacje o zawartości strony (dodatkowy link do formularza szczepień),
  - informacje o autorze,
  - datę wykonania.
  - okno można wyłączyć na 3 sposoby:

    - przycisk Zamknij,
    - kliknięcie poza obszar okna,
    - za pomocą przycisku ESC.

- symulowne wysłanie formularza na serwer komunikowany poprzez komunikat, następnie strona zostaje odświeżona.

- animacja na głównej stronie, po najechaniu na nazwę akcji szczepień pojawia się link przenoszący na stronę [gov](https://www.gov.pl/web/szczepimysie).

- zmieniony wygląd scrollbar'a,

- link do strony głównej umieszczony w napisie "SzczepionkiCovid"

- linki aktywne oraz znacznik na której stronie aktualnie znajduję się użytkownik.

- możliwość wyłączenia całkowicie animacji tekstu.
  > (aby włączyć opcje: ustawienia > ułatwienia dostępu > wyświetlacz > Pokaż animacje w systemie Windows (wyłącz)) (ustawienie znajduje się w pliku \_reset.scss).

---

#### Wykonał Mateusz Narowski

#### Data: 02.02.2021
