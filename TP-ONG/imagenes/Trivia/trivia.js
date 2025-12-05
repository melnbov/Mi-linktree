
// Trivia cultura
// Respuestas correctas de cada categoría
const respuestasCorrectas = {
    cultura: ['q1b','q2a','q3a','q4c','q5a'],
    juegos: ['j1a','j2a','j3b','j4b','j5a'],
    cine: ['c1a','c2b','c3b','c4c','c5a'],
    tecnologia: ['t1a','t2b','t3a','t4c','t5b'],
    generaciones: ['g1b','g2c','g3a','g4b','g5c'],
    extras: ['e1b','e2b','e3a','e4b','e5b'],
    argentina:['a1b','a2b','a3c','a4b','a5b']
};

// Botón para enviar respuestas
document.getElementById('btnEnviar').addEventListener('click', function() {

    // Obtener la categoría automáticamente desde el HTML
    const categoriaID = document.getElementById('trivia').dataset.categoria;

    // Obtener respuestas correctas correspondientes
    const respuestas = respuestasCorrectas[categoriaID];

    if (!respuestas) {
        console.error("No se encontraron respuestas para esta categoría: " + categoriaID);
        return;
    }

    // Contar correctas
    let correctas = 0;
    respuestas.forEach(id => {
        const opcion = document.getElementById(id);
        if (opcion && opcion.checked) correctas++;
    });

    // Calcular porcentaje
    const porcentaje = Math.round((correctas / respuestas.length) * 100);
    document.getElementById('porcentaje').innerText = porcentaje + '%';

    // Leer progreso anterior
    let progresoGuardado = localStorage.getItem("progreso_" + categoriaID);
    progresoGuardado = progresoGuardado ? parseInt(progresoGuardado) : 0;

    // Guardar solo si es mayor
    if (porcentaje > progresoGuardado) {
        localStorage.setItem("progreso_" + categoriaID, porcentaje);

        if (porcentaje === 100) {
            localStorage.setItem("completa_" + categoriaID, "true");
        }
    }

    // Mostrar modal
    const resultadoModal = new bootstrap.Modal(document.getElementById('resultadoModal'));
    resultadoModal.show();
});

//modo
function toggleTheme() {
    const cont = document.getElementById("theme-container");
    const icon = document.getElementById("toggle-icon");

    if (cont.classList.contains("light")) {
        cont.classList.remove("light");
        cont.classList.add("dark");
        icon.src = "../imagenes-index/luna.png";
    } else {
        cont.classList.remove("dark");
        cont.classList.add("light");
        icon.src = "../imagenes-index/sol.png";
    }
}