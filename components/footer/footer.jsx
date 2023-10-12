import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Divider, Link } from "@nextui-org/react";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  const [filter, setFilter] = useState({ filter: "invert(0%)" });

  useEffect(() => {
    if (theme === "light") {
      setFilter({ filter: "invert(0%)" });
    }
    if (theme === "dark") {
      setFilter({ filter: "invert(100%)" });
    }
  }, [theme, setFilter]);

  return (
    <footer className="flex flex-col bg-background-50">
      <div className="flex flex-row items-center justify-center px-5 align-middle">
        <p className="h-fit w-fit">Get connected with us on social media:</p>
        <div className="flex flex-row items-center">
          <Link href="mailto:info@genedusa.com?subject=Inquiry from GenEdUSA.com">
            <img
              src="/info.svg"
              className="m-1 h-8 w-8"
              style={filter}
              alt="Email Icon"
            />
          </Link>
          <Link href="https://www.facebook.com/">
            <img
              src="/info.svg"
              className="m-1 h-8 w-8"
              style={filter}
              alt="Facebook Icon"
            />
          </Link>
        </div>
      </div>
      <Divider />
      <div className="flex max-w-screen-2xl flex-col items-center justify-around gap-2 self-center px-8 py-5 text-center md:flex-row md:gap-12">
        <div className="md:max-w-xs">
          <h2 className="font-bold">GenEdUSA</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="md:max-w-xs">
          <h2 className="font-bold">Services</h2>
          <ul>
            <li>
              <Link href="/services">All Services</Link>
            </li>
            <li>
              <Link href="/services/service1">Service 1</Link>
            </li>
            <li>
              <Link href="/services/service2">Service 2</Link>
            </li>
            <li>
              <Link href="/services/service3">Service 3</Link>
            </li>
            <li>
              <Link href="/services/service4">Service 4</Link>
            </li>
          </ul>
        </div>
        <div className="md:max-w-xs">
          <h2 className="font-bold">Contact Us</h2>
          <p>123 Smith Street, Hoboken NJ, 07030, US</p>
          <p>+1 (123) 456-7890</p>
          <p>info@genedusa.com</p>
        </div>
      </div>
      <div className="bg-background-100 py-2 text-center">
        © 2023 Copyright: GenEdUSA.com
      </div>
    </footer>
  );
}
