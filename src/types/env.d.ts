/// <reference types="node" />

declare namespace NodeJS {
    interface ProcessEnv {
        DATABASE_URL: string;
        NEXT_PUBLIC_CLERK_SIGN_IN_URL: string;
        NEXT_PUBLIC_CLERK_SIGN_UP_URL: string;
        NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL: string;
        NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL: string;
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
        CLERK_SECRET_KEY: string;
        SIGNING_SECRET: string;
        ACCOUNT_ID: string;
        ACCESS_KEY_ID: string;
        SECRET_ACCESS_KEY: string;
    }
}