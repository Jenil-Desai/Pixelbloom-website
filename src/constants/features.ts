import { Upload, Download, Palette, TrendingUp, DollarSign, Smartphone, LucideIcon } from "lucide-react";

type Feature = {
  title: string;
  description: string;
  Icon: LucideIcon;
  iconBgColor: string;
  iconColor: string;
};

export const FEATURES: Feature[] = [
  {
    title: "Easy Uploads",
    description: "Simple drag-and-drop interface to upload your wallpapers in seconds.",
    Icon: Upload,
    iconBgColor: "bg-[#318BA9]/20",
    iconColor: "text-[#318BA9]",
  },
  {
    title: "Global Reach",
    description: "Get your art in front of millions of users across our mobile app network.",
    Icon: TrendingUp,
    iconBgColor: "bg-[#E67E22]/20",
    iconColor: "text-[#E67E22]",
  },
  {
    title: "Monetization",
    description: "Earn revenue through our premium subscription model and artist payouts.",
    Icon: DollarSign,
    iconBgColor: "bg-orange-500/20",
    iconColor: "text-orange-400",
  },
  {
    title: "Artist Profile",
    description: "Showcase your portfolio with a customizable artist profile and bio.",
    Icon: Palette,
    iconBgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    title: "Mobile Optimized",
    description: "Your art is perfectly formatted for all mobile devices and screen sizes.",
    Icon: Smartphone,
    iconBgColor: "bg-pink-500/20",
    iconColor: "text-pink-400",
  },
  {
    title: "Download Stats",
    description: "Track your success with detailed analytics on downloads and engagement.",
    Icon: Download,
    iconBgColor: "bg-orange-500/20",
    iconColor: "text-orange-400",
  },
];
