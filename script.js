"use strict"
const pubEl = document.getElementById("pub")
if (pubEl) {
  pubEl?.addEventListener("click", () => pubEl.remove())
}
