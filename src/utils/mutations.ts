import { Cursor } from "../Cursor";

export const mutationOptions = { childList: true, subtree: true };

/**
 * Callback used to handle new elements in the DOM.
 */
export function mutationCallback(
  this: Cursor,
  mutations: MutationRecord[],
  observer: MutationObserver
) {
  for (const mutation of mutations) {
    if (mutation.type === "childList") {
      // New nodes have been added
      mutation.addedNodes.forEach((node) => {
        // Ensure that node is an Element
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        const element = node as HTMLElement;
        // Loop through all new elements and make them interactive
        for (const [selector, dataAttr] of Object.entries(
          this.options.interactSelectors
        )) {
          // Check the element itself
          if (element.matches(selector)) {
            element.dataset.cc = dataAttr;
            observer.disconnect();
            this.addInteractElement(element);
            observer.observe(document, mutationOptions);
          }
          // Also check the element's descendants
          element.querySelectorAll<HTMLElement>(selector).forEach((child) => {
            child.dataset.cc = dataAttr;
            observer.disconnect();
            this.addInteractElement(child);
            observer.observe(document, mutationOptions);
          });
        }
      });
    }
  }
}
