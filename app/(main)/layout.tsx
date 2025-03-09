import AppSidebar from "@/components/AppSidebar";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import InfoPanel from "@/components/InfoPanel";
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
						<div className="relative flex flex-col lg:flex-row min-h-screen w-full max-w-7xl mx-auto gap-4">
							{/* Main content */}
							<div className="flex-1">{children}</div>

							{/* Info Panel (sidebar on desktop, below content on mobile) */}
							<InfoPanel className="order-2 lg:order-1" />
						</div>
						<Footer />
					</SidebarInset>
				</div>
			</SidebarProvider>
		</div>
	);
}
