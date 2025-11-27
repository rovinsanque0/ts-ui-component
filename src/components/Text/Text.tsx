import React from "react";
import { TextProps } from "./Text.types";

const Text: React.FC<TextProps> = ({
  children,
  size = "md",
  color = "#333",
  style,
}) => {
  const fontSizes = {
    sm: "0.875rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
  };

  return (
    <p style={{ fontSize: fontSizes[size], color, ...style }}>
      {children}
    </p>
  );
};

export default Text;
