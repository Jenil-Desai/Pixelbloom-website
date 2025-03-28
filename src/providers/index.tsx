"use client";

import {ClerkProvider} from "@clerk/nextjs";
import {ReactQueryClientProvider} from "./ReactQueryClientProvider";

export default function Providers({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <ClerkProvider>
            <ReactQueryClientProvider>{children}</ReactQueryClientProvider>;
        </ClerkProvider>
    );
}