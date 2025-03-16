import { CustomLink } from "@/components/CustomLink";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { makeClient } from "@/lib/sanity";
import { nanoid } from "nanoid";
import { PortableText, type SanityDocument } from "next-sanity";

import dynamicImport from "next/dynamic";
import Image from "next/image";

export const revalidate = 1800;

const ProseBody = dynamicImport(() =>
	import("@/components/ProseBody").then((mod) => mod.ProseBody),
);

export default async function Home() {
	const POSTS_QUERY = `*[
		_type == "post" && isHomePage == true
	]|order(publishedAt desc){
	_id, title, slug, body}`;
	const options = { next: { revalidate } };

	const client = await makeClient({ async: true });
	const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

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
								<CustomLink
									href={`/blog/${post.slug.current}`}
									variant={"prose"}
								>
									<span className="font-semibold tracking-tight text-2xl">
										{post.title}
									</span>
								</CustomLink>
							</CardHeader>
							<CardContent>
								<div className="prose line-clamp-6 max-w-none">
									<ProseBody blocks={post.body} />
								</div>
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
