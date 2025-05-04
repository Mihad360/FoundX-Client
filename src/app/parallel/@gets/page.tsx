import { delay } from "@/src/utils/delay";
import React from "react";

const page = async () => {
  await delay(3000);
//   throw new Error("Error");
  return <div>getssss</div>;
};

export default page;
