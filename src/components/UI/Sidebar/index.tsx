import { Card, CardBody, CardHeader } from "@heroui/card";
import Image from "next/image";
import React from "react";
import SidebarOptions from "./SidebarOptions";
import { Button } from "@heroui/button";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div>
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            height={270}
            alt="Card background"
            className="object-cover rounded-xl"
            src=""
            width={270}
          />
        </CardBody>
        <Button as={Link} className="w-full rounded-md" href="/profile/create-post">
          Create a post
        </Button>
      </Card>
      <SidebarOptions />
    </div>
  );
};

export default Sidebar;
