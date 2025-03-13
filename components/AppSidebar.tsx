"use client";

import {
	Banknote,
	Book,
	BookOpen,
	CalendarDays,
	ExternalLink,
	FileText,
	Globe,
	Headphones,
	Home,
	Library,
	Link2,
} from "lucide-react";
import { nanoid } from "nanoid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ComponentProps, useEffect } from "react";
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
	useSidebar,
} from "./ui/sidebar";

type NavItem = {
	label: string;
	href: string;
	external: boolean;
	icon: React.ReactNode;
};

// Main navigation items
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
		icon: <BookOpen className="text-primary" />,
	},
	{
		label: "Links",
		href: "/links",
		external: false,
		icon: <Link2 className="text-primary" />,
	},
];

// Library section items
const libraryItems: NavItem[] = [
	{
		label: "Trinity Library",
		href: "/library",
		external: false,
		icon: <Library className="text-primary" />,
	},
	{
		label: "Library Items",
		href: "/library-items",
		external: false,
		icon: <Book className="text-primary" />,
	},
];

// Resource items section
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

export default function AppSidebar({
	...props
}: ComponentProps<typeof Sidebar>) {
	const pathname = usePathname();
	const { setOpenMobile } = useSidebar();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setOpenMobile(false);
	}, [pathname]);

	// Helper function to render menu items
	const renderMenuItems = (items: NavItem[]) => {
		return items.map((item) => (
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
		));
	};

	return (
		<Sidebar
			className="top-[--header-height] !h-[calc(100svh-var(--header-height))]"
			{...props}
		>
			<SidebarHeader />

			<SidebarContent className="px-2">
				{/* Main Navigation Items */}
				<SidebarMenu>{renderMenuItems(navItems)}</SidebarMenu>

				{/* Separator between main navigation and library section */}
				<SidebarSeparator className="my-2" />

				{/* Library Section Title */}
				<SidebarGroupLabel className="px-3 text-muted-foreground">
					Library
				</SidebarGroupLabel>

				{/* Library Items */}
				<SidebarMenu>{renderMenuItems(libraryItems)}</SidebarMenu>

				{/* Separator between library and resources section */}
				<SidebarSeparator className="my-2" />

				{/* Resources Section Title */}
				<SidebarGroupLabel className="px-3 text-muted-foreground">
					Resources
				</SidebarGroupLabel>

				{/* Resources Items */}
				<SidebarMenu>{renderMenuItems(resourceItems)}</SidebarMenu>
			</SidebarContent>
		</Sidebar>
	);
}
