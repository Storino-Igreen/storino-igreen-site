const WHATSAPP_NUMBER = "5519920134713";

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    menuToggle.textContent = isOpen ? "×" : "☰";
  });
  menu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    menuToggle.textContent = "☰";
  }));
}

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("leadForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const nome = document.getElementById("nome").value.trim();
  const perfil = document.getElementById("perfil").value;
  const cidade = document.getElementById("cidade").value.trim();
  const consumo = document.getElementById("consumo").value || "Prefiro informar depois";
  const consent = document.getElementById("consent").checked;
  const status = document.getElementById("formStatus");

  if (!consent) {
    status.textContent = "Marque a autorização para continuar pelo WhatsApp.";
    return;
  }

  const message = [
    "Olá, Storino! Vim pelo seu site e gostaria de verificar as soluções iGreen para minha conta de energia.",
    "",
    "Nome: " + nome,
    "Perfil: " + perfil,
    "Cidade/UF: " + cidade,
    "Consumo mensal aproximado: " + consumo,
    "",
    "Pode me explicar as condições e os próximos passos?"
  ].join("\n");

  status.textContent = "Abrindo o WhatsApp com sua mensagem...";
  const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank", "noopener,noreferrer");
});
