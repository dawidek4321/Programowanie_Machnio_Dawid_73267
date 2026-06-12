
// Zadanie 2a
const czyMaWartosc = (wartosc) => wartosc.trim() !== "";

// Zadanie 2b
const czyPoprawnaDlugosc = (wartosc, min) => wartosc.trim().length >= min;

// Zadanie 2c
const czyPoprawnyEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Zadanie 2d
const czyTrudneHaslo = (haslo) => haslo.length >= 8;

// Zadanie 4
const czyPelnoletni = (dataUrodzenia) => {
    if (!dataUrodzenia) return false;
    let dzisiaj = new Date();
    let urodziny = new Date(dataUrodzenia);
    let wiek = dzisiaj.getFullYear() - urodziny.getFullYear();
    let miesiac = dzisiaj.getMonth() - urodziny.getMonth();
    if (miesiac < 0 || (miesiac === 0 && dzisiaj.getDate() < urodziny.getDate())) {
        wiek--;
    }
    return wiek >= 18;
};

// Pobranie elementów HTML
const formularz = document.getElementById("formularz");
const telefonInput = document.getElementById("telefon");
const krajSelect = document.getElementById("kraj");
const blokWojewodztwo = document.getElementById("blokWojewodztwo");
const miejsceNaWojewodztwo = document.getElementById("miejsceNaWojewodztwo");
const adresZam = document.getElementById("adresZam");
const adresKor = document.getElementById("adresKor");
const takiSamAdresCheckbox = document.getElementById("takiSamAdres");
const blokAdresKor = document.getElementById("blokAdresKor");

// Zadanie 8
telefonInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
});

// Zadanie 6 i 7
krajSelect.addEventListener("change", () => {
    let wybranyKraj = krajSelect.value;
    
    if (wybranyKraj !== "") {
        blokWojewodztwo.classList.remove("ukryte");
        
        // Zadanie 7
        if (wybranyKraj === "Polska") {
            miejsceNaWojewodztwo.innerHTML = `
                <select id="wojewodztwo" required>
                    <option value="">Wybierz...</option>
                    <option value="podkarpackie">Podkarpackie</option>
                    <option value="malopolskie">Małopolskie</option>
                    <option value="mazowieckie">Mazowieckie</option>
                </select>
            `;
        } else {
            miejsceNaWojewodztwo.innerHTML = `<input type="text" id="wojewodztwo" required>`;
        }
        
        // Zadanie 6c
        let wojInput = document.getElementById("wojewodztwo");
        wojInput.addEventListener("input", odblokujAdresy);
        wojInput.addEventListener("change", odblokujAdresy);
        
        // Podpięcie walidacji pod nowe pole
        wojInput.addEventListener("input", () => walidujPole(wojInput));
        wojInput.addEventListener("change", () => walidujPole(wojInput));
        
    } else {
        blokWojewodztwo.classList.add("ukryte");
        miejsceNaWojewodztwo.innerHTML = "";
        adresZam.disabled = true;
        adresKor.disabled = true;
    }
});

// Zadanie 6c
const odblokujAdresy = () => {
    let wojInput = document.getElementById("wojewodztwo");
    if (wojInput && czyMaWartosc(wojInput.value)) {
        adresZam.disabled = false;
        adresKor.disabled = false;
    } else {
        adresZam.disabled = true;
        adresKor.disabled = true;
    }
};

// Zadanie 6a
takiSamAdresCheckbox.addEventListener("change", () => {
    if (takiSamAdresCheckbox.checked) {
        blokAdresKor.classList.add("ukryte");
        adresKor.value = ""; // czyszczenie wartości
    } else {
        blokAdresKor.classList.remove("ukryte");
    }
});

const walidujPole = (pole) => {
    if (pole.disabled || pole.closest('.ukryte')) {
        pole.setCustomValidity("");
        if(pole.nextElementSibling) pole.nextElementSibling.innerText = "";
        return true;
    }

    let blad = "";
    let wartosc = pole.value;
    let id = pole.id;

    if (pole.required && !czyMaWartosc(wartosc)) {
        blad = "To pole jest wymagane.";
    } else if (czyMaWartosc(wartosc)) {
        if (id === "email" && !czyPoprawnyEmail(wartosc)) {
            blad = "Niepoprawny adres email.";
        } else if (id === "haslo" && !czyTrudneHaslo(wartosc)) {
            blad = "Hasło musi posiadać co najmniej 8 znaków.";
        } else if (id === "powtorzHaslo") { // Zadanie 5
            let haslo = document.getElementById("haslo").value;
            if (wartosc !== haslo) blad = "Hasła nie są identyczne.";
        } else if (id === "dataUrodzenia" && !czyPelnoletni(wartosc)) { // Zadanie 4
            blad = "Osoba wypełniająca musi być pełnoletnia.";
        } else if (id === "telefon" && !czyPoprawnaDlugosc(wartosc, 9)) {
            blad = "Numer telefonu musi zawierać min. 9 cyfr.";
        }
    }

    // Zadanie 2h
    pole.setCustomValidity(blad);
    
    // Zadanie 3: Wiadomość walidacji pojawia się pod polem
    let errorSpan = pole.nextElementSibling;
    if (errorSpan && errorSpan.classList.contains("error")) {
        errorSpan.innerText = blad;
    }

    return blad === "";
};

// Zadanie 2f
document.querySelectorAll("input, select").forEach(pole => {
    if (pole.type !== "checkbox") {
        pole.addEventListener("input", () => walidujPole(pole));
        pole.addEventListener("change", () => walidujPole(pole));
    }
});

// Zadanie 2f
formularz.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let isFormValid = true;
    let pola = formularz.querySelectorAll("input, select");
    
    pola.forEach(pole => {
        if (pole.type !== "checkbox" && !walidujPole(pole)) {
            isFormValid = false;
        }
    });

    if (isFormValid) {
        // Zadanie 2g
        alert("Formularz został poprawnie wypełniony!");
    } else {
        alert("Proszę poprawić błędy w formularzu.");
    }
});