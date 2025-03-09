"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "./ui/sidebar";

// Move data outside component to avoid recreation on each render
const data = [
	{
		label: "Home",
		href: "/",
		external: false,
	},
	{
		label: "Our Beliefs",
		href: "/our-beliefs",
		external: false,
	},
	{
		label: "中文部（Chinese）",
		href: "https://chinese.tlc-lcc.ca/",
		external: true,
	},
	{
		label: "Trinity's Little Children Centre",
		href: "/trinitys-little-children-centre",
		external: false,
	},
	{
		label: "Bible Studies",
		href: "/bible-studies",
		external: false,
	},
	{
		label: "Library",
		href: "/library",
		external: false,
	},
	{
		label: "Links",
		href: "/links",
		external: false,
	},
	{
		label: "Contact Us",
		href: "/contact-us",
		external: false,
	},
	{
		label: "Volunteer Resources",
		href: "/volunteer-resources",
		external: false,
	},
] as const;

export default function AppSidebar() {
	const pathname = usePathname();

	return (
		<Sidebar className="top-[--header-height] !h-[calc(100svh-var(--header-height))]">
			<SidebarHeader />
			<SidebarContent className="mx-2">
				<SidebarMenu>
					{data.map((item) => (
						<SidebarMenuItem key={item.label}>
							<SidebarMenuButton asChild isActive={pathname === item.href}>
								<Link
									href={item.href}
									target={item.external ? "_blank" : "_self"}
								>
									{item.label}
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarContent>
		</Sidebar>
	);
}
