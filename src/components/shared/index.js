export const handlePadding = number => {
  return {
    paddingLeft: number,
    paddingRight: number,
    paddingBottom: number,
    paddingTop: number,
  };
};

export const handleMargin = number => {
  return {
    marginLeft: number,
    marginRight: number,
    marginBottom: number,
    marginTop: number,
  };
};

export const handleSquare = number => {
  return {
    width: number,
    height: number,
  };
};

export const handleRound = number => {
  return {
    width: number,
    height: number,
    borderRadius: number / 2,
  };
};
