"use client";

import {
	Banknote,
	Book,
	CalendarDays,
	ExternalLink,
	FileText,
	Globe,
	Headphones,
	Home,
	Library,
	Link2,
	Mail,
	Users,
} from "lucide-react";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarSeparator,
} from "./ui/sidebar";

type NavItem = {
	label: string;
	href: string;
	external: boolean;
	icon: React.ReactNode;
};

// Navigation data with icons for visual enhancement
const navItems: NavItem[] = [
	{
		label: "Home",
		href: "/",
		external: false,
		icon: <Home className="text-primary" />,
	},
	{
		label: "Our Beliefs",
		href: "/our-beliefs",
		external: false,
		icon: <FileText className="text-primary" />,
	},
	{
		label: "中文部（Chinese）",
		href: "https://chinese.tlc-lcc.ca/",
		external: true,
		icon: <Globe className="text-primary" />,
	},
	{
		label: "Bible Studies",
		href: "/bible-studies",
		external: false,
		icon: <Book className="text-primary" />,
	},
	{
		label: "Library",
		href: "/library",
		external: false,
		icon: <Library className="text-primary" />,
	},
	{
		label: "Links",
		href: "/links",
		external: false,
		icon: <Link2 className="text-primary" />,
	},
];

// New resource items section
const resourceItems: NavItem[] = [
	{
		label: "Sermons at Trinity",
		href: "/tlcsermons275.pdf",
		external: true,
		icon: <Headphones className="text-primary" />,
	},
	{
		label: "Monthly Calendar",
		href: "/tlcmonthlycalendars.pdf",
		external: true,
		icon: <CalendarDays className="text-primary" />,
	},
	{
		label: "Donations",
		href: "/blog/giving-to-trinitys-ministry",
		external: false,
		icon: <Banknote className="text-primary" />,
	},
];

export default function AppSidebar() {
	const pathname = usePathname();

	return (
		<Sidebar className="top-[--header-height] !h-[calc(100svh-var(--header-height))]">
			<SidebarHeader />

			<SidebarContent className="px-2">
				{/* Main Navigation Items */}
				<SidebarMenu>
					{navItems.map((item) => (
						<SidebarMenuItem key={nanoid()}>
							<SidebarMenuButton
								asChild
								isActive={pathname === item.href}
								className={`transition-all duration-200 text-sm text-[0.925rem] ${
									pathname === item.href
										? "bg-primary/10 font-medium"
										: "hover:bg-primary/5"
								}`}
							>
								<Link
									href={item.href}
									target={item.external ? "_blank" : undefined}
									rel={item.external ? "noopener noreferrer" : undefined}
									className="flex items-center gap-3"
									aria-label={`Navigate to ${item.label}${item.external ? " (opens in new tab)" : ""}`}
								>
									{/* Icon on the left */}
									{item.icon}

									{/* Navigation label */}
									<span>{item.label}</span>

									{/* External link indicator */}
									{item.external && (
										<ExternalLink
											className="ml-auto h-3 w-3 text-muted-foreground"
											aria-hidden="true"
										/>
									)}
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>

				{/* Separator between main navigation and resources section */}
				<SidebarSeparator className="my-2" />

				{/* Resources Section Title */}
				<SidebarGroupLabel className="px-3 text-muted-foreground">
					Resources
				</SidebarGroupLabel>

				{/* Resources Items */}
				<SidebarMenu>
					{resourceItems.map((item) => (
						<SidebarMenuItem key={nanoid()}>
							<SidebarMenuButton
								asChild
								isActive={pathname === item.href}
								className={`transition-all duration-200 text-sm text-[0.925rem] ${
									pathname === item.href
										? "bg-primary/10 font-medium"
										: "hover:bg-primary/5"
								}`}
							>
								<Link
									href={item.href}
									target={item.external ? "_blank" : undefined}
									rel={item.external ? "noopener noreferrer" : undefined}
									className="flex items-center gap-3"
									aria-label={`Navigate to ${item.label}${item.external ? " (opens in new tab)" : ""}`}
								>
									{/* Icon on the left */}
									{item.icon}

									{/* Navigation label */}
									<span>{item.label}</span>

									{/* External link indicator */}
									{item.external && (
										<ExternalLink
											className="ml-auto h-3 w-3 text-muted-foreground"
											aria-hidden="true"
										/>
									)}
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarContent>
		</Sidebar>
	);
}
