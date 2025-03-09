import { CustomLink } from "@/components/CustomLink";
import { Separator } from "@/components/ui/separator";
import { nanoid } from "nanoid";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Our Beliefs | Trinity Lutheran Church - Richmond, B.C.",
	description:
		"Learn about the core beliefs and faith principles of Trinity Lutheran Church in Richmond, B.C., a congregation of the Lutheran Church Canada.",
};

// Resource links array for better maintainability
const resourceLinks = [
	{
		title: "What Lutherans Believe",
		description: "A brief summary of our beliefs.",
		href: "/resources/lutheran-beliefs",
	},
	{
		title: "What Lutherans Believe with Short Explanation",
		description:
			'An overview of what we believe about "The Bible", about "God", about "Ourselves and Sin", about "Being Saved", about "Faith", about "Grace", about "Good Works", about "Life After Death"',
		href: "/resources/lutheran-beliefs-explained",
	},
	{
		title: "15 Key Elements of our Christian Faith",
		description:
			"A quick summary of the teachings of our congregation in 15 short statements.",
		href: "/resources/key-elements",
	},
	{
		title: "Lutheran Teachings About Various Topics",
		description:
			"Various Social Issues, God's Law and His Love, Sacraments of Holy Communion and Baptism, Confession and Forgiveness, etc.",
		href: "/resources/lutheran-teachings",
	},
	{
		title: "What About?...",
		description:
			"27 pamphlets on various topics such as Angels, Death and Dying, Creation and Evolution, Abortion, Homosexuality, The Bible, The Ten Commandments, The Apostles' Creed, The Lord's Prayer, Ordination of Women, Living Together without Marriage, etc. (Go to bottom of linked page to access pamphlets.)",
		href: "/resources/what-about",
	},
	{
		title: "The Christian's Role in God's Plan – VIDEO",
		description:
			"Six part VIDEO series covering various aspects of what we believe about Creation, God's Will, God's Law, Our Purpose in God's Plan, The Fulfillment of God's Plan at the Last Day when Christ returns and restores creation to the way it was supposed to be, including our fulfillment when we become what God intended us to be: fully human — perfect, free from sin, sickness, death and corruption — taking care of God's creation and fulfilling God's purposes. Each part of the video is 10 to 12 minutes long, entitled \"Who Am I? What Am I Doing Here?\"",
		href: "/resources/gods-plan-videos",
	},
];

export default function OurBeliefs() {
	return (
		<div className="my-8 mx-4 max-w-4xl">
			<h1 className="pb-6 text-3xl text-[#4384b0] font-semibold leading-none tracking-tight">
				Our Beliefs
			</h1>

			<div className="space-y-8">
				{/* First Beliefs Section */}
				<div>
					<div className="max-w-none">
						<p className="text-base text-foreground mb-4">
							We believe that God loves all people and wants us to enjoy an
							abundant and fulfilling life.
						</p>
						<p className="text-base text-foreground mb-4">
							We believe that a wall of separation has grown up between God and
							us. That wall is called sin. Sin denies us the kind of life that
							God wants for us.
						</p>
						<p className="text-base text-foreground mb-4">
							We believe that this wall has been torn down by the sacrificial
							death of God's Son, Jesus the Messiah.
						</p>
						<p className="text-base text-foreground mb-4">
							We believe that his resurrection from the dead is God's seal of
							approval on all Jesus did for us.
						</p>
						<p className="text-base text-foreground mb-4">
							We believe that the benefits of Christ's resurrection are
							available to all who receive Jesus by faith.
						</p>
						<p className="text-base text-foreground mb-4">
							Because of this faith, we desire to serve and obey our Lord and
							Saviour, by sharing his message with others, and by serving all.
						</p>
						<p className="text-base text-foreground mb-4">
							We believe that Jesus will someday return to this earth to take
							all who truly believe in him to eternal glory.
						</p>
						<p className="text-base text-foreground">
							Our belief of these things does not make them true. They are true,
							outlined clearly in God's word the Bible, therefore we believe
							them.
						</p>
					</div>
				</div>

				<Separator className="my-8" />

				{/* Second Beliefs Section */}
				<div>
					<div className="max-w-none">
						<p className="text-base text-foreground">
							We believe that there is only one God, that the Bible is the only
							reliable source of information, and that there is only one true
							faith and path to an eternal life with God. Through God's grace
							that path is through Jesus Christ who paid the ultimate price for
							our sins to restore our relationship with God. "Sin" is anything
							we have done, said, or thought, that is contrary to the will of
							God. No one is capable of living a perfect life that is free of
							sin. All those who admit their sinfulness and believe in Jesus as
							their one and only Saviour are counted holy in God's eyes and
							receive eternal life. Although there is only one God, He reveals
							Himself as three distinct persons: Father, Son and Holy Spirit
							(the Trinity).
						</p>
					</div>
				</div>

				<Separator className="my-8" />

				{/* Resources Section */}
				<div>
					<h2 className="text-xl text-[#4384b0] font-semibold mb-4">
						More Resources About Our Beliefs
					</h2>

					<p className="mb-6 text-base text-foreground">
						For more information about our beliefs and teachings, please visit
						any of the following resources:
					</p>

					<ul className="space-y-4">
						{resourceLinks.map((link) => (
							<li key={nanoid()} className="flex flex-col">
								<CustomLink
									href={link.href}
									variant={"prose"}
									className="font-medium text-base flex items-center"
								>
									{link.title}
								</CustomLink>
								<p className="text-muted-foreground text-sm mt-1 italic">
									{link.description}
								</p>
							</li>
						))}
					</ul>

					<p className="mt-8 text-sm text-muted-foreground italic">
						If you have trouble accessing any resources, please{" "}
						<CustomLink href="/contact-us" variant={"prose"}>
							contact us
						</CustomLink>{" "}
						and we'll assist you.
					</p>
				</div>
			</div>
		</div>
	);
}
