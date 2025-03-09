import BlockRendererClient from "@/components/BlockRendererClient";
import { type Article, getArticle } from "@/lib/strapi-api";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
	title: "Our Beliefs | Trinity Lutheran Church - Richmond, B.C.",
	description:
		"Learn about the core beliefs and faith principles of Trinity Lutheran Church in Richmond, B.C., a congregation of the Lutheran Church Canada.",
};

export default async function OurBeliefs() {
	let article: Article | undefined;
	try {
		const DOCUMENT_ID = "r0b54ztwn6bs390on633y5jy";
		article = await getArticle({ documentId: DOCUMENT_ID });
	} catch (error) {
		console.error("Failed to fetch article", error);
	}

	return (
		<div className="my-8 mx-4">
			{article ? (
				<>
					<h1 className="pb-6 text-2xl text-[#4384b0] font-semibold leading-none tracking-tight">
						{article?.title}
					</h1>
					<BlockRendererClient content={article.content} />
				</>
			) : null}
		</div>
	);
}
