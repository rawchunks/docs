/**
 * RAWCHUNKS Mintlify Dynamic Script Engine
 * Ensures persistent CRT overlays and cyberpunk effects across Mintlify client navigation.
 */
(() => {
  if (window.__rawchunksInitialized) return;
  window.__rawchunksInitialized = true;

  const injectScanlines = () => {
    if (!document.querySelector(".scanlines")) {
      const scanlines = document.createElement("div");
      scanlines.className = "scanlines";
      scanlines.setAttribute("aria-hidden", "true");
      document.body.appendChild(scanlines);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectScanlines);
  } else {
    injectScanlines();
  }

  window.addEventListener("mintlify:navigate", injectScanlines);
})();
