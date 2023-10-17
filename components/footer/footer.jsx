import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import { Divider, Link } from "@nextui-org/react";
import services from "~/data/services";
import general from "~/data/general";
import NewLineText from "../newlinetext/newlinetext";

export default function Footer() {
  // THEME HANDLERS
  const { theme } = useTheme();
  const [filter, setFilter] = useState({ filter: "invert(0%)" });

  useEffect(() => {
    if (theme === "light") setFilter({ filter: "invert(0%)" });
    else setFilter({ filter: "invert(100%)" });
  }, [theme, setFilter]);

  return (
    <footer className="flex flex-col bg-background-50">
      {/* <div className="flex flex-row items-center justify-center px-5 align-middle">
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
      </div> */}
      <Divider />
      <div className="flex max-w-screen-2xl flex-col items-center justify-around gap-2 self-center px-8 py-5 text-center md:flex-row md:items-start md:gap-12">
        <div className="md:max-w-xs">
          <h2 className="font-bold">GenEdUSA</h2>
          <p>
            <NewLineText
              text={`GenEd is a tutoring service, designed with flexibility being most important.\nGenEd offers both group and one-on-one sessions, virtual and in-person options, and services to scholars of all ages and needs.\nCall or email today to inquire about our classes.`}
            />
          </p>
        </div>
        <div className="flex flex-col items-center md:max-w-xs">
          <h2 className="font-bold">Services</h2>
          <Link href="/services">All Services</Link>
          {services.map((service) => {
            return (
              <Link
                key={`footer_${service.id}`}
                href={`/services#${service.id}`}
              >
                {service.title}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col items-center md:max-w-xs">
          <h2 className="font-bold">Contact Us</h2>
          <Link href={`tel:${general.number}`}>{general.number}</Link>
          <Link
            href={`mailto:${general.email_info}?subject=Inquiry from GenEdUSA.com`}
          >
            {general.email_info}
          </Link>
        </div>
      </div>
      <div className="bg-background-100 py-2 text-center">
        © 2023 Copyright: GenEdUSA.com
      </div>
    </footer>
  );
}
