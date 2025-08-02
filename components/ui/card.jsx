// components/ui/card.jsx
import React from "react";
import classNames from "classnames";

export const Card = ({ className, children }) => {
  return (
    <div
      className={classNames(
        "rounded-2xl border bg-white/10 backdrop-blur-md shadow-md p-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ className, children }) => {
  return (
    <div className={classNames("p-2", className)}>
      {children}
    </div>
  );
};
