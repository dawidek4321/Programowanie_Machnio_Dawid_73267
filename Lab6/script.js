
const pobierzWartosc = (wiadomosc, domyslna = 0) => {
    if (typeof prompt !== "undefined") {
        let wynik = prompt(wiadomosc);
        return wynik !== null ? parseInt(wynik) : domyslna;
    }
    return domyslna; // Fallback, gdy brak przeglądarki
};

// ==========================================
// Zadanie 1
// ==========================================
console.log("--- Zadanie 1 ---");
let tablica1 = [];
for (let i = 0; i < 10; i++) {
    tablica1.push(pobierzWartosc(`Zadanie 1: Podaj liczbę całkowitą (${i + 1}/10):`, i + 1));
}
console.log("Wprowadzone liczby:", tablica1);

let szukanaLiczba = pobierzWartosc("Zadanie 1: Podaj liczbę całkowitą do wyszukania:", 5);
let iloscWystapien = tablica1.filter(el => el === szukanaLiczba).length;
console.log(`Liczba ${szukanaLiczba} wystąpiła: ${iloscWystapien} razy.`);


// ==========================================
// Zadanie 2
// ==========================================
console.log("\n--- Zadanie 2 ---");
let tablica2 = [1, 2, 3, 4, 5, 6];
let nowaLiczba = pobierzWartosc("Zadanie 2: Podaj nową liczbę całkowitą do wstawienia:", 99);
let wskazanyIndeks = pobierzWartosc(`Zadanie 2: Podaj indeks, pod który wstawić liczbę (od 0 do ${tablica2.length}):`, 2);

tablica2.splice(wskazanyIndeks, 0, nowaLiczba);
console.log("Tablica po modyfikacji:", tablica2);


// ==========================================
// Zadanie 3
// ==========================================
console.log("\n--- Zadanie 3 ---");
function odwrocCiag(ciag) {
    return ciag.split('').reverse().join('');
}
let tekst = "JavaScript";
console.log(`Oryginał: ${tekst} | Odwrócony: ${odwrocCiag(tekst)}`);


// ==========================================
// Zadanie 4
// ==========================================
console.log("\n--- Zadanie 4 ---");
function wypelnijLosowymi() {
    let losoweLiczby = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    console.log("Wylosowane liczby dla HTML:", losoweLiczby);
    
    if (typeof document !== "undefined") {
        let kontener = document.getElementById("zadanie4-kontener");
        if (kontener) {
            kontener.innerHTML = `<b>Wylosowane liczby:</b> ${losoweLiczby.join(', ')}`;
        } else {
            console.log("Brak elementu o id 'zadanie4-kontener' w HTML.");
        }
    }
}
wypelnijLosowymi();


// ==========================================
// Zadanie 5
// ==========================================
console.log("\n--- Zadanie 5 ---");
let tablica5 = [2, 5, 8, 10, 15, 8];
console.log("Tablica wejściowa:", tablica5);

let suma = tablica5.reduce((a, b) => a + b, 0);
console.log("a. Suma:", suma);

let parzyste = tablica5.filter(x => x % 2 === 0);
console.log("b. Parzyste:", parzyste);

let pomnozone = tablica5.map(x => x * 3);
console.log("c. Pomnożone x3:", pomnozone);

let numerAlbumu = 123456; 
tablica5.push(numerAlbumu);
let indeksAlbumu = tablica5.indexOf(numerAlbumu);
console.log(`d. Dodano nr albumu. Indeks w tablicy: ${indeksAlbumu}`);

let srednia = tablica5.reduce((a, b) => a + b, 0) / tablica5.length;
console.log("e. Średnia arytmetyczna:", srednia.toFixed(2));

let najwieksza = Math.max(...tablica5);
console.log("f. Największa liczba:", najwieksza);

let wybranaWartosc = 8;
let zliczoneWartosci = tablica5.filter(x => x === wybranaWartosc).length;
console.log(`g. Ilość wystąpień wartości ${wybranaWartosc}:`, zliczoneWartosci);


// ==========================================
// Zadanie 6
// ==========================================
console.log("\n--- Zadanie 6 ---");
function sumaDwochNajwiekszych(tab) {
    if (tab.length < 2) return null;
    let posortowana = [...tab].sort((a, b) => b - a);
    return posortowana[0] + posortowana[1];
}
console.log("Suma dwóch największych z [4, 1, 9, 10, 5]:", sumaDwochNajwiekszych([4, 1, 9, 10, 5]));


// ==========================================
// Zadanie 7
// ==========================================
console.log("\n--- Zadanie 7 ---");
function usunDuplikaty(tab) {
    return [...new Set(tab)];
}
console.log("Bez duplikatów z [1, 2, 2, 3, 4, 4, 5]:", usunDuplikaty([1, 2, 2, 3, 4, 4, 5]));


// ==========================================
// Zadanie 8
// ==========================================
console.log("\n--- Zadanie 8 ---");
function analizujKsiazki(tablicaKsiazek) {
    let unikalneTytuly = new Set(tablicaKsiazek);
    return {
        zbior: unikalneTytuly,
        liczba: unikalneTytuly.size
    };
}
let ksiazki = ["Hobbit", "Diuna", "Hobbit", "Solaris", "Diuna"];
let wynikKsiazki = analizujKsiazki(ksiazki);
console.log("Unikalne tytuły:", Array.from(wynikKsiazki.zbior));
console.log("Liczba unikalnych tytułów:", wynikKsiazki.liczba);


// ==========================================
// Zadanie 9
// ==========================================
console.log("\n--- Zadanie 9 ---");
function unikalneZnaki(lancuch) {
    return new Set(lancuch.split(''));
}
let slowo = "kryptografia";
console.log(`Unikalne znaki w słowie '${slowo}':`, unikalneZnaki(slowo));


// ==========================================
// Zadanie 10
// ==========================================
console.log("\n--- Zadanie 10 ---");
function zliczWystapieniaSlow(tablicaSlow) {
    let mapaSlow = new Map();
    tablicaSlow.forEach(slowo => {
        let ilosc = mapaSlow.has(slowo) ? mapaSlow.get(slowo) + 1 : 1;
        mapaSlow.set(slowo, ilosc);
    });
    return mapaSlow;
}
let teksty = ["ala", "ma", "kota", "ala", "ma", "psa"];
console.log("Zliczone wystąpienia:", zliczWystapieniaSlow(teksty));


// ==========================================
// Zadanie 11
// ==========================================
console.log("\n--- Zadanie 11 ---");
let ksiazkaAdresowa = new Map([
    ["Jan Kowalski", "123-456-789"],
    ["Anna Nowak", "987-654-321"]
]);

console.log("Książka adresowa:");
ksiazkaAdresowa.forEach((telefon, imie) => {
    console.log(`- ${imie}: ${telefon}`);
});


// ==========================================
// Zadanie 12
// ==========================================
console.log("\n--- Zadanie 12 ---");
let kolejkaKlientow = [];
kolejkaKlientow.push("Klient 1");
kolejkaKlientow.push("Klient 2");
kolejkaKlientow.push("Klient 3");
console.log("Stan kolejki (dodano 3 klientów):", kolejkaKlientow);

console.log(`Obsłużono: ${kolejkaKlientow.shift()}`);
console.log("Stan po obsłudze:", kolejkaKlientow);


// ==========================================
// Zadanie 13
// ==========================================
console.log("\n--- Zadanie 13 ---");
function czyNawiasyZbalansowane(ciag) {
    let stos = [];
    for (let znak of ciag) {
        if (znak === '(') {
            stos.push(znak);
        } else if (znak === ')') {
            if (stos.length === 0) return false;
            stos.pop();
        }
    }
    return stos.length === 0;
}
console.log("Czy '(())()' zbalansowane?:", czyNawiasyZbalansowane("(())()"));
console.log("Czy '(()' zbalansowane?:", czyNawiasyZbalansowane("(()"));
console.log("Czy ')(' zbalansowane?:", czyNawiasyZbalansowane(")("));