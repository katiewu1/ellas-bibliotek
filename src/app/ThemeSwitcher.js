import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { MdOutlineWbSunny, MdOutlineNightlight } from "react-icons/md";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div>
      <Switch
        defaultSelected
        size="lg"
        color="warning"
        onClick={handleTheme}
        startContent={<MdOutlineWbSunny />}
        endContent={<MdOutlineNightlight />}
      />
    </div>
  );
};

export default ThemeSwitcher;
