import BlockRendererClient from "@/components/BlockRendererClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type Articles, getArticles, getStrapiUrl } from "@/lib/strapi-api";
import Image from "next/image";
import { WORSHIP_PASTORS_INFO } from "../config";

// This makes the page dynamic so it can fetch data on each request
export const revalidate = 60;

export default async function Home() {
	let articles: Articles = [];
	try {
		articles = await getArticles();
	} catch (error) {
		console.error("Failed to fetch home sections:", error);
	}

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
			{articles.length > 0 ? (
				<div className="w-[85%] my-8 space-y-8">
					{articles.map((article) => (
						<Card key={article.id} className="overflow-hidden">
							<CardHeader>
								<CardTitle className="text-2xl text-[#4384b0]">
									{article.title}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<BlockRendererClient content={article.content} />
								{article.image?.data && (
									<div className="mt-4">
										<Image
											src={`${getStrapiUrl()}${article.image.data.attributes.url}`}
											alt={article.title}
											width={600}
											height={400}
											className="rounded-md"
										/>
									</div>
								)}
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
