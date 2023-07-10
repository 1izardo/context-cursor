import { Cursor } from "./Cursor";
import "./main.css";
import { CursorOptions } from "./types";

export default function ContextCursor(options?: CursorOptions) {
  const fullOptions: Required<CursorOptions> = {
    radius: 8,
    hoverPadding: 6,
    transitionDuration: 0.2,
    parallaxStrength: 0.075,
    className: "cc-cursor",
    dataAttr: "data-cc",
    beginOpaque: false,
    preciseCursorClassName: "cc-precise-cursor",
    interactSelectors: {},
    wrapInteractElements: true,
    watch: false,
    ...options,
  };
  return new Cursor(fullOptions);
}
