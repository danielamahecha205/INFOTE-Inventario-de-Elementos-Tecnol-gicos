// Datos simulados del inventario
const equipos = [
  { id: 1, nombre: "Laptop Dell Inspiron", categoria: "computador", imagen: "assets/img/laptop.jpg" },
  { id: 2, nombre: "Impresora HP LaserJet", categoria: "impresora", imagen: "assets/img/impresora.jpg" },
  { id: 3, nombre: "Monitor Samsung 24\"", categoria: "monitor", imagen: "assets/img/monitor.jpg" }
];

// Mostrar inventario general
function mostrarGaleria(filtro = "todos") {
  const galeria = document.getElementById("galeria");
  if (!galeria) return;

  galeria.innerHTML = "";
  const filtrados = filtro === "todos" ? equipos : equipos.filter(eq => eq.categoria === filtro);

  filtrados.forEach(eq => {
    galeria.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm">
          <img src="${eq.imagen}" class="card-img-top" alt="${eq.nombre}">
          <div class="card-body text-center">
            <h5>${eq.nombre}</h5>
            <p class="text-muted">${eq.categoria}</p>
            <a href="detalle.html" class="btn btn-success">Ver detalle</a>
          </div>
        </div>
      </div>`;
  });
}

function filtrarPorCategoria() {
  const categoria = document.getElementById("categoria").value;
  mostrarGaleria(categoria);
}

// Validar formulario de contacto
function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || correo === "" || mensaje === "") {
    alert("Por favor, completa todos los campos del formulario.");
    return false;
  }

  alert("Mensaje enviado correctamente. ¡Gracias por contactarnos!");
  return true;
}

// Ejecutar galería automáticamente si existe
document.addEventListener("DOMContentLoaded", () => mostrarGaleria());
