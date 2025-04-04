import {clerkMiddleware, createRouteMatcher} from "@clerk/nextjs/server";
import {NextResponse} from "next/server";

const isOnboardingRoute = createRouteMatcher(['/onboarding'])
const isArtistRoute = createRouteMatcher(["/artist(.*)"]);
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, request) => {
    const {userId, sessionClaims} = await auth()

    // Handle protected routes when user is not authenticated
    if (!userId && (isArtistRoute(request) || isAdminRoute(request))) {
        const signInUrl = new URL('/sign-in', request.url);
        return NextResponse.redirect(signInUrl);
    }

    // Check onboarding first
    if (userId && !sessionClaims?.metadata?.onboardingComplete && !isOnboardingRoute(request)) {
        const onboardingUrl = new URL('/onboarding', request.url)
        return NextResponse.redirect(onboardingUrl)
    }

    // After onboarding is complete, check roles
    if (isAdminRoute(request) && sessionClaims?.metadata.role !== "ADMIN") {
        const url = new URL("/", request.url);
        return NextResponse.redirect(url);
    }

    if (isArtistRoute(request) && sessionClaims?.metadata.role !== "ARTIST") {
        const url = new URL("/", request.url);
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
});

export const config = {
    matcher: [
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        "/(api|trpc)(.*)",
    ],
};