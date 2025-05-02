import { Navbar } from "@/src/components/UI/navbar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      <main className="">{children}</main>
    </div>
  );
};

export default layout;
