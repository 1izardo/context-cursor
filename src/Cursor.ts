import { mutationCallback, mutationOptions } from "./utils/mutations";
import { CursorOptions } from "./types";
import { gsap } from "gsap";
import {
  styleInteractElement,
  wrapInteractElement,
} from "./utils/interactElements";

export class Cursor {
  options: Required<CursorOptions>;
  x = 0;
  y = 0;
  cursor: HTMLElement;
  preciseCursor: HTMLElement;
  interactElements: HTMLElement[] = [];
  currentTarget: HTMLElement | null = null;
  isHovering = false;

  constructor(options: Required<CursorOptions>) {
    this.options = options;
    const { cursor, preciseCursor } = this.createCursors();
    this.cursor = cursor;
    this.preciseCursor = preciseCursor;
    // Get initial interact elements (whatever is currently in the DOM)
    this.getInteractElements().forEach((element) => {
      this.addInteractElement(element);
    });
    this.addDocumentEventListeners();
    if (options.watch) this.watch();
  }

  watch() {
    const observer = new MutationObserver(mutationCallback.bind(this));
    observer.observe(document, mutationOptions);
  }

  reset() {
    this.isHovering = false;
    this.cursor.classList.remove("active", "lift-active");
    this.preciseCursor.classList.remove("active");
    gsap.to(this.cursor, {
      width: this.options.radius * 2,
      height: this.options.radius * 2,
      x: this.x - this.options.radius,
      y: this.y - this.options.radius,
      borderRadius: this.options.radius,
      scale: 1,
      backgroundImage: "none",
      filter: "blur(0rem)",
      duration: this.options.transitionDuration,
    });
    // Reset cursor target position (clear parallax)
    if (this.currentTarget) {
      gsap.to(this.currentTarget, {
        x: 0,
        y: 0,
        scale: 1,
        boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
        outline: "0px solid rgba(255, 255, 255, 0)",
        duration: this.options.transitionDuration,
      });
    }
  }

  addInteractElement(element: HTMLElement) {
    this.interactElements.push(element);
    if (
      this.options.wrapInteractElements &&
      !element.dataset.cc?.includes("no-wrapper")
    ) {
      wrapInteractElement(element);
      // Ensure that parent element has been created
      if (!element.parentElement) return;

      element.parentElement.addEventListener(
        "mouseenter",
        this.handleMouseEnter.bind(this)
      );
      element.parentElement.addEventListener(
        "mouseleave",
        this.handleMouseLeave.bind(this)
      );
    } else {
      element.addEventListener("mouseenter", this.handleMouseEnter.bind(this));
      element.addEventListener("mouseleave", this.handleMouseLeave.bind(this));
    }
    styleInteractElement(element);
  }

  private createCursors() {
    // Context cursor (takes shape of hovered element)
    const cursor = document.createElement("div");
    cursor.className = this.options.className;
    cursor.style.position = "fixed";
    if (!this.options.beginOpaque) {
      cursor.style.opacity = "0";
    }
    document.body.appendChild(cursor);

    // Precise cursor (fixed shape)
    const preciseCursor = document.createElement("div");
    preciseCursor.className = this.options.preciseCursorClassName;
    preciseCursor.style.position = "fixed";
    if (!this.options.beginOpaque) {
      preciseCursor.style.opacity = "0";
    }
    document.body.appendChild(preciseCursor);

    return { cursor, preciseCursor };
  }

  private getInteractElements() {
    // Add data-cc attribute to elements that match interactSelectors
    for (const [selector, dataAttr] of Object.entries(
      this.options.interactSelectors
    )) {
      document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
        element.dataset.cc = dataAttr;
      });
    }
    // Get all elements with data-cc attribute
    return [
      ...document.querySelectorAll<HTMLElement>(`[${this.options.dataAttr}]`),
    ];
  }

  private addDocumentEventListeners() {
    document.addEventListener("mousemove", this.move.bind(this));

    document.addEventListener("scroll", this.checkHovering.bind(this));
    document.body.addEventListener("scroll", this.checkHovering.bind(this));

    document.addEventListener("mousedown", this.click.bind(this));

    document.addEventListener("mouseup", this.unClick.bind(this));
  }

  private handleMouseEnter(e: MouseEvent) {
    this.isHovering = true;
    const target = e.target as HTMLElement;
    if (
      this.options.wrapInteractElements &&
      !target.dataset.cc?.includes("no-wrapper")
    ) {
      this.currentTarget = target.firstChild as HTMLElement;
    } else {
      this.currentTarget = target;
    }
    this.preciseCursor.classList.add("active");
    if (this.currentTarget.dataset.cc?.includes("lift")) {
      this.cursor.classList.add("lift-active");
    } else {
      this.cursor.classList.add("active");
    }
  }

  private handleMouseLeave() {
    this.reset();
  }

  private move(e: MouseEvent) {
    this.x = e.clientX;
    this.y = e.clientY;
    this.preciseCursor.style.opacity = "1";
    this.preciseCursor.style.transform = `translateX(${e.clientX}px) translateY(${e.clientY}px)`;

    // Reset cursor if hovered element leaves the DOM
    if (!document.body.contains(this.currentTarget)) {
      this.reset();
    }

    if (!this.isHovering || !this.currentTarget) {
      gsap
        .timeline()
        .to(this.cursor, {
          x: e.clientX - this.options.radius,
          y: e.clientY - this.options.radius,
          duration: this.options.transitionDuration,
        })
        .to(this.cursor, {
          opacity: 1,
        });
    } else {
      if (this.currentTarget.dataset.cc?.includes("lift")) {
        gsap.to(this.currentTarget, {
          ...this.getTargetParallax(true),
          boxShadow: getComputedStyle(document.body).getPropertyValue(
            "--cc-cursor-box-shadow"
          ),
          outline: getComputedStyle(document.body).getPropertyValue(
            "--cc-cursor-lift-outline"
          ),
          scale: 1.1,
          duration: this.options.transitionDuration,
        });
        gsap.to(this.cursor, {
          ...this.getCursorParallax(true),
          filter: "blur(1rem)",
          backgroundImage: `radial-gradient(circle 5rem at ${
            this.x - this.currentTarget.getBoundingClientRect().left
          }px ${
            this.y - this.currentTarget.getBoundingClientRect().top
          }px, rgba(255,255,255,0.1), rgba(255,255,255,0))`,
          duration: this.options.transitionDuration,
        });
      } else {
        gsap.to(this.currentTarget, {
          ...this.getTargetParallax(),
          duration: this.options.transitionDuration,
        });
        gsap.to(this.cursor, {
          ...this.getCursorParallax(),
          duration: this.options.transitionDuration,
        });
      }
    }
  }

  private click() {
    this.preciseCursor.classList.add("clicked");
  }

  private unClick() {
    this.preciseCursor.classList.remove("clicked");
  }

  private checkHovering() {
    if (!this.currentTarget) return;
    const targetRect = this.currentTarget.getBoundingClientRect();
    if (
      !(
        this.x >= targetRect.left &&
        this.x <= targetRect.right &&
        this.y >= targetRect.top &&
        this.y <= targetRect.bottom
      )
    ) {
      this.reset();
    }
  }

  private getTargetParallax(lift = false) {
    if (
      !this.currentTarget ||
      this.currentTarget.dataset.cc?.includes("no-parallax")
    ) {
      return undefined;
    }
    const targetRect = this.currentTarget.getBoundingClientRect();
    const halfX = targetRect.left + targetRect.width / 2;
    const halfY = targetRect.top + targetRect.height / 2;
    return {
      x: (halfX - this.x) * this.options.parallaxStrength * (lift ? -1 : 1),
      y: (halfY - this.y) * this.options.parallaxStrength * (lift ? -1 : 1),
    };
  }

  private getCursorParallax(lift = false) {
    if (!this.currentTarget) {
      return undefined;
    }
    const noParallax = this.currentTarget.dataset.cc?.includes("no-parallax");
    const targetRect = this.currentTarget.getBoundingClientRect();
    const borderRadius = parseInt(
      window.getComputedStyle(this.currentTarget).borderRadius
    );
    const halfX = targetRect.left + targetRect.width / 2;
    const halfY = targetRect.top + targetRect.height / 2;
    return {
      x: lift
        ? targetRect.left
        : noParallax
        ? targetRect.left - this.options.hoverPadding
        : targetRect.left +
          (this.x - halfX) * this.options.parallaxStrength -
          this.options.hoverPadding,
      y: lift
        ? targetRect.top
        : noParallax
        ? targetRect.top - this.options.hoverPadding
        : targetRect.top +
          (this.y - halfY) * this.options.parallaxStrength -
          this.options.hoverPadding,
      width: targetRect.width + (lift ? 0 : 2 * this.options.hoverPadding),
      height: targetRect.height + (lift ? 0 : 2 * this.options.hoverPadding),
      borderRadius,
    };
  }
}
