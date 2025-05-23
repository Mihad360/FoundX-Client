"use client";
import { protectedRoutes } from "@/src/constant";
import { useUser } from "@/src/context/user.provider";
import { logOut } from "@/src/services/authService";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const NavbarDropdown = () => {
  const router = useRouter();
  const pathName = usePathname();
  const { setIsLoading, user } = useUser();
  
  const handleLogout = () => {
    logOut();
    setIsLoading(true);

    if (protectedRoutes.some((route) => pathName.match(route))) {
      router.push("/");
    }
  };

  return (
    <div>
      <Dropdown>
        <DropdownTrigger className="cursor-pointer">
          <Avatar src={user?.profilePhoto}></Avatar>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem as={Link} href="/profile" key="/profile">
            Profile
          </DropdownItem>
          <DropdownItem
            as={Link}
            href="/profile/create-post"
            key="/profile/create-post"
          >
            Create Post
          </DropdownItem>
          <DropdownItem
            as={Link}
            href="/profile/claim-requests"
            key="/profile/claim-requests"
          >
            Claim Requests
          </DropdownItem>
          <DropdownItem as={Link} href="/profile/about" key="/profile/about">
            About
          </DropdownItem>
          <DropdownItem
            onClick={() => handleLogout()}
            as={Button}
            color="danger"
            key="/logout"
          >
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default NavbarDropdown;
