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

  return screenSize;
};

export default useGetScreenSize;
