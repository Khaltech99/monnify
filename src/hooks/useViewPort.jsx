import { useEffect, useState } from "react";

const useViewPort = () => {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return viewport;
};

export default useViewPort;
