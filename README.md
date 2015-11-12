# Alkalmazások fejlesztése 1. beadandó
- [Leírás](https://www.github.com/3BL/alkfejlbead1#leírás)
- [Technológiák](https://www.github.com/3BL/alkfejlbead1#technológiák)
- [Modellek](https://www.github.com/3BL/alkfejlbead1#modellek)
- [Felhasználói interfész](https://www.github.com/3BL/alkfejlbead1#interfész)
- [Tesztelés](https://www.github.com/3BL/alkfejlbead1#tesztek)


##Leírás
Ez a projekt az ELTE-IK programtervező informatikus Bsc szak Alkalmazások fejlesztése tárgy első
beadandója. Én a tárgyfelvételes feladatot választottam, ahol felhasználóként lehet regisztrálni
egy tanulmányi rendszerhez hasonló oldalon és belépni, hogy kedvünk szerinti tárgyakat hozzunk 
létre és vegyünk fel. Úgy oldottam meg a feladatot, hogy minden felhasználó csak a saját maga
által felvett tárgyakat lássa, és csak a saját részére rögzíthessen.


##Technológiák
A project főleg javascript-ben/jquery-ben van megírva, a megjelenítéshez a handlebars fájlok
és az alap superhero bootswatch téma felel. A node modulok nincsenek fenn a github-omon, 
ezért itt a listájuk:
 
 * bcryptjs
 * body-parser
 * chai
 * connect-flash
 * express
 * express-session
 * express-validator
 * hbs
 * mocha
 * passport
 * passport-local
 * sails-disk
 * sails-memory
 * waterline
 * zombie


##Modellek


Itt egy kép látható az adatbázis modellről. A user modell tükrözi a felhasználót akinek egy egyedi adattagja van,
a neptun kód, tehát két ugyanolyan neptun nem lehet az adatbázisban. Lehet sok felhasználó (user), mindenkinek lehetnek
tantárgyai ez a subjects adattag, ez egy tantárgyakat tartalmazó tömb, ezeket látja a felhasználó kilistázva, 
ha belép a rendszerbe. ** A one-to-many kapcsolat úgy valósul meg, hogy egy felhasználónak lehet több tantárgya is, viszont visszafele már nem működik a dolog, minden tantárgyhoz csak egy felhasználó van rendelve az id-je alapján. **


##Interfész


Röviden a felhasználói interfészről. A bal felső sarokban van egy logo, amire ha rákattintunk a tantárgy
listázós oldalra irányit, feltéve, hogy be vagyunk jelentkezve. Ha nem vagyunk bejelentkezve, akkor jobb felső
sarokban lehet a bejelentkezés gombra kattintani, ami átvisz a login oldalra. Ezen az oldalon lehet a
regisztrálás gombra is kattintani, ami a signup oldalra visz, ahol ki lehet tölteni értelemszerüen a
mezőket és regisztrálni a rendszerbe. Miután belépünk, az oldal tetején van egy csík ahol ki van írva a nevünk, és
itt lehet kijelentkezni is.


##Tesztek

Két fő tesztelési metódust használtam a feladatban.

* Az első az egy mocha/chai típusú tesztelés. Ez teszteli azt, hogy egy modelt létre lehet-e hozni,
hogy később megtalálható legyen az adatbázisban módosítás, vagy törlés céljából. Ez a teszt
fedezi az adatbázis részt és az ORM/waterline/sails részt, ami dologozik.

* A másik teszteléshez használt eszköz, az a handlebars fájlokban a validator, amivel ellenőrizni
tudjuk, hogy minden mező ki legyen töltve, enélkül ne fogadjuk el a user regisztrációt vagy a tantárgy
felvételt.

##Fejlesztés és felhasználás
Én a cloud9 webes felüleletet használtam a projekt megírásához Windows-on. Ha valaki folytatni szeretné,
akkor egyszerüen csak le kell töltenie, és a saját cloud9 projektjébe importálnia. Másik megoldás, ha
valamilyen IDE-t telepít, például Webstorm, ahol a server.js futtatásával indíthatja el az alkalmazást. Előbbi esetben
az npm install és bower install utasítások cloud9-beli futtása is kell először a működéshez, utóbbiban 
a node.js-t kell telepíteni a használni kivánt IDE-n kivül.

A fejlesztés zökkenőmentes menetéhez szükség lesz 2GB memóriára és valamilyen 2 magos processzorra minimum.


##Funkció lista 

- Regisztráció, login oldal működik, a jelszó bcrypt-el kódolva kerül az adatbázisba
- A neptun kód egyedi, csak egy lehet mindegyikből, ha ez nem teljesül, akkor hibát jelez a program
- session működik
- Listázó oldal müködik, mindenki a saját maga által felvett dolgokat látja csak
- Szerkesztés/Törlés funkció müködik

További fejlesztési lehetőség:
- többféle tesztelési és validációs lehetőség implementálása
- többféle felhasználói szerepkör megvalósítása
