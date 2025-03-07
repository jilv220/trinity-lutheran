import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { BookOpenIcon, CrossIcon, HeartIcon } from "lucide-react";

export default function Home() {
	return (
		<>
			<div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
				{/* Left Sidebar Menu with Lutheran colors (deep blue instead of green) */}
				<aside className="w-full md:w-1/4 bg-blue-900 text-white p-6">
					<div className="flex items-center gap-2 mb-6">
						<CrossIcon className="h-8 w-8" />
						<h1 className="text-2xl font-bold">Trinity Lutheran Church</h1>
					</div>
					<nav className="space-y-4">
						<Button
							variant="ghost"
							className="w-full justify-start text-white hover:bg-blue-800"
						>
							Home
						</Button>
						<Button
							variant="ghost"
							className="w-full justify-start text-white hover:bg-blue-800"
						>
							Our Lutheran Faith
						</Button>
						<Button
							variant="ghost"
							className="w-full justify-start text-white hover:bg-blue-800"
						>
							中文部 (Chinese)
						</Button>
						<Button
							variant="ghost"
							className="w-full justify-start text-white hover:bg-blue-800"
						>
							Trinity's Little Children
						</Button>
						<Button
							variant="ghost"
							className="w-full justify-start text-white hover:bg-blue-800"
						>
							Bible Studies
						</Button>
						<Button
							variant="ghost"
							className="w-full justify-start text-white hover:bg-blue-800"
						>
							Worship Times
						</Button>
						<Button
							variant="ghost"
							className="w-full justify-start text-white hover:bg-blue-800"
						>
							Catechism Classes
						</Button>
						<Button
							variant="ghost"
							className="w-full justify-start text-white hover:bg-blue-800"
						>
							Community Outreach
						</Button>
						<Button
							variant="ghost"
							className="w-full justify-start text-white hover:bg-blue-800"
						>
							Facebook Page
						</Button>
						<Button
							variant="ghost"
							className="w-full justify-start text-white hover:bg-blue-800"
						>
							Library
						</Button>
						<Button
							variant="ghost"
							className="w-full justify-start text-white hover:bg-blue-800"
						>
							Contact Us
						</Button>
						<Button
							variant="ghost"
							className="w-full justify-start text-white hover:bg-blue-800"
						>
							Archives
						</Button>
						<Button
							variant="ghost"
							className="w-full justify-start text-white hover:bg-blue-800"
						>
							Volunteer Opportunities
						</Button>
						<Button
							variant="ghost"
							className="w-full justify-start text-white hover:bg-blue-800"
						>
							Sermons & Resources
						</Button>
						<Button
							variant="ghost"
							className="w-full justify-start text-white hover:bg-blue-800"
						>
							Monthly Calendars
						</Button>
						<Button
							variant="ghost"
							className="w-full justify-start text-white hover:bg-blue-800"
						>
							Stewardship & Offerings
						</Button>
					</nav>
				</aside>

				{/* Main Content */}
				<main className="w-full md:w-3/4 p-6">
					<header className="text-center mb-8">
						<div className="flex justify-center mb-4">
							<div className="h-24 w-24 relative">
								<div className="absolute inset-0 bg-blue-800 rounded-full" />
								<CrossIcon className="absolute inset-0 m-auto h-16 w-16 text-white" />
							</div>
						</div>
						<h2 className="text-4xl font-semibold text-blue-900">
							"By Grace Alone, Through Faith Alone"
						</h2>
						<h1 className="text-3xl font-bold mt-2">TRINITY LUTHERAN CHURCH</h1>
						<p className="text-gray-600 mt-2">
							7100 Granville Avenue, Richmond, BC | 604 278 5766 (English) | 604
							278 6827 (Chinese)
						</p>
					</header>

					<div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-200">
						<p className="text-center italic">
							"For it is by grace you have been saved, through faith—and this is
							not from yourselves, it is the gift of God—not by works, so that
							no one can boast." — Ephesians 2:8-9
						</p>
					</div>

					<section className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Welcome Section */}
						<Card className="border-t-4 border-t-blue-700">
							<CardHeader>
								<div className="flex items-center gap-2">
									<HeartIcon className="h-5 w-5 text-blue-700" />
									<CardTitle>Welcome</CardTitle>
								</div>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-base">
									Trinity's vision is to "know Christ and make Him known". There
									are many opportunities to "know Christ" through Worship, Bible
									Classes and Sunday School. There are also many opportunities
									to help "make Him known" through Fellowship Events, Community
									Events, Christian Hospitality, and as "Conversation Partners"
									in ESL Bible Classes. All are welcome to join in all
									activities and take part in Trinity's vision.
								</CardDescription>
								<p className="mt-4">
									We have an awesome God who loves us unconditionally. What
									better way to honour Him then to worship Him, learn more about
									His love, give thanks for the gift of His precious Son who
									gave His life so we could inherit eternal life, and help
									others learn more about Him.
								</p>
								<p className="mt-2 font-semibold">
									May God bless you today, and every day!
								</p>
							</CardContent>
						</Card>

						{/* Sunday Worship Section */}
						<Card className="border-t-4 border-t-blue-700">
							<CardHeader>
								<div className="flex items-center gap-2">
									<BookOpenIcon className="h-5 w-5 text-blue-700" />
									<CardTitle>Sunday Worship & Communion</CardTitle>
								</div>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-base">
									<strong>NOTE:</strong> In-Person Worship Services with Holy
									Communion have resumed. All may attend. Masks are optional but
									please respect the space of others.
								</CardDescription>
								<ul className="list-disc pl-5 mt-2">
									<li>Cantonese with Pastor Zhang - Sundays at 9:30am</li>
									<li>
										Worship in Mandarin with Pastor Zhang - Sundays at 9:30am
									</li>
									<li>
										Divine Service in English with Pastor Brian - Sundays at
										11:00am
									</li>
								</ul>
								<div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
									<h4 className="font-semibold">Weekly Offerings</h4>
									<ul className="list-disc pl-5 mt-1">
										<li>Adult Bible Class - Sundays at 9:30am</li>
										<li>Sunday School (Ages 3-12) - Sundays at 9:30am</li>
										<li>
											Confirmation Classes (Ages 12-14) - Wednesdays at 5:00pm
										</li>
										<li>Luther's Small Catechism Study - Tuesdays at 7:00pm</li>
									</ul>
								</div>
							</CardContent>
						</Card>

						{/* What We Believe Section */}
						<Card className="col-span-2 border-t-4 border-t-blue-700">
							<CardHeader>
								<div className="flex items-center gap-2">
									<CrossIcon className="h-5 w-5 text-blue-700" />
									<CardTitle>Our Lutheran Faith</CardTitle>
								</div>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-base">
									As a congregation of the Lutheran Church, we subscribe to the
									Book of Concord of 1580, which includes Luther's Small and
									Large Catechisms, the Augsburg Confession, and other
									confessional writings. We emphasize the "Three Solas" of
									Lutheran theology:
								</CardDescription>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
									<div className="p-4 bg-blue-50 rounded text-center">
										<h3 className="font-bold text-blue-800">Sola Scriptura</h3>
										<p className="mt-1">Scripture Alone</p>
									</div>
									<div className="p-4 bg-blue-50 rounded text-center">
										<h3 className="font-bold text-blue-800">Sola Gratia</h3>
										<p className="mt-1">Grace Alone</p>
									</div>
									<div className="p-4 bg-blue-50 rounded text-center">
										<h3 className="font-bold text-blue-800">Sola Fide</h3>
										<p className="mt-1">Faith Alone</p>
									</div>
								</div>
								<p className="mt-4">
									For a complete statement of our beliefs, visit our "Lutheran
									Faith" page or join us for our "Introduction to Lutheranism"
									class held quarterly.
								</p>
							</CardContent>
						</Card>
					</section>
				</main>
			</div>
		</>
	);
}
