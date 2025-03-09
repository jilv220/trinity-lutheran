import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import AppSidebar from "@/components/Navbar";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="[--header-height:calc(theme(spacing.20))]">
			<SidebarProvider className="flex flex-col">
				<Header>
					<SidebarTrigger className="ml-2 mr-1 w-8 h-8" />
				</Header>
				<div className="flex flex-1">
					<AppSidebar />
					<SidebarInset>
						<div className="relative flex flex-col min-h-screen">
							{children}
						</div>
						<Footer />
					</SidebarInset>
				</div>
			</SidebarProvider>
		</div>
	);
}
