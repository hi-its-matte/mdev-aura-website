document.addEventListener("DOMContentLoaded", () => {
  // --------------------
  // LINK WHATSAPP
  // --------------------
  const joinBtn = document.getElementById("join-btn");

  if (joinBtn) {
    const { f, g, a, b, c, d, e } = joinBtn.dataset;
    const whatsappLink = `${f}${g}${a}${b}${c}${d}${e}`;

    joinBtn.href = whatsappLink;
    joinBtn.target = "_blank"; // apre in nuova scheda
    joinBtn.rel = "noopener noreferrer"; // sicurezza
  }
});