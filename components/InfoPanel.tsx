"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
	BookOpen,
	Calendar,
	Clock,
	ExternalLink,
	Info,
	Mail,
	Users,
	Video,
} from "lucide-react";
import { nanoid } from "nanoid";
import Link from "next/link";
import { CustomLink } from "./CustomLink";

// Define types for Bible classes and staff members
type BibleClassType = "IN-PERSON" | "ONLINE (ZOOM)";

interface BibleClass {
	day: string;
	time: string;
	type: BibleClassType;
	name: string;
	language: string;
}

interface StaffMember {
	name: string;
	title: string;
}

interface CardProps {
	title: string;
	icon: React.ReactNode;
	borderColor: string;
	textColor: string;
	children: React.ReactNode;
}

// InfoCard component for consistent card styling and structure
const InfoCard = ({
	title,
	icon,
	borderColor,
	textColor,
	children,
}: CardProps) => (
	<Card className={`border-t-4 ${borderColor}`}>
		<CardHeader className="pb-2">
			<CardTitle className={`flex items-center text-lg ${textColor}`}>
				{icon}
				{title}
			</CardTitle>
		</CardHeader>
		<CardContent>{children}</CardContent>
	</Card>
);

// WorshipTimesCard component for worship schedule information
const WorshipTimesCard = () => {
	const WORSHIP_PASTORS_INFO = [
		{
			name: "Pastor Zhang",
			worshipTime: "9:30am",
			language: "Mandarin",
		},
		{
			name: "Pastor Brian",
			worshipTime: "11:00am",
			language: "English",
		},
	];

	return (
		<InfoCard
			title="Sunday Worship"
			icon={<Calendar className="h-5 w-5 mr-2" aria-hidden="true" />}
			borderColor="border-t-[#4384b0]"
			textColor="text-[#4384b0]"
		>
			<div className="text-sm space-y-4">
				<div className="p-3 bg-secondary/50 rounded-md">
					<p className="font-semibold text-foreground">
						NOTE: In-Person Worship Services have resumed.
					</p>
					<p className="text-muted-foreground mt-1">
						All may attend. Masks are optional but please respect the space of
						others.
					</p>
				</div>

				{WORSHIP_PASTORS_INFO.map((pastor) => (
					<div key={nanoid()} className="space-y-1 pb-2">
						<h3 className="font-medium">Worship in {pastor.language}</h3>
						<div className="flex gap-2 items-center text-muted-foreground">
							<Clock className="h-4 w-4 text-[#9ec630]" aria-hidden="true" />
							<span>
								{pastor.worshipTime} with {pastor.name}
							</span>
						</div>
					</div>
				))}
			</div>
		</InfoCard>
	);
};

// BibleClassTypeIndicator component for showing class type (in-person or online)
const BibleClassTypeIndicator = ({ type }: { type: BibleClassType }) => (
	<div className="flex items-center text-muted-foreground text-xs mb-1">
		{type === "IN-PERSON" ? <>IN-PERSON:</> : <>ONLINE (ZOOM):</>}
	</div>
);

// BibleClassesCard component for Bible class information
const BibleClassesCard = () => {
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

	// Group classes by day and time
	const groupedClasses = BIBLE_CLASSES.reduce<Record<string, BibleClass[]>>(
		(groups, cls) => {
			const key = `${cls.day} - ${cls.time}`;
			if (!groups[key]) {
				groups[key] = [];
			}
			groups[key].push(cls);
			return groups;
		},
		{},
	);

	return (
		<InfoCard
			title="Bible Classes"
			icon={<BookOpen className="h-5 w-5 mr-2" aria-hidden="true" />}
			borderColor="border-t-[#9ec630]"
			textColor="text-[#9ec630]"
		>
			<div className="text-sm">
				<div className="flex justify-between items-center">
					<p>Everyone Welcome!</p>
					<Link
						href="/bible-studies"
						className="text-[#4384b0] hover:text-primary hover:underline flex items-center"
						aria-label="More information about Bible classes"
					>
						<span>more info</span>
						<ExternalLink className="h-3 w-3 ml-1" aria-hidden="true" />
					</Link>
				</div>

				<div className="mt-3">
					{Object.entries(groupedClasses).map(([dayTime, classes]) => {
						const [day, time] = dayTime.split(" - ");
						const type = classes[0].type;

						return (
							<div key={nanoid()} className="mb-4">
								<h3 className="font-medium text-foreground">
									{day} at {time}
								</h3>
								<BibleClassTypeIndicator type={type} />
								<ul className="pl-4">
									{classes.map((cls) => (
										<li key={nanoid()} className="text-muted-foreground">
											{cls.name}{" "}
											<span className="italic">({cls.language})</span>
										</li>
									))}
								</ul>
							</div>
						);
					})}
				</div>

				<BibleClassesInfoNote />
			</div>
		</InfoCard>
	);
};

// BibleClassesInfoNote component for additional Bible class information
const BibleClassesInfoNote = () => (
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
);

// StaffMembersCard component for staff information
const StaffMembersCard = () => {
	// Staff member data
	const STAFF_MEMBERS: StaffMember[] = [
		{ name: "Pastor Brian Falkenholt", title: "Pastor - English Ministries" },
		{ name: "Pastor Wayne Zhang", title: "Pastor - Chinese Ministries" },
		{ name: "Adrianna Blitterswyk", title: "Youth Director" },
	];

	return (
		<InfoCard
			title="Our Staff"
			icon={<Users className="h-5 w-5 mr-2" aria-hidden="true" />}
			borderColor="border-t-[#bfbfbf]"
			textColor="text-[#bfbfbf]"
		>
			<div className="text-sm space-y-3">
				{STAFF_MEMBERS.map((staff) => (
					<div key={nanoid()} className="pb-2">
						<h3 className="font-medium text-foreground">{staff.name}</h3>
						<p className="text-muted-foreground">{staff.title}</p>
					</div>
				))}
			</div>
		</InfoCard>
	);
};

type EmailContact = {
	name: string;
	address: string;
};

const EmailContactsCard = () => {
	const EMAIL_INFOS: Array<EmailContact> = [
		{
			name: "Church Office",
			address: "tlcoffice@tlc-lcc.ca",
		},
		{
			name: "Paster Brian Falkenholt",
			address: "pastorbrianfalkenholt@hotmail.ca",
		},
		{
			name: "Paster Wayne Zhang",
			address: "pastorzhang@gmail.com",
		},
		{
			name: "Youth Director Adrianna",
			address: "youthdirectortlcklc@gmail.com",
		},
	];

	return (
		<InfoCard
			title="Email Contacts"
			icon={<Mail className="h-5 w-5 mr-2" aria-hidden="true" />}
			borderColor="border-t-[#4384b0]"
			textColor="text-[#4384b0]"
		>
			<div className="text-sm space-y-3">
				{EMAIL_INFOS.map((email) => (
					<div key={nanoid()} className="pb-2">
						<h3 className="font-medium text-foreground">{email.name}</h3>
						<CustomLink
							href={`mailto:${email.address}`}
							variant={"prose"}
							aria-label="Send email to Trinity Lutheran Church"
						>
							{email.address}
						</CustomLink>
					</div>
				))}
			</div>
		</InfoCard>
	);
};

interface InfoPanelProps {
	className?: string;
}

const InfoPanel = ({ className }: InfoPanelProps) => {
	return (
		<aside
			className={cn(
				"flex flex-col space-y-4 w-full lg:w-80 px-4 py-6",
				className,
			)}
			aria-label="Worship Information"
		>
			<WorshipTimesCard />
			<BibleClassesCard />
			<StaffMembersCard />
			<EmailContactsCard />
		</aside>
	);
};

export default InfoPanel;
