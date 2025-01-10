"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { ThemeSwitch } from "@/reusable/navbar/themeSwitch";
import { LogoContent } from "./brandLogo";
import Links from "@/reusable/navbar/links";

export default function Nav() {
  return (
    <Navbar>
      <NavbarBrand>
        <LogoContent />
      </NavbarBrand>
      <NavbarContent className=" sm:flex gap-4" justify="center">
        <NavbarItem>
          <Links />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
