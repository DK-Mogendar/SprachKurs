// Funktion: Schlüssel und Wert in LocalStorage setzen.
function setLocalStorage(key ,value) { 
    localStorage.setItem(key, value); 
}


// Funktion: Wert zum Schlüssel aus LocalStorage auslesen.
function getLocalStorage(key) {
    return localStorage.getItem(key);
}
// Funktion: Bestätigung generieren
function writeConfirmation(){


        // Die Personalien werden in Variablen ausgelesen.
    let Naja = getLocalStorage("Naja");
   
        /*
            Die Beschriftungen und Platzhalter für die obigen Variablen werden in ein 
            String Template eingetragen. Zur Gliederung und Gestaltung werden zudem 
            <p> und <span> Elemente verwendet.
        */
    let confirmation = 
        `<p><span class="confirmation.label">Danke für deine Antwort:</span> ${Naja}</p>`;      
          
    // Die Bestätingung wird als innertHTML gesetzt

    document.getElementById("confirmation-message").innerHTML = confirmation;

}

