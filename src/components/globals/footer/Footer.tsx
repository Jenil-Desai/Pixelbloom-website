"use client";
import Link from "next/link";
import {ARTISTS_LINKS, COMPANY_LINKS, SOCIAL_LINKS, USER_LINKS} from "@/constants/footerLinks";
import Image from "next/image";
import {useHide} from "@/hooks/useHide";

export default function Footer() {
    const hideFooter = useHide({pathname: ["/admin", "/artist"]});

    if (hideFooter) return null;

    return (
        <footer className="w-full border-t border-black/10 py-12 md:py-16 lg:py-20 bg-white">
            <div className="px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Image src={"/icons/icon-512.png"} width={45} height={45} alt="Icon"/>
                            <span className="text-xl font-bold text-black">PixelBloom Studio</span>
                        </div>
                        <p className="text-sm text-black/70">The premier platform for artists to share and monetize
                            their wallpaper designs.</p>
                        <div className="flex gap-4">
                            {SOCIAL_LINKS.map((link) => (
                                <Link key={link.label} href={link.href} className="text-black/70 hover:text-black">
                                    <link.icon className="h-5 w-5"/>
                                    <span className="sr-only">{link.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-medium text-black">For Artists</h3>
                        <ul className="space-y-2">
                            {ARTISTS_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm text-black/70 hover:text-black">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-medium text-black">For Users</h3>
                        <ul className="space-y-2">
                            {USER_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm text-black/70 hover:text-black">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-medium text-black">Company</h3>
                        <ul className="space-y-2">
                            {COMPANY_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm text-black/70 hover:text-black">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-black/10 pt-8 text-center">
                    <p className="text-xs text-black/60">© {new Date().getFullYear()} PixelBloom Studio. All rights
                        reserved.</p>
                </div>
            </div>
        </footer>
    );
}