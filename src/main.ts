import { addCursor, setStyles } from "./chunks";
import CursorContext from "./chunks/cursorContext";
import propNames from "./propNames";

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
  window.onload = () => {
    let interactElements = document.querySelectorAll(
      `[${propNames.dataAttr}]`
    ) as NodeListOf<HTMLElement>;
    new CursorContext(cCursor, cprops, interactElements);
  };
};

export default contextCursor;
