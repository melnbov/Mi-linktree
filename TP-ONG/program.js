// --------------------- CALCULAR DONACIÓN ---------------------
const montoBase = document.getElementById("montoBase");
const tipoDonacion = document.getElementById("tipoDonacion");
const totalDonar = document.getElementById("totalDonar");

function calcularTotal() {
    let base = parseFloat(montoBase.value) || 0;
    let multiplicador = parseFloat(tipoDonacion.value);
    let total = base * multiplicador;
    totalDonar.textContent = "$" + total.toFixed(2);
}

montoBase.addEventListener("input", calcularTotal);
tipoDonacion.addEventListener("change", calcularTotal);

// --------------------- ENVÍO FORMULARIO DONACIÓN ---------------------
document.getElementById("btnEnviarDonacion").addEventListener("click", function(event) {
    event.preventDefault();

    // llenar formulario oculto
    document.getElementById("mailMontoBase").value = montoBase.value;
    document.getElementById("mailTipoDonacion").value = tipoDonacion.value;
    document.getElementById("mailTotal").value = totalDonar.textContent.replace("$", "");

    const form = document.getElementById("formEnviarMail");

    fetch(form.action, {
        method: "POST",
        body: new FormData(form)
    })
    .then(() => {
        // cerrar modal de donación
        const modalEl = document.getElementById('donarModal');
        bootstrap.Modal.getInstance(modalEl).hide();

        // mostrar modal de confirmación
        const confirmModal = new bootstrap.Modal(document.getElementById('confirmacionModal'));
        confirmModal.show();
    })
    .catch(err => {
        alert("Error al enviar el formulario. Revisa la consola.");
        console.error(err);
    });
});

// --------------------- ENVÍO FORMULARIO VOLUNTARIADO ---------------------
document.getElementById("btnEnviarVoluntario").addEventListener("click", function(event) {
    event.preventDefault();

    // llenar formulario oculto
    document.getElementById("mailVolNombre").value = document.getElementById("volNombre").value;
    document.getElementById("mailVolEmail").value = document.getElementById("volEmail").value;
    document.getElementById("mailVolTelefono").value = document.getElementById("volTelefono").value;
    document.getElementById("mailVolDisponibilidad").value = document.getElementById("volDisponibilidad").value;
    document.getElementById("mailVolMotivo").value = document.getElementById("volMotivo").value;

    const form = document.getElementById("formVoluntarioMail");

    fetch(form.action, {
        method: "POST",
        body: new FormData(form)
    })
    .then(() => {
        // cerrar modal de voluntariado
        const modalEl = document.getElementById('voluntarioModal');
        bootstrap.Modal.getInstance(modalEl).hide();

        // mostrar modal de confirmación
        const confirmModal = new bootstrap.Modal(document.getElementById('confirmacionModal'));
        confirmModal.show();
    })
    .catch(err => {
        alert("Error al enviar el formulario. Revisa la consola.");
        console.error(err);
    });
});

// --------------------- BOTÓN VOLVER AL INICIO ---------------------
document.getElementById("volverIndex").addEventListener("click", function() {
    window.location.href = "index.html";
});

// --------------------- CAMBIO DE TEMA ---------------------
function toggleTheme() {
    const container = document.getElementById("theme-container");
    const icon = document.getElementById("toggle-icon");

    if (container.classList.contains("light")) {
        container.classList.remove("light");
        container.classList.add("dark");
        icon.src = "imagenes-index/luna.png";
    } else {
        container.classList.remove("dark");
        container.classList.add("light");
        icon.src = "imagenes-index/sol.png";
    }
}







