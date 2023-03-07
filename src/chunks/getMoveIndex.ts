const getMoveIndex = (
  mousePosition: number,
  elPosition: number,
  elDimension: number,
  movementSpeed: number
) => {
  let relativePos = mousePosition - elPosition;
  return (relativePos - elDimension / 2) / movementSpeed;
};

export default getMoveIndex;
