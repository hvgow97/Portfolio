document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("darkModeToggle");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    
    if (document.body.classList.contains("dark")) {
      toggleBtn.textContent = "☀️ Modo Claro";
    } else {
      toggleBtn.textContent = "🌙 Modo Escuro";
    }
  });
});
// Filtro de projetos por tecnologia
const filtros = document.querySelectorAll(".filtro");
const projetos = document.querySelectorAll(".card");

filtros.forEach(btn => {
  btn.addEventListener("click", () => {
    filtros.forEach(b => b.classList.remove("ativo"));
    btn.classList.add("ativo");

    const tecnologia = btn.getAttribute("data-tec");

    projetos.forEach(proj => {
      proj.style.display =
        tecnologia === "todos" || proj.dataset.tec === tecnologia ? "block" : "none";
    });
  });
});
