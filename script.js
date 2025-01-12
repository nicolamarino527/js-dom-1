// Definisco le costanti
const button = document.getElementById("button");

// Aggiungo un evento di click al div con id 'button'
button.addEventListener("click", function() {

    // verifico funzioni
    // console.log("click");

    var foto = document.getElementById('foto'); // Otteniamo l'elemento immagine

    // Verifica se l'URL della foto contiene 'white_lamp.png'
    if (foto.src.includes('white_lamp.png')) {
        foto.src = "img/yellow_lamp.png"; // Cambiamo l'immagine se è la lampada bianca
    } else {
        foto.src = "img/white_lamp.png"; // Torniamo all'immagine della lampada bianca
    }
});