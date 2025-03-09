"use client";

import { WORSHIP_PASTORS_INFO } from "@/app/config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
	BookOpen,
	Calendar,
	Clock,
	ExternalLink,
	Info,
	Users,
	Video,
} from "lucide-react";
import { nanoid } from "nanoid";
import Link from "next/link";

// Define types for bible classes and staff members
interface BibleClass {
	day: string;
	time: string;
	type: "IN-PERSON" | "ONLINE (ZOOM)";
	name: string;
	language: string;
}

interface StaffMember {
	name: string;
	title: string;
}

// Bible class schedule data
const BIBLE_CLASSES: BibleClass[] = [
	{
		day: "Sundays",
		time: "9:30am",
		type: "IN-PERSON",
		name: "Sunday School",
		language: "English",
	},
	{
		day: "Sundays",
		time: "9:30am",
		type: "IN-PERSON",
		name: "Youth Bible Class",
		language: "English",
	},
	{
		day: "Sundays",
		time: "9:30am",
		type: "IN-PERSON",
		name: "Adult Bible Class",
		language: "English",
	},
	{
		day: "Sundays",
		time: "11:15am",
		type: "ONLINE (ZOOM)",
		name: "Adult Bible Class",
		language: "Mandarin",
	},
	{
		day: "Wednesdays",
		time: "10:00am",
		type: "IN-PERSON",
		name: "Adult Bible Class",
		language: "English",
	},
	{
		day: "Thursdays",
		time: "7:00pm",
		type: "ONLINE (ZOOM)",
		name: "Adult Bible Class",
		language: "English",
	},
	{
		day: "Fridays",
		time: "2:20pm",
		type: "ONLINE (ZOOM)",
		name: "Bible Study",
		language: "Mandarin",
	},
];

// Staff member data
const STAFF_MEMBERS: StaffMember[] = [
	{ name: "Pastor Brian Falkenholt", title: "Pastor - English Ministries" },
	{ name: "Pastor Wayne Zhang", title: "Pastor - Chinese Ministries" },
	{ name: "Adrianna Blitterswyk", title: "Youth Director" },
];

interface InfoPanelProps {
	className?: string;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ className }) => {
	return (
		<aside
			className={cn(
				"flex flex-col space-y-4 w-full lg:w-80 px-4 py-6",
				className,
			)}
			aria-label="Worship Information"
		>
			{/* Worship Times Card */}
			<Card className="border-t-4 border-t-[#4384b0]">
				<CardHeader className="pb-2">
					<CardTitle className="flex items-center text-lg text-[#4384b0]">
						<Calendar className="h-5 w-5 mr-2" aria-hidden="true" />
						Sunday Worship
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="text-sm space-y-4">
						<div className="p-3 bg-secondary/50 rounded-md">
							<p className="font-semibold text-foreground">
								NOTE: In-Person Worship Services have resumed.
							</p>
							<p className="text-muted-foreground mt-1">
								All may attend. Masks are optional but please respect the space
								of others.
							</p>
						</div>

						{WORSHIP_PASTORS_INFO.map((pastor, index) => (
							<div key={nanoid(index)} className="space-y-1 pb-2">
								<h3 className="font-medium">Worship in {pastor.language}</h3>
								<div className="flex gap-2 items-center text-muted-foreground">
									<Clock
										className="h-4 w-4 text-[#9ec630]"
										aria-hidden="true"
									/>
									<span>
										{pastor.worshipTime} with {pastor.name}
									</span>
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>

			{/* Bible Classes Card */}
			<Card className="border-t-4 border-t-[#9ec630]">
				<CardHeader className="pb-2">
					<CardTitle className="flex items-center text-lg text-[#9ec630]">
						<BookOpen className="h-5 w-5 mr-2" aria-hidden="true" />
						Bible Classes
					</CardTitle>
				</CardHeader>
				<CardContent className="text-sm">
					<div className="flex justify-between items-center">
						<p>Everyone Welcome!</p>
						<Link
							href="/bible-studies"
							className="text-[#4384b0] font-bold hover:text-primary hover:underline flex items-center"
							aria-label="More information about Bible classes"
						>
							<span>more info</span>
							<ExternalLink className="h-3 w-3 ml-1" aria-hidden="true" />
						</Link>
					</div>

					<div className="mt-3">
						{/* Group classes by day */}
						{Array.from(
							new Set(BIBLE_CLASSES.map((cls) => `${cls.day} - ${cls.time}`)),
						).map((dayTime) => {
							const [day, time] = dayTime.split(" - ");
							const classes = BIBLE_CLASSES.filter(
								(cls) => cls.day === day && cls.time === time,
							);
							const type = classes[0].type;

							return (
								<div key={dayTime} className="mb-4">
									<h3 className="font-medium text-foreground">
										{day} at {time}
									</h3>
									<div className="flex items-center text-muted-foreground text-xs mb-1">
										{type === "IN-PERSON" ? (
											<>
												<Users
													className="h-3.5 w-3.5 text-[#4384b0] mr-1"
													aria-hidden="true"
												/>{" "}
												IN-PERSON:
											</>
										) : (
											<>
												<Video
													className="h-3.5 w-3.5 text-[#4384b0] mr-1"
													aria-hidden="true"
												/>{" "}
												ONLINE (ZOOM):
											</>
										)}
									</div>
									<ul className="pl-4">
										{classes.map((cls, idx) => (
											<li key={nanoid(idx)} className="text-muted-foreground">
												{cls.name}{" "}
												<span className="italic">({cls.language})</span>
											</li>
										))}
									</ul>
								</div>
							);
						})}
					</div>

					<div className="mt-3 p-3 bg-secondary/50 rounded-md">
						<p className="font-medium text-foreground flex items-start">
							<Info
								className="h-4 w-4 mr-1 mt-0.5 text-[#4384b0] flex-shrink-0"
								aria-hidden="true"
							/>
							Classes are offered as we gradually re-open
						</p>
						<ul className="mt-2 text-muted-foreground">
							<li>• ESL Bible class</li>
							<li>• Thursday Parent & Toddlers Play Group</li>
							<li className="mt-1">will resume at a later date.</li>
						</ul>
						<p className="mt-2 text-muted-foreground font-medium">
							Most classes operate September through May.
						</p>
					</div>
				</CardContent>
			</Card>

			{/* Staff Members Card */}
			<Card className="border-t-4 border-t-[#bfbfbf]">
				<CardHeader className="pb-2">
					<CardTitle className="flex items-center text-lg text-[#bfbfbf]">
						<Users className="h-5 w-5 mr-2" aria-hidden="true" />
						Our Staff
					</CardTitle>
				</CardHeader>
				<CardContent className="text-sm">
					<div className="space-y-3">
						{STAFF_MEMBERS.map((staff, idx) => (
							<div key={nanoid(idx)} className="pb-2">
								<h3 className="font-medium text-foreground">{staff.name}</h3>
								<p className="text-muted-foreground">{staff.title}</p>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</aside>
	);
};

export default InfoPanel;
