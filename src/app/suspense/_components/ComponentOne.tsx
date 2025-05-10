import { delay } from "@/src/utils/delay";

const ComponentOne = async () => {
  await delay(5000);
  throw new Error("error");
  return <div className="border border-white w-80">ComponentOne</div>;
};

export default ComponentOne;
