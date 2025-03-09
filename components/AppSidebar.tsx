"use client";

import {
	Book,
	ExternalLink,
	FileText,
	Globe,
	Home,
	Library,
	Link2,
	Mail,
	Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
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
		label: "Trinity's Little Children Centre",
		href: "/trinitys-little-children-centre",
		external: false,
		icon: <Users className="text-primary" />,
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
	{
		label: "Contact Us",
		href: "/contact-us",
		external: false,
		icon: <Mail className="text-primary" />,
	},
	{
		label: "Volunteer Resources",
		href: "/volunteer-resources",
		external: false,
		icon: <Users className="text-primary" />,
	},
];

export default function AppSidebar() {
	const pathname = usePathname();

	return (
		<Sidebar className="top-[--header-height] !h-[calc(100svh-var(--header-height))]">
			<SidebarHeader />

			<SidebarContent className="px-2">
				<SidebarMenu>
					{navItems.map((item) => (
						<SidebarMenuItem key={item.label}>
							<SidebarMenuButton
								asChild
								isActive={pathname === item.href}
								className={`transition-all duration-200 ${
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
