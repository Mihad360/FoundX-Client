import { Spinner } from "@heroui/spinner";
import React from "react";

const Loading = () => {
  return (
    <div className="bg-black/10 h-screen fixed inset-0 z-[999] backdrop-blur-sm">
      <Spinner className="flex justify-center h-screen" size="lg" color="primary" variant="spinner" />
    </div>
  );
};

export default Loading;
