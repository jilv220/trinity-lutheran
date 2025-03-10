import { CustomLink } from "@/components/CustomLink";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
	BookOpen,
	Calendar,
	Clock,
	ExternalLink,
	Users,
	Video,
} from "lucide-react";
import { nanoid } from "nanoid";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Bible Studies | Trinity Lutheran Church - Richmond, B.C.",
	description:
		"Join our Bible studies at Trinity Lutheran Church in Richmond, BC. We offer various classes for all ages, both in-person and online.",
};

// Define Bible study types for type safety
type BibleStudy = {
	title: string;
	time: string;
	day: string;
	description: string;
	leader?: string;
	location?: string;
	isDropIn: boolean;
	isOnline?: boolean;
};

// Bible study data
const bibleStudies: BibleStudy[] = [
	{
		title: "Adult Bible Study",
		day: "Sunday",
		time: "9:30am",
		leader: "Pastor Harold",
		location: "Chapel",
		description:
			'Join up to over twenty other participants who gather each Sunday morning in the Chapel (the room next to the kitchen) for an enjoyable study and discussion. As with most of our classes at Trinity, this is a drop-in class for all visitors and members. See "Back to the Basics" above for our current topic.',
		isDropIn: true,
	},
	{
		title: "Men's Breakfast & Study",
		day: "Tuesday",
		time: "7:00am to 8:00am",
		location: "Chapel Room",
		description:
			"Meet in the Chapel Room for Breakfast, followed by a short Bible Study. Currently studying the Gospel of John.",
		isDropIn: true,
	},
	{
		title: "Ladies' Bible Study",
		day: "Wednesday",
		time: "10:00am",
		description: "Meet at 10:00am. Studying Gospel of John.",
		isDropIn: true,
	},
	{
		title: "Sunday School",
		day: "Sunday",
		time: "9:30am",
		description:
			"Sunday School classes begin at 9:30am on Sundays. For ages 3 to 12. Come and learn about God's love and how special you are to Him.",
		isDropIn: true,
	},
	{
		title: "Basic Christianity Class",
		day: "Varies",
		time: "Varies",
		description:
			"A formal 10-12 week introduction to Christianity class. This is not a drop-in class, as what is studied each week builds on what was learned in previous weeks. A new class begins once or twice each year depending on demand. If you would like to know more about Christianity and its basic teachings, this class is an excellent overview and introduction to the Christian faith! Whether you are a long time member, or, someone who is new and simply curious about Christianity, everyone is welcome! Please contact Pastor Harold to have your name put on the list for the next class.",
		isDropIn: false,
	},
	{
		title: "Confirmation Class",
		day: "Varies",
		time: "Varies",
		description:
			"This is a Family Class for youth and parents as youth prepare for Confirmation. This class is an overview of the entire Bible and Luther's Small Catechism. Upon completion of the class, the young confirmands confirm the faith they received at baptism and become Communicant Members of Trinity. Parents who do all the homework along with their son and daughter have been greatly enriched in their understanding of the Bible. All are welcome!",
		isDropIn: false,
	},
	{
		title: "Online Bible Studies",
		day: "Anytime",
		time: "Self-paced",
		description:
			"A number of free, fascinating, online video Bible Study presentations have been produced by the Lutheran Hour Ministries on the Men's Network.",
		isOnline: true,
		isDropIn: true,
	},
	{
		title: "How We Got the Bible",
		day: "Anytime",
		time: "Self-paced",
		description:
			"Ever wonder about the history of the Bible? When was each section written? How many authors wrote and how many languages were the original texts written in? How many versions and translations are there? When did the Bible get reorganized into Chapters and Verses? How do we know if today's versions of the Bible are true and faithful to the original writings? For answers to these questions and many more facts, watch the video series How We Got the Bible. Five online videos of approximately 6 to 10 minutes each.",
		isOnline: true,
		isDropIn: true,
	},
];

export default function BibleStudies() {
	// Separate classes by type for organizational purposes
	const regularClasses = bibleStudies.filter(
		(study) => !study.isOnline && study.isDropIn,
	);
	const specialClasses = bibleStudies.filter((study) => !study.isDropIn);
	const onlineResources = bibleStudies.filter((study) => study.isOnline);

	return (
		<div className="my-8 mx-4 max-w-4xl">
			<h1 className="pb-6 text-3xl text-[#4384b0] font-semibold leading-none tracking-tight">
				Bible Studies
			</h1>

			{/* Introduction section */}
			<div className="space-y-5 mb-8">
				<p className="text-base">
					All members and visitors are most welcome to drop-in and participate
					in the following. Most classes run from September to May/June, with
					exception of some holidays. All classes are free!
				</p>

				<div className="bg-secondary/30 p-4 rounded-md border-l-2 border-primary/60 italic">
					<p>
						The Confirmation and Basic Christianity classes are not drop-in as
						the material builds on what was learned in previous weeks. Please
						sign up at the Church Office.
					</p>
				</div>
			</div>

			{/* Regular classes section */}
			<div className="mb-10">
				<h2 className="text-2xl text-[#4384b0] font-semibold mb-4">
					Regular Bible Studies
				</h2>
				<div className="grid grid-cols-1 gap-6">
					{regularClasses.map((study) => (
						<Card key={nanoid()} className="border-l-2 border-l-[#9ec630]">
							<CardHeader className="pb-2">
								<CardTitle className="text-xl text-[#4384b0]">
									{study.title}
								</CardTitle>
								<div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-2">
									<div className="flex items-center">
										<Calendar className="h-4 w-4 mr-1 text-primary" />
										<span>{study.day}</span>
									</div>
									<div className="flex items-center">
										<Clock className="h-4 w-4 mr-1 text-primary" />
										<span>{study.time}</span>
									</div>
									{study.location && (
										<div className="flex items-center">
											<Users className="h-4 w-4 mr-1 text-primary" />
											<span>{study.location}</span>
										</div>
									)}
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-foreground">{study.description}</p>
								{study.leader && (
									<p className="mt-2 font-medium">Led by: {study.leader}</p>
								)}
								<div className="mt-3 text-sm text-muted-foreground">
									<span className="inline-flex items-center bg-secondary/30 px-2 py-1 rounded">
										<Users className="h-3.5 w-3.5 mr-1.5 text-primary/70" />
										Drop-in welcome
									</span>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>

			{/* Special classes section */}
			<div className="mb-10">
				<h2 className="text-2xl text-[#4384b0] font-semibold mb-4">
					Special Classes
				</h2>
				<div className="grid grid-cols-1 gap-6">
					{specialClasses.map((study) => (
						<Card key={nanoid()} className="border-l-2 border-l-[#568eb6]">
							<CardHeader className="pb-2">
								<CardTitle className="text-xl text-[#4384b0] flex items-center">
									<BookOpen className="h-5 w-5 mr-2 text-primary/70" />
									{study.title}
								</CardTitle>
								<div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
									<div className="flex items-center">
										<Calendar className="h-4 w-4 mr-1 text-primary" />
										<span>{study.day}</span>
									</div>
									<div className="flex items-center">
										<Clock className="h-4 w-4 mr-1 text-primary" />
										<span>{study.time}</span>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-foreground">{study.description}</p>
								<div className="mt-3 text-sm bg-secondary/30 px-3 py-2 rounded border-l-2 border-primary/60">
									<p className="font-medium">Registration required</p>
									<p className="mt-1">
										As this is a formal instruction class, please sign up with
										Pastor Harold at the Church Office.
									</p>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>

			{/* Online Resources section */}
			<div className="mb-10">
				<h2 className="text-2xl text-[#4384b0] font-semibold mb-4">
					Online Bible Resources
				</h2>
				<div className="grid grid-cols-1 gap-6">
					{onlineResources.map((resource) => (
						<Card key={nanoid()} className="border-l-2 border-l-muted">
							<CardHeader className="pb-2">
								<CardTitle className="text-xl text-[#4384b0]">
									{resource.title}
								</CardTitle>
								<div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
									<div className="flex items-center">
										<Clock className="h-4 w-4 mr-1 text-primary" />
										<span>{resource.time}</span>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-foreground">{resource.description}</p>
								{resource.title === "How We Got the Bible" && (
									<div className="mt-4">
										<p className="text-sm text-muted-foreground italic">
											To find videos, go to Men's Network link, select "View all
											46 items", then "View Alphabetically" and scroll down to
											"How We Got The Bible" and click on "Watch Videos".
										</p>
									</div>
								)}
								<div className="mt-4">
									<CustomLink
										href="https://www.lhm.org/men/"
										variant="prose"
										className="flex items-center"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Visit Lutheran Hour Ministries Men's Network (opens in new tab)"
									>
										<span>Visit Lutheran Hour Ministries Men's Network</span>
										<ExternalLink className="h-3 w-3 ml-1" aria-hidden="true" />
									</CustomLink>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>

			{/* Additional Information Section */}
			<div className="mt-12 p-6 bg-secondary/20 rounded-lg border border-muted">
				<h2 className="text-xl text-foreground font-semibold mb-4">
					Additional Information
				</h2>
				<div className="space-y-4 text-muted-foreground">
					<p>
						For more information about any of our Bible studies or to register
						for special classes, please contact the church office.
					</p>
					<p>
						If you're interested in our beliefs and teachings, please visit our
						<CustomLink href="/our-beliefs" variant="prose" className="mx-1">
							Our Beliefs
						</CustomLink>
						page to learn more about the 15 Key Elements of our Christian Faith.
					</p>
					<p>
						Most classes operate from September through May, with some
						exceptions for holidays.
					</p>
				</div>
			</div>
		</div>
	);
}
