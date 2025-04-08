"use client";
import Link from "next/link";
import {ARTISTS_LINKS, COMPANY_LINKS, SOCIAL_LINKS, USER_LINKS} from "@/constants/footerLinks";
import Image from "next/image";
import {useHide} from "@/hooks/useHide";
import {Button} from "@/components/ui/button";
import {ArrowUpRight, ChevronUp} from "lucide-react";
import {useState} from "react";

export default function Footer() {
    const hideFooter = useHide({pathname: ["/admin", "/artist"]});
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    if (hideFooter) return null;

    return (
        <footer className="w-full relative bg-white overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-500/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

            {/* Newsletter section */}
            <div className="container mx-auto px-4 py-16 border-b border-zinc-100">
                <div className="bg-gradient-to-br from-orange-500/10 to-blue-500/10 rounded-2xl p-8 md:p-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-zinc-900">
                            Stay Updated with <span
                            className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">PixelBloom</span>
                        </h3>
                        <p className="text-zinc-600 mb-8">
                            Subscribe to our newsletter for the latest wallpapers, artists spotlights, and platform
                            updates.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                            />
                            <Button
                                className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-medium rounded-xl px-6 py-3 shadow-md shadow-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main footer content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
                    {/* Brand column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div
                                className="relative h-12 w-12 overflow-hidden rounded-xl bg-gradient-to-br from-orange-500 to-blue-600 p-0.5">
                                <div
                                    className="absolute inset-0.5 bg-white rounded-[10px] flex items-center justify-center">
                                    <Image src={"/icons/icon-512.png"} width={32} height={32} alt="PixelBloom logo"/>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-zinc-900">PixelBloom</h2>
                                <p className="text-xs text-zinc-500">Wallpapers Reimagined</p>
                            </div>
                        </div>

                        <p className="text-zinc-600 text-sm">
                            The premier platform for artists to share and monetize their wallpaper designs while
                            providing users with stunning visuals for every device.
                        </p>

                        <div className="flex gap-4">
                            {SOCIAL_LINKS.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="h-10 w-10 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-600 transition-colors duration-200"
                                    aria-label={link.label}
                                >
                                    <link.icon className="h-5 w-5"/>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links columns - desktop */}
                    <div className="hidden md:block space-y-6">
                        <h3 className="font-semibold text-zinc-900">For Artists</h3>
                        <ul className="space-y-3">
                            {ARTISTS_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href}
                                          className="text-zinc-600 hover:text-orange-600 transition-colors duration-200 text-sm flex items-center gap-1 group">
                                        {link.label}
                                        <ArrowUpRight
                                            className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity"/>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="hidden md:block space-y-6">
                        <h3 className="font-semibold text-zinc-900">For Users</h3>
                        <ul className="space-y-3">
                            {USER_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href}
                                          className="text-zinc-600 hover:text-orange-600 transition-colors duration-200 text-sm flex items-center gap-1 group">
                                        {link.label}
                                        <ArrowUpRight
                                            className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity"/>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="hidden md:block space-y-6">
                        <h3 className="font-semibold text-zinc-900">Company</h3>
                        <ul className="space-y-3">
                            {COMPANY_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href}
                                          className="text-zinc-600 hover:text-orange-600 transition-colors duration-200 text-sm flex items-center gap-1 group">
                                        {link.label}
                                        <ArrowUpRight
                                            className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity"/>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile accordions */}
                    <div className="md:hidden space-y-4 col-span-1">
                        <div className="border-b border-zinc-100 pb-4">
                            <button
                                onClick={() => toggleSection('artists')}
                                className="w-full flex justify-between items-center"
                            >
                                <h3 className="font-semibold text-zinc-900">For Artists</h3>
                                <ChevronUp
                                    className={`h-5 w-5 text-zinc-400 transition-transform ${openSection === 'artists' ? 'rotate-0' : 'rotate-180'}`}/>
                            </button>

                            {openSection === 'artists' && (
                                <ul className="mt-4 space-y-3">
                                    {ARTISTS_LINKS.map((link) => (
                                        <li key={link.label}>
                                            <Link href={link.href}
                                                  className="text-zinc-600 hover:text-orange-600 transition-colors duration-200 text-sm">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="border-b border-zinc-100 pb-4">
                            <button
                                onClick={() => toggleSection('users')}
                                className="w-full flex justify-between items-center"
                            >
                                <h3 className="font-semibold text-zinc-900">For Users</h3>
                                <ChevronUp
                                    className={`h-5 w-5 text-zinc-400 transition-transform ${openSection === 'users' ? 'rotate-0' : 'rotate-180'}`}/>
                            </button>

                            {openSection === 'users' && (
                                <ul className="mt-4 space-y-3">
                                    {USER_LINKS.map((link) => (
                                        <li key={link.label}>
                                            <Link href={link.href}
                                                  className="text-zinc-600 hover:text-orange-600 transition-colors duration-200 text-sm">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="border-b border-zinc-100 pb-4">
                            <button
                                onClick={() => toggleSection('company')}
                                className="w-full flex justify-between items-center"
                            >
                                <h3 className="font-semibold text-zinc-900">Company</h3>
                                <ChevronUp
                                    className={`h-5 w-5 text-zinc-400 transition-transform ${openSection === 'company' ? 'rotate-0' : 'rotate-180'}`}/>
                            </button>

                            {openSection === 'company' && (
                                <ul className="mt-4 space-y-3">
                                    {COMPANY_LINKS.map((link) => (
                                        <li key={link.label}>
                                            <Link href={link.href}
                                                  className="text-zinc-600 hover:text-orange-600 transition-colors duration-200 text-sm">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className="mt-16 pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-zinc-500">
                        © {new Date().getFullYear()} PixelBloom Studio. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/cookies" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}