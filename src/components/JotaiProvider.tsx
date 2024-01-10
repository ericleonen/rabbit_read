"use client"

import { ParentProps } from "@/types/props";
import { Provider } from "jotai";

export default function JotaiProvider({ children }: ParentProps) {
    return (
        <Provider>
            {children}
        </Provider>
    )
}