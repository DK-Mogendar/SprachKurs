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