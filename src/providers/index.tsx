"use client";

import {ClerkProvider} from "@clerk/nextjs";
import {ReactQueryClientProvider} from "./ReactQueryClientProvider";
import {Provider} from "jotai";

export default function Providers({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <Provider>
            <ClerkProvider>
                <ReactQueryClientProvider>{children}</ReactQueryClientProvider>;
            </ClerkProvider>
        </Provider>
    );
}