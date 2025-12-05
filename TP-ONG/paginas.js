
//BURBUJAS pagina de sobre nosotros 
document.querySelectorAll(".flip-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});


// FILTROS pagina de programas en general
const filtros = document.querySelectorAll(".filtro");
const proyectos = document.querySelectorAll(".proyecto-card");

filtros.forEach(btn => {
  btn.addEventListener("click", () => {
    filtros.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    let cat = btn.dataset.cat;

    proyectos.forEach(card => {
      if (cat === "todos" || card.dataset.cat === cat) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".my-carousel-track");
    const items = Array.from(document.querySelectorAll(".my-carousel-item"));
    const itemWidth = items[0].offsetWidth;
    const totalItems = items.length;

    let currentIndex = 0;

    function moveSlide(direction) {
        currentIndex += direction;

        // BUCLE INFINITO
        if (currentIndex < 0) {
            currentIndex = totalItems - 2; // Último par visible
        } else if (currentIndex > totalItems - 2) {
            currentIndex = 0; // Volver al inicio
        }

        const translateX = -(currentIndex * itemWidth);
        track.style.transform = `translateX(${translateX}px)`;
    }

    window.moveSlide = moveSlide;

    moveSlide(0);
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



//boton de modos
function toggleTheme() {
  const container = document.getElementById("theme-container");
  const icon = document.getElementById("toggle-icon");

  if (container.classList.contains("light")) {
    container.classList.remove("light");
    container.classList.add("dark");
    icon.src = "imagenes/luna.png";
  } else {
    container.classList.remove("dark");
    container.classList.add("light");
    icon.src = "imagenes/sol.png";
  }
}
