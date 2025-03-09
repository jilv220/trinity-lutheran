import { makeClient } from "@/lib/sanity";
import type { Metadata } from "next";
import { PortableText, type SanityDocument } from "next-sanity";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
	title: "Our Beliefs | Trinity Lutheran Church - Richmond, B.C.",
	description:
		"Learn about the core beliefs and faith principles of Trinity Lutheran Church in Richmond, B.C., a congregation of the Lutheran Church Canada.",
};

export default async function OurBeliefs() {
	const POST_QUERY = `*[
  _type == "post" && slug.current == "our-beliefs"
	][0]{_id, title, body, publishedAt}`;
	const options = { next: { revalidate: 30 } };

	const post = await makeClient().fetch<SanityDocument>(
		POST_QUERY,
		{},
		options,
	);

	return (
		<div className="my-8 mx-4">
			{post ? (
				<>
					<h1 className="pb-6 text-2xl text-[#4384b0] font-semibold leading-none tracking-tight">
						{post.title}
					</h1>
					{Array.isArray(post.body) && <PortableText value={post.body} />}
				</>
			) : null}
		</div>
	);
}
