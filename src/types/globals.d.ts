export {};

type Roles = "ADMIN" | "ARTIST";

declare global {
    interface CustomJwtSessionClaims {
        metadata: {
            role?: Roles;
            artistsId: string;
            onboardingComplete?: boolean
        };
    }

    interface UserPublicMetadata {
        role?: Roles;
        artistsId: string;
        onboardingComplete?: boolean
    }
}