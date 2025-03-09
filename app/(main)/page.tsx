import { ProseBody } from "@/components/ProseBody";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { makeClient } from "@/lib/sanity";
import { nanoid } from "nanoid";
import { PortableText, type SanityDocument } from "next-sanity";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function Home() {
	const POSTS_QUERY = `*[
		_type == "post" && isHomePage == true
	]|order(publishedAt desc)[0...12]{_id, title, body, publishedAt}`;
	const options = { next: { revalidate: 30 } };

	const posts = await makeClient().fetch<SanityDocument[]>(
		POSTS_QUERY,
		{},
		options,
	);

	return (
		<div className="flex flex-col items-center justify-center">
			<div className="w-[85%] mt-6">
				<Image
					src="/headerphoto.jpg"
					alt="Trinity Lutheran Church Richmond BC"
					width={820}
					height={120}
					className="w-full"
				/>
			</div>

			{/* Dynamic content from CMS */}
			{posts.length > 0 ? (
				<div className="w-[85%] my-8 space-y-8">
					{posts.map((post) => (
						<Card key={nanoid()} className="overflow-hidden">
							<CardHeader className="pb-3">
								<CardTitle className="text-2xl text-[#4384b0]">
									{post.title}
								</CardTitle>
							</CardHeader>
							<CardContent className="[&>p]:my-3">
								{Array.isArray(post.body) && ProseBody(post.body)}
							</CardContent>
						</Card>
					))}
				</div>
			) : (
				<div className="w-[85%] mt-8">
					<p>Welcome to Trinity Lutheran Church</p>
				</div>
			)}
		</div>
	);
}
