import step1 from "../../public/steps-screenshot/Login.png";
import step2 from "../../public/steps-screenshot/UploadWallpaper.png";
import step3 from "../../public/steps-screenshot/States.png";
import {StaticImageData} from "next/image";

export type step = {
    number: string;
    title: string;
    description: string;
    image: StaticImageData;
    delay: number;
}

export const STEPS: step[] = [
    {
        number: "01",
        title: "Create an Account",
        description: "Sign up as an artist and complete your profile with your bio and social links.",
        image: step1,
        delay: 0.1
    },
    {
        number: "02",
        title: "Upload Your Wallpapers",
        description: "Upload your designs, add tags, and set categories to help users discover your work.",
        image: step2,
        delay: 0.2
    },
    {
        number: "03",
        title: "Get Discovered & Earn",
        description: "Users download your wallpapers, and you earn revenue based on popularity and engagement.",
        image: step3,
        delay: 0.3
    }
];