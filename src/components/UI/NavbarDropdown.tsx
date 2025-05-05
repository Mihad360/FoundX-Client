"use client";
import { Avatar } from "@heroui/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import Link from "next/link";
import React from "react";

const NavbarDropdown = () => {
  return (
    <div>
      <Dropdown>
        <DropdownTrigger className="cursor-pointer">
          <Avatar name="Jane"></Avatar>
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
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default NavbarDropdown;
