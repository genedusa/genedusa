import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [icon, setIcon] = useState("/dark_mode.svg");
  const [filter, setFilter] = useState({ filter: "invert(0%)" });

  useEffect(() => {
    if (theme === "light") {
      setIcon("/dark_mode.svg");
      setFilter({ filter: "invert(0%)" });
    }
    if (theme === "dark") {
      setIcon("/light_mode.svg");
      setFilter({ filter: "invert(100%)" });
    }
  }, [theme, setIcon]);

  return (
    <div>
      <Button
        className="hidden sm:inline-flex"
        color="default"
        variant="faded"
        isIconOnly
        onClick={() => {
          if (theme === "light") setTheme("dark");
          else setTheme("light");
        }}
        endContent={
          <img
            src={icon}
            className="h-6 w-6"
            style={filter}
            alt="Current Website Theme Icon"
          />
        }
      ></Button>
    </div>
  );
}
