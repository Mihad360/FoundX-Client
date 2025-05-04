import { delay } from "@/src/utils/delay";
import React from "react";

const page = async () => {
  await delay(3000);
  return <div>postsssss</div>;
};

export default page;
