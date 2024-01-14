import { useLayoutEffect, useState } from "react";

export function useWindowWidth() {
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        const updateWidth = () => setWidth(window ? window.innerWidth : 0);
        window.addEventListener("resize", updateWidth);
        updateWidth();
        return () => window.removeEventListener("resize", updateWidth);
    });

    return width;
}