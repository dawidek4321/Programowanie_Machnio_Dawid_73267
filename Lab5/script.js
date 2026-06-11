
window.onload = function() {
    // ZADANIE 3
    let czyPelnoletni = confirm("Zadanie 3: Czy masz ukończone 18 lat? (Wybierz OK jeśli tak)");
    if (!czyPelnoletni) {
        window.location.href = "https://www.disney.pl"; 
    }

    // ZADANIE 1
    console.log("--- Zadanie 1a: Odliczanie pętla FOR ---");
    odliczanieFor();
    
    console.log("--- Zadanie 1b: Odliczanie pętla WHILE ---");
    odliczanieWhile();

    // ZADANIE 2
    console.log("--- Zadanie 2: Test obliczania silni dla liczby 5 ---");
    console.log("Wynik silni z 5 to:", silnia(5));
};

// --- ZADANIE 1
function odliczanieFor() {
    for (let i = 10; i > 0; i--) {
        console.log(i);
    }
    console.log("Happy New Year!");
}

function odliczanieWhile() {
    let i = 10;
    while (i > 0) {
        console.log(i);
        i--;
    }
    console.log("Happy New Year!");
}

// --- ZADANIE 2
function silnia(liczba) {
    if (liczba < 0) return "Silnia z liczby ujemnej nie istnieje";
    if (liczba === 0 || liczba === 1) return 1;
    
    let wynik = 1;
    for (let i = 2; i <= liczba; i++) {
        wynik *= i;
    }
    return wynik;
}

// --- ZADANIE 4
function zmienKolor(kliknietyPrzycisk) {
    let wszystkiePrzyciski = document.querySelectorAll('.color-btn');
    
    // Zresetuj wszystkie przyciski do domyślnego koloru
    wszystkiePrzyciski.forEach(function(przycisk) {
        przycisk.style.backgroundColor = '';
    });
    
    // Ustaw kolor tylko na tym aktualnie klikniętym
    kliknietyPrzycisk.style.backgroundColor = 'lightgreen';
}

// --- ZADANIE 5-
function przelaczWidocznosc() {
    let element = document.getElementById("ukryty-tekst");
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// --- ZADANIE 6
function dodajDoListy() {
    let input = document.getElementById("lista-input");
    let wartosc = input.value.trim();
    
    if (wartosc !== "") {
        let ul = document.getElementById("moja-lista");
        let li = document.createElement("li");
        li.textContent = wartosc;
        ul.appendChild(li);
        
        input.value = ""; // Czyszczenie inputa
    }
}

// --- ZADANIE 7
function dodajDoTabeli() {
    let imieInput = document.getElementById("imie-input");
    let nazwiskoInput = document.getElementById("nazwisko-input");
    
    if (imieInput.value.trim() !== "" && nazwiskoInput.value.trim() !== "") {
        let tabela = document.getElementById("moja-tabela");
        let wiersz = tabela.insertRow();
        
        let komorka1 = wiersz.insertCell();
        let komorka2 = wiersz.insertCell();
        
        komorka1.textContent = imieInput.value;
        komorka2.textContent = nazwiskoInput.value;
        
        // Czyszczenie pól
        imieInput.value = "";
        nazwiskoInput.value = "";
    }
}

// --- ZADANIE 8
function konwertujNaF() {
    let c = parseFloat(document.getElementById("temp-input").value);
    if (!isNaN(c)) {
        let f = (c * 9/5) + 32;
        document.getElementById("temp-wynik").textContent = f.toFixed(2) + " °F";
    }
}

function konwertujNaC() {
    let f = parseFloat(document.getElementById("temp-input").value);
    if (!isNaN(f)) {
        let c = (f - 32) * 5/9;
        document.getElementById("temp-wynik").textContent = c.toFixed(2) + " °C";
    }
}

// --- ZADANIE 9
function obliczNWD() {
    let a = parseInt(document.getElementById("nwd-a").value);
    let b = parseInt(document.getElementById("nwd-b").value);
    
    if (isNaN(a) || isNaN(b)) {
        document.getElementById("nwd-wynik").textContent = "Proszę podać dwie poprawne liczby.";
        return;
    }
    
    let orygA = a;
    let orygB = b;
    a = Math.abs(a);
    b = Math.abs(b);
    
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    
    document.getElementById("nwd-wynik").textContent = `Największy wspólny dzielnik dla NWD(${orygA}, ${orygB}) = ${a}`;
}

