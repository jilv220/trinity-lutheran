"use client";

import { useSidebar } from "@/components/ui/sidebar";
import Link from "next/link";

export function Header({ children }: { children?: React.ReactNode }) {
	const { isMobile } = useSidebar();

	return (
		<header className="flex fixed top-0 z-50 w-full items-center border-b-[6px] bg-background border-primary">
			<div className="flex h-[--header-height] w-full items-center space-x-2 pr-5">
				<div className="flex-grow">
					<nav className="flex items-center space-x-2 font-medium text-base text-foreground/60 md:justify-start">
						{isMobile ? children : null}
						<Link href="/" className="text-2xl sm:text-4xl font-bold ml-3">
							<span className="text-[#4384b0]">trinity</span>
							<span className="text-[#9ec630]">lutheran</span>
							<span className="text-[#bfbfbf]">church</span>
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
}
