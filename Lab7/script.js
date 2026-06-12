// ==========================================
// ZADANIE 1
// ==========================================
console.log("--- Zadanie 1 ---");
const ksiazka = {
    tytul: "Cyberbezpieczeństwo SOC",
    autor: "John Doe",
    rokWydania: 2024
};

function informacjeOKsiazce(obj) {
    return `${obj.tytul} - ${obj.autor} (${obj.rokWydania})`;
}
console.log(informacjeOKsiazce(ksiazka));


// ==========================================
// ZADANIE 2
// ==========================================
console.log("\n--- Zadanie 2 ---");
const student = {
    imie: "Dawid",
    nazwisko: "Machnio",
    nrAlbumu: "73267",
    oceny: {
        matematyka: 4.5,
        programowanie: 5.0,
        sieciKomp: 4.0
    },
    obliczSrednia: function() {
        let ocenyWartosci = Object.values(this.oceny);
        let suma = ocenyWartosci.reduce((a, b) => a + b, 0);
        let srednia = suma / ocenyWartosci.length;
        console.log(`Średnia studenta ${this.imie} ${this.nazwisko} wynosi: ${srednia.toFixed(2)}`);
        return srednia;
    }
};
student.obliczSrednia();


// ==========================================
// ZADANIE 3
// ==========================================
console.log("\n--- Zadanie 3 ---");
class Trojkat {
    constructor(wysokosc, dlugoscPodstawy, nazwa) {
        this.wysokosc = wysokosc;
        this.dlugoscPodstawy = dlugoscPodstawy;
        this.nazwa = nazwa;
    }

    obliczPole() {
        return (this.dlugoscPodstawy * this.wysokosc) / 2;
    }

    porownajTrojkaty(innyTrojkat) {
        if (this.obliczPole() > innyTrojkat.obliczPole()) {
            return this;
        }
        return innyTrojkat;
    }
}

const t1 = new Trojkat(10, 5, "Trójkąt A");
const t2 = new Trojkat(8, 8, "Trójkąt B");
const t3 = new Trojkat(12, 4, "Trójkąt C");

console.log(`Pole ${t1.nazwa} to ${t1.obliczPole()}`);
console.log(`Pole ${t2.nazwa} to ${t2.obliczPole()}`);

let wiekszyTrojkat = t1.porownajTrojkaty(t2);
console.log(`Większe pole z porównania ma: ${wiekszyTrojkat.nazwa}`);


// ==========================================
// ZADANIE 4
// ==========================================
console.log("\n--- Zadanie 4 ---");
class Trapez {
    constructor(wysokosc, podstawa1, podstawa2, nazwa) {
        this.wysokosc = wysokosc;
        this.podstawa1 = podstawa1;
        this.podstawa2 = podstawa2;
        this.nazwa = nazwa;
    }

    obliczPole() {
        return ((this.podstawa1 + this.podstawa2) * this.wysokosc) / 2;
    }

    zmienNazwe(nowaNazwa) {
        this.nazwa = nowaNazwa;
    }
}

const trap1 = new Trapez(5, 10, 6, "Trapez 1");
const trap2 = new Trapez(4, 8, 4, "Trapez 2");
const trap3 = new Trapez(6, 12, 8, "Trapez 3");

trap1.zmienNazwe("Nowy Trapez 1");
console.log(`Nowa nazwa trapezu to: ${trap1.nazwa}`);

function porownajFigury(trojkat, trapez) {
    let poleTrojkata = trojkat.obliczPole();
    let poleTrapezu = trapez.obliczPole();

    if (poleTrojkata > poleTrapezu) {
        console.log(`Większa figura to: ${trojkat.nazwa} (Pole: ${poleTrojkata})`);
    } else if (poleTrapezu > poleTrojkata) {
        console.log(`Większa figura to: ${trapez.nazwa} (Pole: ${poleTrapezu})`);
    } else {
        console.log(`Figury mają równe pole (${poleTrojkata}).`);
    }
}

porownajFigury(t1, trap1);


// ==========================================
// ZADANIE 5
// ==========================================
console.log("\n--- Zadanie 5 ---");
function formatujDoJSON(obj) {
    return JSON.stringify(obj);
}

const obiektTestowy = {
    id: 1,
    rola: "Admin",
    haslo: undefined,
    status: "Aktywny"
};
console.log("Obiekt w formacie JSON:", formatujDoJSON(obiektTestowy));


// ==========================================
// ZADANIA 6, 7, 8, 9
// ==========================================

function wykonajZadaniaGrupowe() {
    console.log("\n--- Zadania 6, 7, 8, 9 uruchomione ---");

    let limitHTML = document.getElementById("iloscRekordow").value;
    let limit = parseInt(limitHTML);
    
    if (isNaN(limit) || limit < 1) limit = 1;
    if (limit > 20) limit = 20;

    const pulaImion = ["Jan", "Anna", "Piotr", "Katarzyna", "Michał", "Zofia", "Tomasz", "Magdalena"];
    const pulaNazwisk = ["Bąk", "Kowalski", "Nowak", "Wiśniewski", "Wójcik", "Kowalczyk", "Kamiński"];
    
    let uzytkownicy = [];

    for (let i = 0; i < limit; i++) {
        let losoweImie = pulaImion[Math.floor(Math.random() * pulaImion.length)];
        let losoweNazwisko = pulaNazwisk[Math.floor(Math.random() * pulaNazwisk.length)];
        let losowyWiek = Math.floor(Math.random() * (50 - 5 + 1)) + 5; 
        let losowyTelefon = Math.floor(Math.random() * (8000000 - 5000000 + 1)) + 5000000; 

        uzytkownicy.push({
            name: losoweImie,
            surname: losoweNazwisko,
            age: losowyWiek,
            phone: losowyTelefon
        });
    }

    console.log("Zadanie 6 - Wygenerowana tablica:", uzytkownicy);

    // Aktualizacja HTML
    let wynikWszyscy = document.getElementById("wynik-wszyscy");
    let wynikPelnoletni = document.getElementById("wynik-pelnoletni");
    let wynikImiona = document.getElementById("wynik-imiona");

    if(wynikWszyscy) wynikWszyscy.innerText = JSON.stringify(uzytkownicy, null, 2);

    let pelnoletni = uzytkownicy.filter(user => user.age >= 18);
    console.log("Zadanie 8 - Tylko pełnoletni:", pelnoletni);
    if(wynikPelnoletni) wynikPelnoletni.innerText = JSON.stringify(pelnoletni, null, 2);

    let sameImiona = uzytkownicy.map(user => user.name);
    console.log("Zadanie 9 - Same imiona:", sameImiona);
    if(wynikImiona) wynikImiona.innerText = JSON.stringify(sameImiona, null, 2);
}

// Podpięcie przycisku na sztywno
let przycisk = document.getElementById("btn-generuj");
if(przycisk) {
    przycisk.addEventListener("click", wykonajZadaniaGrupowe);
    console.log("Przycisk pomyślnie połączony z funkcją!");
} else {
    console.error("BŁĄD: Nie znaleziono przycisku w pliku HTML!");
}