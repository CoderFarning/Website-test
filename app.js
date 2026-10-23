const startView = document.querySelector("#start-view");
const downloadView = document.querySelector("#download-view");
const status = document.querySelector("#download-status");

document.querySelector("#show-downloads").addEventListener("click", () => {
  startView.hidden = true;
  downloadView.hidden = false;
});

document.querySelector('[data-download="macOS"]').addEventListener("click", () => {
  status.textContent = "Der macOS-Download startet. Die Startseite erscheint gleich wieder.";
  window.setTimeout(showStartPage, 3500);
});

document.querySelectorAll(".unavailable").forEach((button) => {
  button.addEventListener("click", () => {
    status.textContent = `${button.dataset.platform}-Version: noch nicht verfuegbar.`;
    window.setTimeout(showStartPage, 2500);
  });
});

function showStartPage() {
  downloadView.hidden = true;
  startView.hidden = false;
  status.textContent = "Waehle eine Plattform aus.";
}
