import { applyStyle } from "./applyStyle.js";

export function startObserver() {
  const observer = new MutationObserver(() => {
    applyStyle();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}