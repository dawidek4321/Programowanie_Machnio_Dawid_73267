// --- ZADANIE 2 ---
function zadanie2() {
    let a = 10, b = 20, c = 23.2; 
    
    let dodawanie = a + b + c;
    let odejmowanie = a - b - c;
    let mnozenie = a * b * c;
    let dzielenie = a / b / c;

    let wynikStr = `Dodawanie: ${dodawanie}, Odejmowanie: ${odejmowanie}, Mnożenie: ${mnozenie}, Dzielenie: ${dzielenie}`;

    // a) w konsoli
    console.log("Wyniki Zadanie 2:", wynikStr);
    
    // b) w wyskakującym oknie
    alert("Wyniki Zadanie 2:\n" + wynikStr);
    
    // c) w utworzonym paragrafie HTML
    document.getElementById("zad2-wynik").innerHTML = wynikStr;
}

// --- ZADANIE 3 ---
function zadanie3() {
    let htmlWynik = "";
    let alertWyniki = [];

    for (let i = 0; i <= 100; i++) {
        // a) parzyste w konsoli
        if (i % 2 === 0) {
            console.log("Zad 3 - Parzysta:", i);
        }
        // b) co piąta liczba w HTML
        if (i % 5 === 0) {
            htmlWynik += i + ", ";
        }
        // c) podzielne przez 13 do okna
        if (i % 13 === 0) {
            alertWyniki.push(i);
        }
    }
    
    document.getElementById("zad3-wynik").innerHTML = htmlWynik;
    alert("Liczby podzielne przez 13 (Zad 3c):\n" + alertWyniki.join(", "));
}

// --- ZADANIE 4 ---
function zadanie4(a, b, c) {
    let p = (a + b + c) / 2; 
    let pole = Math.sqrt(p * (p - a) * (p - b) * (p - c)); 
    console.log(`Pole trójkąta o bokach ${a}, ${b}, ${c} wynosi: ${pole}`);
}

// --- ZADANIE 5 ---
function zadanie5() {
    let imie = window.prompt("Podaj swoje imię:"); 
    if (imie) {
        alert("Witaj, " + imie + "!");
    }
}

// --- ZADANIE 6 ---
function zadanie6() {
    let l1 = parseInt(window.prompt("Podaj pierwszą liczbę całkowitą:")); 
    let l2 = parseInt(window.prompt("Podaj drugą liczbę całkowitą:"));
    
    if (!isNaN(l1) && !isNaN(l2)) {
        let suma = l1 + l2;
        document.write(`<h1>Zadanie 6</h1><p>Wynik działania: ${l1} + ${l2} = ${suma}</p>`);
    } else {
        alert("Wprowadzono niepoprawne dane!");
    }
}

// --- ZADANIE 7 ---
function zadanie7() {
    let num1 = parseFloat(window.prompt("Podaj 1. liczbę (zmiennoprzecinkową):")); 
    let num2 = parseFloat(window.prompt("Podaj 2. liczbę:"));
    let num3 = parseFloat(window.prompt("Podaj 3. liczbę:"));

    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        let najwieksza = Math.max(num1, num2, num3);
        console.log("Zadanie 7 - Największa liczba to:", najwieksza);
    } else {
        console.log("Błąd: Nie wszystkie wartości są liczbami.");
    }
}

// --- ZADANIE 8 ---
function zadanie8() {
    let a = parseInt(window.prompt("Podaj pierwszą liczbę do NWD:"));
    let b = parseInt(window.prompt("Podaj drugą liczbę do NWD:"));

    if (isNaN(a) || isNaN(b)) {
        console.log("Podano błędne dane.");
        return;
    }

    let obA = Math.abs(a);
    let obB = Math.abs(b);

    // Algorytm Euklidesa
    while (obB !== 0) {
        let temp = obB;
        obB = obA % obB;
        obA = temp;
    }
    console.log(`Zadanie 8 - NWD dla liczb ${a} i ${b} wynosi: ${obA}`);
}

// --- ZADANIE 9 ---
function zadanie9() {
    let wylosowana = Math.floor(Math.random() * 101); 
    let zgadnieta = false;
    let proby = 0;

    while (!zgadnieta) {
        let str = window.prompt("Zgadnij liczbę (0-100) lub kliknij Anuluj:");
        if (str === null) break; 
        
        let podana = parseInt(str);
        proby++;

        if (podana > wylosowana) {
            console.log("Twoja liczba jest za duża!");
        } else if (podana < wylosowana) {
            console.log("Twoja liczba jest za mała!");
        } else if (podana === wylosowana) {
            alert(`Gratulacje! Odgadłeś liczbę ${wylosowana} w ${proby} próbach!`);
            zgadnieta = true;
        } else {
            console.log("To nie jest poprawna liczba.");
        }
    }
}

// --- ZADANIE 10 (Zegar) ---
function uruchomZegar() {
    let teraz = new Date(); 
    document.getElementById("zegar-wynik").innerHTML = teraz.toLocaleTimeString();
    
    // Odświeżanie co 1000 milisekund
    setTimeout(uruchomZegar, 1000); 
}

uruchomZegar(); 


// --- ZADANIE 11 (Rozbudowa zadania 9 o HTML) ---
let wylosowana11 = Math.floor(Math.random() * 101);
let proby11 = 0;

function sprawdzZadanie11() {
    let input = document.getElementById("zad11-input").value; 
    let podana = parseInt(input);
    let komunikat = document.getElementById("zad11-komunikat");

    if (isNaN(podana)) {
        komunikat.innerHTML = "Wprowadź poprawną liczbę.";
        return;
    }

    proby11++;

    if (podana > wylosowana11) {
        komunikat.innerHTML = "Podana liczba jest za duża.";
    } else if (podana < wylosowana11) {
        komunikat.innerHTML = "Podana liczba jest za mała.";
    } else {
        alert(`Gratulacje! Zgadłeś w ${proby11} próbach. Strona zostanie teraz przeładowana.`);
        location.reload(); 
    }
}