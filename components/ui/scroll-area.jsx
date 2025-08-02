import React from "react";

export const ScrollArea = ({ children }) => {
  return (
    <div className="h-[85vh] w-[250px] bg-black border-l border-gray-800 overflow-y-auto p-4 space-y-4 shadow-md rounded-l-lg">
      {children}
    </div>
  );
};
