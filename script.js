const keys = document.querySelectorAll('.key')

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
}

document.addEventListener("keydown", function(event) {
    var key = event.key.toUpperCase();
    var audio;
    var pianoKey;
    
    switch(key) {
        case 'A':
        audio = document.getElementById("C3");
        break;
      case 'W':
        audio = document.getElementById("Db3");
        break;
      case 'S':
        audio = document.getElementById("D3");
        break;
      case 'E':
        audio = document.getElementById("Eb3");
        break;
      case 'D':
        audio = document.getElementById("E3");
        break;
      case 'F':
        audio = document.getElementById("F3");
        break;
      case 'R':
        audio = document.getElementById("Gb3");
        break;
      case 'G':
        audio = document.getElementById("G3");
        break;
      case 'T':
        audio = document.getElementById("Ab3");
        break;
      case 'H':
        audio = document.getElementById("A3");
        break;
      case 'Y':
        audio = document.getElementById("Bb3");
        break;
      case 'J':
        audio = document.getElementById("B3");
        break;
      case 'K':
        audio = document.getElementById("C4");
        break;
      case 'U':
        audio = document.getElementById("Db4");
        break;
      case 'L':
        audio = document.getElementById("D4");
        break;
      case 'I':
        audio = document.getElementById("Eb4");
        break;
      case 'Ñ':
        audio = document.getElementById("E4");
        break;
      case '4':
        audio = document.getElementById("F4");
        break;
      case 'O':
        audio = document.getElementById("Gb4");
        break;
      case '5':
        audio = document.getElementById("G4");
        break;
      case 'P':
        audio = document.getElementById("Ab4");
        break;
      case '6':
        audio = document.getElementById("A4");
        break;
      case '7':
        audio = document.getElementById("Bb4");
        break;
      case '+':
        audio = document.getElementById("B4");
        break;
      default:
        break;
    }
  
    if (audio) {
        audio.currentTime = 0;
        audio.play();
  
        // Obtener la tecla del piano asociada al audio
        pianoKey = document.querySelector(`[data-note="${audio.id}"]`);
        if (pianoKey) {
            // Agregar clase para indicar que la tecla está pulsada
            pianoKey.classList.add('pressed');
            // Eliminar la clase después de un breve retraso
            setTimeout(function() {
                pianoKey.classList.remove('pressed');
            }, 100); // ajusta el tiempo según lo que consideres adecuado
        }
    }
});

const toggleButton = document.getElementById('toggleButton');
    const spansToToggle = document.querySelectorAll('.key span');

    // Variable para rastrear el estado de visibilidad
    let isVisible = true;

    // Agregar evento de clic al botón
    toggleButton.addEventListener('click', function() {
        // Alternar visibilidad de los elementos span
        spansToToggle.forEach(function(span) {
            if (isVisible) {
                // Si son visibles, ocultarlos
                span.style.display = 'none';
            } else {
                // Si están ocultos, mostrarlos
                span.style.display = 'inline'; // Cambia 'inline' según el tipo de display que uses
            }
        });

        // Cambiar el estado de visibilidad
        isVisible = !isVisible;
    });