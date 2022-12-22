/*
    https://www.w3schools.com/jsref/prop_win_localstorage.asp
    https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
*/

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
    let firstName = getLocalStorage("fname");
    let lastName = getLocalStorage("lname");
    let strasse = getLocalStorage("strasse");
    let ort = getLocalStorage("ort");
    let plz = getLocalStorage("plz");
    let mail = getLocalStorage("mail");
    let age = getLocalStorage("alter");
    //alert(`firstName = ${firstName}`);
        /*
            Die Beschriftungen und Platzhalter für die obigen Variablen werden in ein 
            String Template eingetragen. Zur Gliederung und Gestaltung werden zudem 
            <p> und <span> Elemente verwendet.
        */
    let confirmation = 
        `<p><span class="confirmation.label">Vornane:</span> ${firstName}</p>
        <p><span class="confirmation.label">Nachname:</span> ${lastName}</p>
        <p><span class="confirmation.label">Strasse:</span> ${strasse}</p>
        <p><span class="confirmation.label">Ort:</span> ${ort}</p>
        <p><span class="confirmation.label">Postleizahl:</span> ${plz}</p>
        <p><span class="confirmation.label">Postleizahl:</span> ${mail}</p>
        <p><span class="confirmation.label">Alter:</span> ${age}</p>`;      
          
    // Die Bestätingung wird als innertHTML gesetzt

    document.getElementById("confirmation-message").innerHTML = confirmation;

}

//-----------------------------------radio Buttons-----------------------------------------------------------------------------------------------------------------

function validateRadio() {
    console.log("validateRadio");                                 //funktion mit der Klasse validateRadio defiert:
    //wenn zb.validateHtml nicht vorhanden ist gib zurück falsch++++
    let radioElementJa = document.getElementById('Ja');      //Das Inputelement=document.mit der element ID = Html
    let radioElementNein = document.getElementById('Nein');        //Das Inputelement=document.mit der element ID = Css
    let radioElementNaja = document.getElementById('Naja');  //Das Inputelement=document.mit der element ID = JavaScript


    


    if (!radioElementJa.checked&&!radioElementNein.checked&&!radioElementNaja.checked) { //ist kein radioElementHtml (ect.) vorhanden dann:
        // Fehlerfall
        setMessage8('Bitte wähle eine Antwort aus');         // Giebt eine Nachricht aus Text ...
        return false;                                                                // ist falsch

    }
    else {                                                                           //oder
        // Erfolgsfall
        let radioButtons = document.getElementsByName("radio-mood");
        let value;

        for (let i = 0; i < radioButtons.length; ++i) {  //Wenn b gleich Null; b kleiner als anzahl in der Legende(im array) dann gieb mehr aus
            let button = radioButtons[i];               //Der Butten entspricht dem radioButton mit devinition [b]

            if (button.checked) {                       //ist der Butten geprüft
                value = button.value;
                break;                                  //mach einen Umbruch
            }
        }
        localStorage.setItem("Naja", value);
        setMessage8('Du hast "' + value + '" gewählt'); //sede die nachricht Text+value+Text
        return true;                                    // mandatory, zwingend sonst wird Formular nicht abgeschickt.
    }
}

function setMessage8(value) {
    document.getElementById("message-8").innerText = value;
}



