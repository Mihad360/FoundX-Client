"use client";
import { useUser } from "@/src/context/user.provider";
import Link from "next/link";
import { adminLinks, userLinks } from "./constants";

const SidebarOptions = () => {
  const { user } = useUser();

  return (
    <div className="flex flex-col bg-gray-700 p-5 ">
      {(user?.role === "USER" ? userLinks : adminLinks).map((item) => (
        <Link className="pb-3" href={item.href} key={item.href}>
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default SidebarOptions;
