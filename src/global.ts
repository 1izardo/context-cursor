import { addCursor, setStyles } from "./chunks";
import CursorContext from "./chunks/cursorContext";
import propNames from "./propNames";

declare global {
  interface Window {
    contextCursor: (props: CProps) => CursorContext | void;
  }
}

const contextCursor = (props?: CProps) => {
  // Default props
  const cprops = {
    radius: props?.radius || 20,
    transitionSpeed: props?.transitionSpeed || 0.2,
    parallaxIndex: props?.parallaxIndex || 10,
    hoverPadding: props?.hoverPadding || 6,
  };

  // Set base
  setStyles();
  const cCursor = addCursor(cprops) as HTMLElement;

  // Load context when page is loaded
  let interactElements = document.querySelectorAll(
    `[${propNames.dataAttr}]`
  ) as NodeListOf<HTMLElement>;
  return new CursorContext(cCursor, cprops, interactElements);
};

window.contextCursor = contextCursor;

export default contextCursor;
