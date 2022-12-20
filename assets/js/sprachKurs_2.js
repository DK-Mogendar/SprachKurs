
function validateForm() { //funktion mit der Klasse validateFrom defiert:
    //wenn zb.validateVorname nicht vorhanden ist gib zurück falsch
    //Sagt:
    if (!validateVorname()) return false;     //wenn kein valideVorname dan gieb zurück Falsch
    if (!validateNachname()) return false;    // ""
    if (!validateStrasse()) return false;     // ""
    if (!validateOrt()) return false;         // ""
    if (!validatePostleizahl()) return false; // ""
    if (!validateMail()) return false;        // ""
    if (!validateAlter()) return false;
    if (!validateRadio()) return false;        // ""
    alert('allses OK');                      //alert stopt saget wenn alles bis zu diesem Punkt OK ist
    return true;                             //es ist Wahr
}

function validateVorname() {                            //funktion mit der Klasse validateVormane defiert:
    let inputElement = document.getElementById("fname");//Das Inputelement=document.mit der element ID = fname
    let value = inputElement.value;                     //Das value = dem Inputelement namens value

    if (!value) {                                   //wenn kein value
        // Beispiel: '', null, undefined
        setMessage1('Bitte den Vornamen eingeben.');//dann gieb text aus
        return false;                               //es ist falsch
    }
    else { 
        setLocalStorage("fname", value);                                         //oder es ist Richtig
        setMessage1(value);                         //dann sende die Nachricht 1.
        return true;                                //es ist Wahr
    }
}

function validateNachname() {                           //funktion mit der Klasse validateNachname defiert:
    let inputElement = document.getElementById("lname");//Das Inputelement=document.mit der element ID = lname
    let value = inputElement.value;                     //Das value = dem Inputelement namens value
    if (!value) {                                       //wenn kein value
        // Bsp. '', null, undefined
        setMessage2('Bitte den Nachnamen eingeben.');   //dann gieb text aus
        return false;                                   //es ist falsch
    }
    else {   
        setLocalStorage("lname", value);                                            //oder es ist Richtig
        setMessage2(value);                              //dann sende die Nachricht 2.
        return true;                                     //es ist Wahr
    }
}

function validateStrasse() {                            //funktion mit der Klasse validateStrasse defiert:
    let inputElement = document.getElementById("strasse");//Das Inputelement=document.mit der element ID = strasse
    let value = inputElement.value;                     //Das value = dem Inputelement namens value
    if (!value) {                                       //wenn kein value
        // Bsp. '', null, undefined
        setMessage3('Bitte die Strasse eingeben.');     //dann gieb text aus
        return false;                                   //es ist falsch
    }
    else { 
        setLocalStorage("strasse", value);                                              //oder es ist Richtig
        setMessage3(value);                              //dann sende die Nachricht 3.
        return true;                                     //es ist Wahr
    }
}

function validateOrt() {                                //funktion mit der Klasse validateOrtdefiert:
    let inputElement = document.getElementById("ort");  //Das Inputelement=document.mit der element ID = ort
    let value = inputElement.value;                     //Das value = dem Inputelement namens value
    if (!value) {                                       //wenn kein value
        // Bsp. '', null, undefined
        setMessage4('Bitte die Ortsangabe eingeben.');  //dann gieb text aus
        return false;                                   //es ist falsch
    }
    else {  
        setLocalStorage("ort", value);                                             //oder es ist Richtig
        setMessage4(value);                              //dann sende die Nachricht 3.
        return true;                                     //es ist Wahr
    }
}

function validatePostleizahl() {                                //funktion mit der Klasse validateOrtdefiert:
    let inputElement = document.getElementById("plz");  //Das Inputelement=document.mit der element ID = plz
    let value = inputElement.value;                     //Das value = dem Inputelement namens value
    if (!value) {                                       //wenn kein value
        // Bsp. '', null, undefined
        setMessage5('Bitte die Postleizeahl eingeben.');//dann gieb text aus
        return false;                                   //es ist falsch
    }
    else {    
        setLocalStorage("plz", value);                                           //oder es ist Richtig
        setMessage5(value);                              //dann sende die Nachricht 3.
        return true;                                     //es ist Wahr
    }
}

function validateMail() {
    let inputElement = document.getElementById("mail");
    let value = inputElement.value;

    if (!value) {
        // Bsp. '', null, undefined
        setMessage6('Bitte deien E-Mail ein.');
        return false;
    }
    // Ab hier enthält value einen nicht leeren String.
    // indexOf() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf?retiredLocale=de
    else if (value.indexOf('@') === -1) {
        // value enthält KEIN '@' Symbol.
        setMessage6('nicht verfizierte E-Mail');
        return false;
    }
    else {
        setLocalStorage("mail", value);
        setMessage6(value);
        return true;
    }
}

function validateAlter() {                               //funktion mit der Klasse validateAlter defiert:
    let inputElement = document.getElementById("alter");;  //Das Inputelement=document.mit der element ID = age
    let value = inputElement.value;                      //Das value = dem Inputelement namens value

    if (!value) {                                        //wenn kein value
        // Bsp. '', null, undefined
        setMessage7('Bitte das Alter eingeben.');        //dann gieb text aus
        return false;                                    //es ist falsch
    }
    else if (value < 18 || value > 99) {                 // sit nicht (18 <= n <= 99)
        // Entweder ist die Zahl kleiner Null oder grösser 10.
        setMessage7('Du bist noch keine 18 Jahr alt oder bist älter als 100. Sorry.'); //dann sende die Nachricht 3.
        // wenn kein retur-wert steht, dann giebt die Funktion undefined zurück.
        return false;                                    //es ist falsch
    }
    else {  
        setLocalStorage("alter", value);                                             //oder es ist Richtig
        setMessage7(value);                              //dann sende die Nachricht 3.
        return true;                                     //es ist Wahr
    }
}


// Dies sind Funketionen die die Message-1 bis 8 ausgeben
function setMessage1(value) {
    document.getElementById("message-1").innerText = value;
}

function setMessage2(value) {
    document.getElementById("message-2").innerText = value;
}

function setMessage3(value) {
    document.getElementById("message-3").innerText = value;
}

function setMessage4(value) {
    document.getElementById("message-4").innerText = value;
}

function setMessage5(value) {
    document.getElementById("message-5").innerText = value;
}

function setMessage6(value) {
    document.getElementById("message-6").innerText = value;
}
function setMessage7(value) {
    document.getElementById("message-7").innerText = value;
}

function validateAnswers() {

    // knock-out pattern: Mit false wird das Formular nicht abgeschickt.
    if (!validateRadio()) return false;
    //if (!validateCheckboxes()) return false;

    alert('Danke für Ihre Antwort, alles richtig! ');

    return true;
}
RadioButtons
function validateRadio() {
    console.log("validateRadio");                                 //funktion mit der Klasse validateRadio defiert:
    //wenn zb.validateHtml nicht vorhanden ist gib zurück falsch++++
    let radioElementHtml = document.getElementById('Html');      //Das Inputelement=document.mit der element ID = Html
    let radioElementCss = document.getElementById('Css');        //Das Inputelement=document.mit der element ID = Css
    let radioElementJs = document.getElementById('JavaScript');  //Das Inputelement=document.mit der element ID = JavaScript


    


    if (!(radioElementHtml.checked||radioElementCss.checked||radioElementJs.checked)) { //ist kein radioElementHtml (ect.) vorhanden dann:
        // Fehlerfall
        setMessage8('Bitte wähle eine zusäzliche Programmiersprache aus. Dankeschön.');         // Giebt eine Nachricht aus Text ...
        return false;                                                                // ist falsch

    }
    else {                                                                           //oder
        // Erfolgsfall
        let radioButtons = document.getElementsByName("radio-mood");
        let value;

        for (let b = 0; b < radioButtons.length; ++b) {  //Wenn b gleich Null; b kleiner als anzahl in der Legende(im array) dann gieb mehr aus
            let button = radioButtons[b];               //Der Butten entspricht dem radioButton mit devinition [b]

            if (button.checked) {                       //ist der Butten geprüft
                value = button.value;
                break;                                  //mach einen Umbruch
            }
        }
        setMessage8('Du hast "' + value + '" gewählt'); //sede die nachricht Text+value+Text
        return true;                                    // mandatory, zwingend sonst wird Formular nicht abgeschickt.
    }
}

function setMessage8(value) {
    document.getElementById("message-8").innerText = value;
}