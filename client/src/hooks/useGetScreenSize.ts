import { useAtom } from "jotai";
import { useEffect } from "react";

// atoms
import { screenSizeAtom } from "@atoms/screenSize";

const useGetScreenSize = () => {
  const [screenSize, setScreenSize] = useAtom(screenSizeAtom);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setScreenSize]);

  const screenType: string =
    screenSize.width > 720
      ? "desktop"
      : screenSize.width > 540
      ? "tablet"
      : "mobile";

  return { screenSize, screenType };
};

export default useGetScreenSize;
