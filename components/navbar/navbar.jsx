import { useState } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

import ThemeSwitch from "~/components/themeswitch/themeswitch";

export default function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    ["Home", "/"],
    ["Services", "/services"],
    ["Contact Us", "/about"],
  ];

  function createRedirect(dir, subdir) {
    return `${dir}${subdir}`;
  }

  return (
    <Navbar id="navbar" position="sticky" isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img
            src="/logo.png"
            className="h-12 w-12 object-contain"
            alt="GenEdUSA Logo"
          />
          <p className="text-3xl text-inherit">GenEdUSA</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="center">
        <NavbarItem>
          <Link href="/" className="text-xl">
            Home
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Link className="text-xl">Services</Link>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="GenEdUSA Services"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="services"
              className="text-primary"
              description="All Services Description"
              onPress={() => {
                window.location.href = createRedirect(
                  window.location.href.split("/")[0],
                  "/services",
                );
              }}
            >
              All Services
            </DropdownItem>
            <DropdownItem
              key="service_1"
              className="text-primary"
              description="Service 1 Description"
              onPress={() => {
                window.location.href = createRedirect(
                  window.location.href.split("/")[0],
                  "/services/service1",
                );
              }}
            >
              Service 1
            </DropdownItem>
            <DropdownItem
              key="service_2"
              className="text-primary"
              description="Service 2 Description"
              onPress={() => {
                window.location.href = createRedirect(
                  window.location.href.split("/")[0],
                  "/services/service2",
                );
              }}
            >
              Service 2
            </DropdownItem>
            <DropdownItem
              key="service_3"
              className="text-primary"
              description="Service 3 Description"
              onPress={() => {
                window.location.href = createRedirect(
                  window.location.href.split("/")[0],
                  "/services/service3",
                );
              }}
            >
              Service 3
            </DropdownItem>
            <DropdownItem
              key="service_4"
              className="text-primary"
              description="Service 4 Description"
              onPress={() => {
                window.location.href = createRedirect(
                  window.location.href.split("/")[0],
                  "/services/service4",
                );
              }}
            >
              Service 4
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link href="/about" className="text-xl">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeSwitch />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item[0]}-${index}`}>
            <Link className="w-full text-5xl" href={`${item[1]}`} size="lg">
              {item[0]}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
