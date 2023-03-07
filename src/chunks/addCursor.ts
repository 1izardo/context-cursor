const addCursor = (props: CProps) => {
  if (props) {
    const contextCursor = document.createElement("div");
    contextCursor.setAttribute(
      "style",
      `opacity: 0; transition: opacity 0.5s ease-in-out; transform: translate(50vw, 50vh); height: ${props.radius}px; width: ${props.radius}px;`
    );
    contextCursor.setAttribute("class", "c-cursor");
    document.body.prepend(contextCursor);
    return contextCursor;
  }
  return;
};

export default addCursor;
