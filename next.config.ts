import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "i.pravatar.cc",
            },
            {
                protocol: "https",
                hostname: "pub-ea54a22116d24059a44b9e9880dba19b.r2.dev"
            }
        ],
    },
    devIndicators: false,
    experimental: {
        serverActions: {
            bodySizeLimit: "10mb",
        }
    },
};

export default nextConfig;