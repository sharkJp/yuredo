 const modal = document.getElementById("miModalMenu");
    const abrir = document.getElementById("abrirMenu");
    const cerrar = document.getElementById("cerrarMenu");

    abrir.addEventListener("click", () => {
      modal.style.display = "flex"; // ocupa todo
    });

    cerrar.addEventListener("click", () => {
      modal.style.display = "none"; // cerrar
    });

    // Cerrar al hacer click fuera del contenido
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });