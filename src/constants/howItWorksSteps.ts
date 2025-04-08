export type step = {
    number: string;
    title: string;
    description: string;
    image: string;
    delay: number;
}

export const STEPS: step[] = [
    {
        number: "01",
        title: "Create an Account",
        description: "Sign up as an artist and complete your profile with your bio and social links.",
        image: "/images/create-account.jpg", // Add appropriate image path
        delay: 0.1
    },
    {
        number: "02",
        title: "Upload Your Wallpapers",
        description: "Upload your designs, add tags, and set categories to help users discover your work.",
        image: "/images/upload-wallpapers.jpg", // Add appropriate image path
        delay: 0.2
    },
    {
        number: "03",
        title: "Get Discovered & Earn",
        description: "Users download your wallpapers, and you earn revenue based on popularity and engagement.",
        image: "/images/earn-revenue.jpg", // Add appropriate image path
        delay: 0.3
    }
];