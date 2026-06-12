

document.addEventListener("DOMContentLoaded", () => {
    
    const cenyBukietow = {
        rozany: { nazwa: "Różowy Różany", cena: 50 },
        lilak: { nazwa: "Biały Lilak", cena: 40 },
        chryzantemy: { nazwa: "Bordowe Chryzantemy", cena: 45 }
    };

    // Wymaganie na 5.0
    let koszyk = []; 

    const btnDodaj = document.getElementById("btnDodajDoKoszyka");
    const koszykLista = document.getElementById("koszykLista");
    const sumaSpan = document.getElementById("sumaCalkowita");
    
    const cbBilecik = document.getElementById("uslugaBilecik");
    const cbDekoracja = document.getElementById("uslugaDekoracja");
    const cbDostawa = document.getElementById("uslugaDostawa");
    const sekcjaDostawy = document.getElementById("sekcjaDostawy");
    const adresDostawyInput = document.getElementById("adresDostawy");

    const form = document.getElementById("orderForm");

    // Wymaganie na 4.0
    const obliczKwote = () => {
        let suma = 0;
        
        koszyk.forEach(item => {
            suma += (item.cena * item.ilosc);
        });

        if (cbBilecik.checked) suma += parseInt(cbBilecik.value);
        if (cbDekoracja.checked) suma += parseInt(cbDekoracja.value);
        if (cbDostawa.checked) suma += parseInt(cbDostawa.value);

        sumaSpan.innerText = suma;
    };

    const renderujKoszyk = () => {
        koszykLista.innerHTML = "";
        
        if (koszyk.length === 0) {
            koszykLista.innerHTML = `<p class="empty-cart-msg">Twój koszyk jest pusty.</p>`;
        } else {
            koszyk.forEach((item, index) => {
                const div = document.createElement("div");
                div.className = "cart-item";
                div.innerHTML = `
                    <span>${item.nazwa} (x${item.ilosc}) - ${item.cena * item.ilosc} zł</span>
                    <button type="button" class="btn-remove" data-index="${index}">Usuń</button>
                `;
                koszykLista.appendChild(div);
            });
        }
        obliczKwote(); 
    };

    btnDodaj.addEventListener("click", () => {
        const typID = document.getElementById("bukietTyp").value;
        const ilosc = parseInt(document.getElementById("bukietIlosc").value);
        const errorSpan = document.getElementById("koszykError");

        if (isNaN(ilosc) || ilosc < 1) {
            errorSpan.innerText = "Podaj poprawną ilość (min. 1).";
            return;
        }
        errorSpan.innerText = "";

        koszyk.push({
            typ: typID,
            nazwa: cenyBukietow[typID].nazwa,
            cena: cenyBukietow[typID].cena,
            ilosc: ilosc
        });

        renderujKoszyk();
    });

    koszykLista.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-remove")) {
            const index = e.target.getAttribute("data-index");
            koszyk.splice(index, 1); 
            renderujKoszyk();
        }
    });

    // Zależne odkrywanie pól dostawy
    cbDostawa.addEventListener("change", (e) => {
        if (e.target.checked) {
            sekcjaDostawy.classList.remove("hidden");
        } else {
            sekcjaDostawy.classList.add("hidden");
            adresDostawyInput.value = ""; 
            wyczyscBlad(adresDostawyInput);
        }
        obliczKwote();
    });

    cbBilecik.addEventListener("change", obliczKwote);
    cbDekoracja.addEventListener("change", obliczKwote);

    // Wymaganie na 3.0
    const oznaczBlad = (input, wiadomosc) => {
        input.classList.add("invalid");
        input.nextElementSibling.innerText = wiadomosc;
    };

    const wyczyscBlad = (input) => {
        input.classList.remove("invalid");
        input.nextElementSibling.innerText = "";
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 
        let isValid = true;

        if (koszyk.length === 0) {
            document.getElementById("koszykError").innerText = "Dodaj co najmniej jeden bukiet do koszyka!";
            isValid = false;
        }

        const textInputs = ["imie", "nazwisko", "telefon"];
        textInputs.forEach(id => {
            const input = document.getElementById(id);
            if (input.value.trim() === "") {
                oznaczBlad(input, "To pole jest wymagane.");
                isValid = false;
            } else {
                wyczyscBlad(input);
            }
        });

        const emailInput = document.getElementById("email");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === "") {
            oznaczBlad(emailInput, "Email jest wymagany.");
            isValid = false;
        } else if (!emailRegex.test(emailInput.value)) {
            oznaczBlad(emailInput, "Podaj prawidłowy format email.");
            isValid = false;
        } else {
            wyczyscBlad(emailInput);
        }

        if (cbDostawa.checked) {
            if (adresDostawyInput.value.trim() === "") {
                oznaczBlad(adresDostawyInput, "Podaj adres dostawy.");
                isValid = false;
            } else {
                wyczyscBlad(adresDostawyInput);
            }
        }

        if (isValid) {
            document.getElementById("sukcesModal").classList.remove("hidden");
        }
    });

    const wszystkiePola = form.querySelectorAll("input[type='text'], input[type='email']");
    wszystkiePola.forEach(pole => {
        pole.addEventListener("input", function() {
            wyczyscBlad(this);
        });
    });
});