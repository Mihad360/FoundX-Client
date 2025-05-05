import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1>User LAYOUT</h1>
      {children}
    </div>
  );
};

export default layout;