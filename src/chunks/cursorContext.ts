import { gsap } from "gsap";
import { getMoveIndex, isElHasProperty, getStyleProp } from ".";
import propNames from "../propNames";

class CursorContext {
  cursor: HTMLElement;
  cursorX: number = 0;
  cursorY: number = 0;
  props: CProps;
  interactElements: NodeListOf<HTMLElement>;
  parallaxSpeed: { cursor: number; target: number };
  isHovered: boolean = false;
  cursorTarget: HTMLElement | undefined;

  constructor(
    cursor: HTMLElement,
    props: CProps,
    interactElements: NodeListOf<HTMLElement>
  ) {
    this.cursor = cursor;
    this.props = props;
    this.interactElements = interactElements;
    this.parallaxSpeed = {
      cursor: this.props.parallaxIndex,
      target: props.parallaxIndex * 1.5,
    };
    document.addEventListener("wheel", () => {
      this.handleMouseOut();
    });
    document.addEventListener("mousemove", (e: MouseEvent) => {
      this.moveCursor(e);
    });
    interactElements.forEach((item) => {
      this.addInteractElement(item);
    });

    // Reset cursor when DOM changes
    var observer = new MutationObserver(() => {
      if (!document.body.contains(this.cursorTarget as HTMLElement)) {
        this.resetCursor();
      }
    });
    observer.observe(document.body, {
      attributes: false,
      childList: true,
      subtree: true,
      characterData: false,
    });
  }

  addInteractElement(item: HTMLElement) {
    item.addEventListener("mouseenter", (e: MouseEvent) => {
      this.handleMouseOver(e);
    });
    item.addEventListener("mouseleave", () => {
      this.handleMouseOut();
    });
  }

  moveCursor(e: MouseEvent) {
    // Update cursor position
    this.cursorX = e.clientX;
    this.cursorY = e.clientY;
    // Ensure that cursor is opaque
    this.cursor.style.opacity = "1";
    // If the current target element is no longer in the DOM
    if (!document.body.contains(this.cursorTarget as HTMLElement)) {
      this.resetCursor();
    }
    // If element is not hovered
    if (!this.isHovered) {
      gsap.to(this.cursor, {
        x: this.cursorX - this.props.radius / 2,
        y: this.cursorY - this.props.radius / 2,
        duration: this.props.transitionSpeed,
      });
      // If element is hovered
    } else if (this.cursorTarget) {
      const borderRadius = Number(
        window
          .getComputedStyle(this.cursorTarget)
          .borderRadius.slice(0, -2) as any
      );
      // For "LIFT" mode
      if (isElHasProperty(this.cursorTarget, propNames.lift)) {
        gsap.to(this.cursorTarget, {
          x: isElHasProperty(this.cursorTarget, propNames.noParallax)
            ? undefined
            : getMoveIndex(
                this.cursorX,
                this.cursorTarget.getBoundingClientRect().left,
                this.cursorTarget.clientWidth,
                this.parallaxSpeed.target
              ),
          y: isElHasProperty(this.cursorTarget, propNames.noParallax)
            ? undefined
            : getMoveIndex(
                this.cursorY,
                this.cursorTarget.getBoundingClientRect().top,
                this.cursorTarget.clientHeight,
                this.parallaxSpeed.target
              ),
          scale: 1.1,
          boxShadow: getStyleProp("--ghost-shadow"),
          duration: this.props.transitionSpeed,
        });
        gsap.to(this.cursor, {
          filter: "blur(8px)",
          x:
            this.cursorTarget.getBoundingClientRect().left +
            (this.cursorX -
              this.cursorTarget.getBoundingClientRect().left -
              this.cursorTarget.clientWidth / 2) /
              this.parallaxSpeed.cursor,
          y:
            this.cursorTarget.getBoundingClientRect().top +
            (this.cursorY -
              this.cursorTarget.getBoundingClientRect().top -
              this.cursorTarget.clientHeight / 2) /
              this.parallaxSpeed.cursor,
          backgroundImage: `radial-gradient(circle at ${
            this.cursorX - this.cursorTarget.getBoundingClientRect().left
          }px ${
            this.cursorY - this.cursorTarget.getBoundingClientRect().top
          }px, rgba(255,255,255,0.4), rgba(255,255,255,0))`,
          duration: this.props.transitionSpeed,
        });
        // For default "PARALLAX" mode
      } else {
        gsap.to(this.cursor, {
          x:
            this.cursorTarget.getBoundingClientRect().left -
            (isElHasProperty(this.cursorTarget, propNames.noPadding)
              ? 0
              : this.props.hoverPadding) +
            (isElHasProperty(this.cursorTarget, propNames.noParallax)
              ? 0
              : (this.cursorX -
                  this.cursorTarget.getBoundingClientRect().left -
                  this.cursorTarget.clientWidth / 2) /
                this.parallaxSpeed.cursor),
          y:
            this.cursorTarget.getBoundingClientRect().top -
            (isElHasProperty(this.cursorTarget, propNames.noPadding)
              ? 0
              : this.props.hoverPadding) +
            (isElHasProperty(this.cursorTarget, propNames.noParallax)
              ? 0
              : (this.cursorY -
                  this.cursorTarget.getBoundingClientRect().top -
                  this.cursorTarget.clientHeight / 2) /
                this.parallaxSpeed.cursor),
          borderRadius:
            borderRadius *
            (isElHasProperty(this.cursorTarget, propNames.noPadding) ? 1 : 1.5),
          width:
            this.cursorTarget.clientWidth +
            (isElHasProperty(this.cursorTarget, propNames.noPadding)
              ? 0
              : this.props.hoverPadding * 2),
          height:
            this.cursorTarget.clientHeight +
            (isElHasProperty(this.cursorTarget, propNames.noPadding)
              ? 0
              : this.props.hoverPadding * 2),
          duration: this.props.transitionSpeed,
        });
        // For "NO PARALLAX" property
        if (!isElHasProperty(this.cursorTarget, propNames.noParallax)) {
          gsap.to(this.cursorTarget, {
            x: -getMoveIndex(
              this.cursorX,
              this.cursorTarget.getBoundingClientRect().left,
              this.cursorTarget.clientWidth,
              this.parallaxSpeed.target
            ),
            y: -getMoveIndex(
              this.cursorY,
              this.cursorTarget.getBoundingClientRect().top,
              this.cursorTarget.clientHeight,
              this.parallaxSpeed.target
            ),
            duration: this.props.transitionSpeed,
          });
        }
      }
    }
  }

  handleMouseOver(e: MouseEvent) {
    this.isHovered = true;
    this.cursorTarget = e.target as HTMLElement;
    const borderRadius = Number(
      window
        .getComputedStyle(this.cursorTarget)
        .borderRadius.slice(0, -2) as any
    );

    if (isElHasProperty(this.cursorTarget, propNames.lift)) {
      this.cursor.classList.add("c-cursor-lift_active");
      gsap.to(this.cursor, {
        borderRadius: borderRadius,
        width: this.cursorTarget.clientWidth,
        height: this.cursorTarget.clientHeight,
        scale: 1.1,
        duration: this.props.transitionSpeed,
      });
    } else {
      this.cursor.classList.add("c-cursor_active");
    }
  }

  handleMouseOut() {
    this.resetCursor();
  }

  resetCursor() {
    this.isHovered = false;
    this.cursor.classList.remove("c-cursor_active");
    this.cursor.classList.remove("c-cursor-lift_active");

    gsap.to(this.cursor, {
      x: this.cursorX - this.props.radius / 2,
      y: this.cursorY - this.props.radius / 2,
      width: this.props.radius,
      height: this.props.radius,
      borderRadius: "100px",
      scale: 1,
      backgroundImage: "none",
      filter: "blur(0px)",
      duration: this.props.transitionSpeed,
    });
    // Reset cursor target position (clear parallax)
    if (this.cursorTarget) {
      gsap.to(this.cursorTarget, {
        x: 0,
        y: 0,
        scale: 1,
        boxShadow: "0 7px 15px rgba(0,0,0,0.0)",
        duration: this.props.transitionSpeed,
      });
    }
  }
}

export default CursorContext;
