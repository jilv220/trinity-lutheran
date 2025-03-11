import { CustomLink } from "@/components/CustomLink";
import { Card, CardContent } from "@/components/ui/card";
import { nanoid } from "nanoid";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Links | Trinity Lutheran Church - Richmond, B.C.",
	description:
		"Useful links to Lutheran Church Canada and other related organizations and resources that Trinity Lutheran Church partners with and supports.",
};

// Define type for links
interface LinkItem {
	title: string;
	url: string;
	logoSrc: string;
	logoWidth: number;
	logoHeight: number;
	description: string;
	isInternal?: boolean;
}

// Create array of link data extracted from the content
const linkItems: LinkItem[] = [
	{
		title: "Lutheran Church Canada (LCC)",
		url: "http://www.lutheranchurch.ca",
		logoSrc: "/images/lcc-logo.jpg",
		logoWidth: 242,
		logoHeight: 55,
		description:
			"The synodical body (or family of churches) that Trinity Lutheran belongs to. The synod is committed to sharing the Gospel of Jesus Christ and all confessions and practices are based on the foundation of God's Word and the belief that God's gift of salvation is found only through faith in Jesus Christ, God's only Son.",
	},
	{
		title: "Lutheran Foundation Canada",
		url: "http://lutheranfoundation.ca/",
		logoSrc: "/images/lfc-logo.jpg",
		logoWidth: 206,
		logoHeight: 72,
		description:
			"Supports all congregations and ministries of LCC, encouraging and assisting individuals in developing a planned gift within their Christian estate plan, as a final thank offering to God for the many blessings they've received throughout their life.",
	},
	{
		title: "Lutheran Women's Missionary League - Canada (LWMLC)",
		url: "/trinity-ladies",
		logoSrc: "/images/lwml-logo.jpg",
		logoWidth: 172,
		logoHeight: 102,
		description:
			'An auxiliary organization of LCC made up of "Lutheran Women in Mission and Service" who have been "Called to Serve" in the areas of prayer, leadership and service to others. In addition, the women raise funds through "Mite Boxes" to give as grants to various agencies.',
		isInternal: true,
	},
	{
		title: "The Men's Network",
		url: "http://www.lhmmen.com/",
		logoSrc: "/images/mensnetwork.gif",
		logoWidth: 100,
		logoHeight: 75,
		description:
			'A great site for guys! Lots of humour combined with great learning. Some favourite sections include "Stuff They Didn\'t Teach Me in Sunday School" and "The Baloney Shop". Explore the site and have a great time! (Sorry, ladies, but this site is full of "guy talk".) Enjoy!',
	},
	{
		title: "Lutheran Laymen's League of Canada (LLL)",
		url: "https://www.lll.ca/",
		logoSrc: "/images/lll-logo.gif",
		logoWidth: 100,
		logoHeight: 95,
		description:
			"An auxiliary organization of LCC and dedicates itself to media projects that help tell people everywhere about the love God has for them. Media projects include TV and radio programs, audio and video tapes, and booklets. This is a volunteer based organization of men and women who offer their time and/or financial gifts to make Christian-based media available to everyone.",
	},
	{
		title: "Lutheran Hour Ministries (LHM)",
		url: "http://www.lhm.org/",
		logoSrc: "/images/lhm-logo.gif",
		logoWidth: 200,
		logoHeight: 38,
		description:
			"The media \"outlet\" for Lutheran Laymen's League throughout the world. LHM is a Christian outreach ministry supporting churches worldwide. LHM produces Christian radio and TV programming for broadcast, as well as Internet and print communications, dramas, music, and outreach materials, to reach unchurched people everywhere. LHM's flagship program, The Lutheran Hour, airs weekly on more than 900 stations in North America.",
	},
	{
		title: "JC Play Zone",
		url: "https://www.lhm.org/kids/",
		logoSrc: "/images/jcplayzone.gif",
		logoWidth: 100,
		logoHeight: 75,
		description:
			'Do you know anyone with the initials "J.C."? JC Play Zone is a great site for preschoolers and primary school age young people. Full of fun, crafts, recipes, activities, music, devotions and Bible stories, this site will keep any young person engaged and involved while learning more about Jesus. Have a look!',
	},
	{
		title: "Serenia Life Financial",
		url: "https://www.serenialife.ca/",
		logoSrc: "/images/serenia-life-logo.webp",
		logoWidth: 200,
		logoHeight: 72,
		description:
			"A Christian-based, member-owned financial services organization that provides life insurance, income protection and investment products for Canadian Christians. This is a not-for-profit organization which reinvests their earnings in its members, their congregations and the causes they care about.",
	},
	{
		title: "Concordia Lutheran Seminaries",
		url: "https://www.concordiasem.ab.ca/",
		logoSrc: "/images/cls-logo.gif",
		logoWidth: 62,
		logoHeight: 70,
		description:
			"In Edmonton, Alberta and St. Catharines, Ontario are the institutions that prepare men for the pastoral ministry of LCC. Individuals are taught God's Word in-depth as the only source of Christian faith and life, and how the Lutheran Confessions provide a true and faithful expression of that Word. All for Jesus' sake.",
	},
	{
		title: "Canadian Lutheran World Relief (CLWR)",
		url: "https://www.clwr.org/",
		logoSrc: "/images/clwr-logo.jpg",
		logoWidth: 180,
		logoHeight: 34,
		description:
			"Dedicated to helping people in need. Throughout the world they provide food and aid, relief in emergencies, programs for community development, refugee resettlement assistance, and provide a market for traditionally poor farmers and workers to sell their goods through fair wages and crop prices.",
	},
	{
		title: "Lutheran Bible Translators of Canada (LBTC)",
		url: "https://www.lbtc.ca/",
		logoSrc: "/images/lbt-logo.jpg",
		logoWidth: 100,
		logoHeight: 103,
		description:
			"Has a mission to help bring people to faith in Jesus Christ through Bible translation and literacy work. LBTC, like other organizations such as Wycliffe Bible Translators, not only translate and publish Bibles, but usually must first create a written form of a language and introduce the written language to the people. Many times, due to cultural differences, LBTC must creatively explain some of the expressions used in the Bible. LBTC believes that no language or cultural barrier should prevent people from access to God's Word.",
	},
	{
		title: "Concordia University College of Alberta (CUCA)",
		url: "https://www.concordia.ab.ca/",
		logoSrc: "/images/concordia-logo.gif",
		logoWidth: 168,
		logoHeight: 52,
		description:
			"A university degree-granting Christian liberal arts educational institution operated by Lutheran Church-Canada. Founded in 1921, CUCA is located in Edmonton and emphasizes teaching excellence in a caring university environment. Programs in arts, science, education, environmental health, management and information systems security are offered in a Christian context.",
	},
	{
		title: "Canadian Lutheran News",
		url: "https://www.canadianlutheran.ca/",
		logoSrc: "/images/canluth-logo.png",
		logoWidth: 180,
		logoHeight: 34,
		description:
			"October 1, 2010: Online Current News now at CanadianLutheran.ca (replaces InfoDigest)",
	},
	{
		title: "InfoDigest",
		url: "https://infodigest.wordpress.com/",
		logoSrc: "/images/info-digest-logo.gif",
		logoWidth: 200,
		logoHeight: 38,
		description:
			"Contains current stories of national and international activities of Lutheran Church Canada. One of the quickest methods to be updated on activities and events happening at home and throughout the world, rather than waiting for information to arrive in print.",
	},
	{
		title: "Issues, Etc.",
		url: "https://issuesetc.org/archive/",
		logoSrc: "/images/issues-etc-logo.png",
		logoWidth: 225,
		logoHeight: 57,
		description:
			"Talk radio that is Christ-Centered and Cross Focused. Listen to topics ranging from issues of faith, theology and Biblical history to geopolitical issues in the world today from a Lutheran perspective. Sometimes controversial, sometimes challenging our status-quo thinking. Christian talk radio that stimulates the mind.",
	},
	{
		title: "Lutheran Confessions",
		url: "https://lutheranreformation.org/theology/what-is-a-lutheran/",
		logoSrc: "/images/luther-seal.jpg",
		logoWidth: 125,
		logoHeight: 125,
		description:
			'A quick overview of the Lutheran Confessions and what it means to be a "Confessional Lutheran". ' +
			"Basically, these are historical Christian documents upon which the Lutheran Church stands. " +
			"Some documents are from the time of Martin Luther (16th Century) while others, such as the Apostle's Creed, date to the earliest centuries of the Christian Church. " +
			"They were written to explain the core elements of the Christian faith as revealed by the Word of God (not man's manipulation of that Word).",
	},
];

export default function LinksPage() {
	return (
		<div className="my-8 mx-4 max-w-5xl">
			<h1 className="pb-6 text-3xl text-[#4384b0] font-semibold leading-none tracking-tight">
				Links
			</h1>

			<p className="text-base text-foreground mb-8">
				Here are useful links to Lutheran Church Canada and other related
				organizations and resources. These ministries and organizations support
				the work of Lutheran churches like Trinity in various ways.
			</p>

			<div className="grid grid-cols-1 gap-6">
				{linkItems.map((item) => (
					<Card
						key={nanoid()}
						className="overflow-hidden border-t-4 border-t-[#4384b0]"
					>
						<CardContent className="p-6">
							<div className="flex flex-col md:flex-row gap-4">
								{item.logoSrc && (
									<div className="flex justify-center items-center md:w-64 flex-shrink-0">
										<CustomLink
											href={item.url}
											external={!item.isInternal}
											aria-label={`Visit ${item.title} website${!item.isInternal ? " (opens in new tab)" : ""}`}
										>
											<Image
												src={item.logoSrc}
												alt={`${item.title} logo`}
												width={item.logoWidth}
												height={item.logoHeight}
												className="object-contain"
											/>
										</CustomLink>
									</div>
								)}

								<div className="flex-1">
									<h2 className="text-xl font-semibold text-[#4384b0]">
										<CustomLink
											href={item.url}
											external={!item.isInternal}
											variant="prose"
											className="flex items-center"
											aria-label={`Visit ${item.title} website${!item.isInternal ? " (opens in new tab)" : ""}`}
										>
											{item.title}
										</CustomLink>
									</h2>
									<p className="mt-2 text-foreground">{item.description}</p>
									{item.title === "Lutheran Confessions" && (
										<p>
											These documents have been assembled into the{" "}
											<CustomLink
												href={"https://bookofconcord.org/"}
												variant={"prose"}
												external
												aria-label={`Visit Book of Concord website" (opens in new tab)"}`}
											>
												Book of Concord
											</CustomLink>{" "}
											and help us understand teachings from the Bible with much
											more clarity."
										</p>
									)}
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
