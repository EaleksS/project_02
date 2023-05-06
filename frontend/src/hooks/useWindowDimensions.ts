import React from "react";

export const useWindowDimensions = () => {
  const [width, setWidth] = React.useState<number>(window.innerWidth);
  const [height, setHeight] = React.useState<number>(window.innerHeight);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  }, []);

  return {
    width,
    height,
  };
};
