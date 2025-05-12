"use client";
import { Card, CardBody, CardHeader } from "@heroui/card";
import Image from "next/image";
import React from "react";
import SidebarOptions from "./SidebarOptions";
import { Button } from "@heroui/button";
import Link from "next/link";
import { useUser } from "@/src/context/user.provider";

const Sidebar = () => {
  const { user } = useUser();

  return (
    <div>
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-2xl uppercase font-bold">{user?.name}</p>
          <h4 className="font-bold text-large">{user?.email}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            src={user?.profilePhoto as string}
            height={270}
            alt="Card background"
            className="object-cover rounded-xl"
            width={270}
          />
        </CardBody>
        <Button
          as={Link}
          className="w-full rounded-md"
          href="/profile/create-post"
        >
          Create a post
        </Button>
      </Card>
      <SidebarOptions />
    </div>
  );
};

export default Sidebar;
