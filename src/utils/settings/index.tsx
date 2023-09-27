import { SettingItemType } from "@/@types";
import Wallet from "@/components/navbar/settings/_prepages/wallet";
import SettingPage from "@/components/navbar/settings/_prepages/settings";
import {
  Compass,
  CopyCheck,
  Eye,
  Microscope,
  Rotate3D,
  Settings,
  Users2,
  WalletCards,
} from "lucide-react";
import General from "@/components/navbar/settings/_prepages/general";
import Members from "@/components/navbar/settings/_prepages/members";
import DomainAndAnalytics from "@/components/navbar/settings/_prepages/domain-and-analytics";
import Categories from "@/components/navbar/settings/_prepages/categories";
import Navigation from "@/components/navbar/settings/_prepages/navigation";
import BlogTransfer from "@/components/navbar/settings/_prepages/blog-transfer";

interface IconArgs {
  className: string;
  width?: string;
  height?: string;
  strokeWidth?: string;
}

export const data: SettingItemType[] = [
  {
    preTitle: true,
    title: "Account",
  },
  {
    title: "Wallet",
    isTitle: true,
    path: "/wallet",
    Component: Wallet,
    icon: ({ className }: IconArgs) => (
      <WalletCards
        width="24"
        height="24"
        strokeWidth="1.5"
        className={className}
      />
    ),
  },
  {
    title: "Settings",
    isTitle: true,
    path: "/settings",
    Component: SettingPage,
    icon: ({ className }: { className: string }) => (
      <Settings
        strokeWidth="1.5"
        width="24"
        height="24"
        className={className}
      />
    ),
  },
  {
    title: "Blog",
    preTitle: true,
    Component: Wallet,
  },
  {
    title: "General",
    isTitle: true,
    path: "/general",
    Component: General,
    icon: ({ className }: { className: string }) => (
      <Eye width="18" height="18" className={className} strokeWidth="1.5" />
    ),
    size: "small",
  },
  {
    title: "Members",
    isTitle: true,
    Component: Members,
    path: "/members",
    icon: ({ className }: { className: string }) => (
      <Users2 width="18" height="18" strokeWidth="1.5" className={className} />
    ),
    size: "small",
  },
  {
    title: "Domain & Analytics",
    isTitle: true,
    Component: DomainAndAnalytics,
    path: "/domain-and-analytics",
    icon: ({ className }: { className: string }) => (
      <Microscope
        width="18"
        height="18"
        strokeWidth="1.5"
        className={className}
      />
    ),
    size: "small",
  },
  {
    title: "Categories",
    isTitle: true,
    Component: Categories,
    path: "/categories",
    icon: ({ className }: { className: string }) => (
      <CopyCheck
        width="18"
        height="18"
        strokeWidth="1.5"
        className={className}
      />
    ),
    size: "small",
  },
  {
    title: "Navigation",
    isTitle: true,
    Component: Navigation,
    path: "/navigation",
    icon: ({ className }: { className: string }) => (
      <Compass width="18" height="18" strokeWidth="1.5" className={className} />
    ),
    size: "small",
  },
  {
    title: "Blog Transfer",
    isTitle: true,
    Component: BlogTransfer,
    path: "/blog-transfer",
    icon: ({ className }: { className: string }) => (
      <Rotate3D
        width="18"
        height="18"
        strokeWidth="1.5"
        className={className}
      />
    ),
    size: "small",
  },
];

export const footer_data: SettingItemType[] = [
  {
    title: "Support & Feedback",
    isTitle: true,
    size: "small",
  },
  {
    title: "Email Us",
    isTitle: true,
    size: "small",
  },
  {
    title: "Terms and Conditions",
    isTitle: true,
    size: "small",
  },
  {
    title: "Privacy Policy",
    isTitle: true,
    size: "small",
  },
];
