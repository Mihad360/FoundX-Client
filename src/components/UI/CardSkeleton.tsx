import { Button } from "@heroui/button";
import { Card, CardFooter } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";
import Image from "next/image";
import React from "react";

const CardSkeleton = () => {
  return (
    <Card isFooterBlurred className="border-none" radius="lg">
      <Skeleton>
        <div className="w-[700px] h-[700px]"></div>
      </Skeleton>
      <Skeleton>
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80"></p>
          <Skeleton>
            <Button
              className="text-tiny text-white bg-black/20"
              color="default"
              radius="lg"
              size="sm"
              variant="flat"
            ></Button>
          </Skeleton>
        </CardFooter>
      </Skeleton>
    </Card>
  );
};

export default CardSkeleton;
