export function wrapInteractElement(element: HTMLElement) {
  const wrapper = document.createElement("div");
  wrapper.style.display = getComputedStyle(element).display;
  wrapper.classList.add("cc-wrapper");
  element.before(wrapper);
  wrapper.appendChild(element);
}

export function styleInteractElement(element: HTMLElement) {
  element.style.outline = "0px solid rgba(255, 255, 255, 0)";
}
