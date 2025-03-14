import { CustomLink } from "@/components/CustomLink";
import { makeClient } from "@/lib/sanity";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import type { SanityDocument } from "next-sanity";
import { notFound } from "next/navigation";

import BackLink from "@/components/BackLink";
import dynamicImport from "next/dynamic";
import Image from "next/image";

export const revalidate = 300;
export const dynamicParams = true;

type tParams = {
	params: Promise<{ slug: string }>;
};

const ProseBody = dynamicImport(() =>
	import("@/components/ProseBody").then((mod) => mod.ProseBody),
);

// Generate metadata for the page
export async function generateMetadata({ params }: tParams): Promise<Metadata> {
	const { slug } = await params;
	const post = await fetchPost(slug);

	if (!post) {
		return {
			title: "Post Not Found | Trinity Lutheran Church - Richmond, B.C.",
			description: "The blog post you're looking for could not be found.",
		};
	}

	return {
		title: `${post.title} | Trinity Lutheran Church - Richmond, B.C.`,
		description:
			post.excerpt ||
			"Read this article from Trinity Lutheran Church in Richmond, BC.",
	};
}

// Function to fetch a specific post by slug
async function fetchPost(slug: string) {
	const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    body,
    mainImage,
    "categories": categories[]->title
  }`;

	const options = { next: { revalidate } };
	return makeClient().fetch<SanityDocument>(POST_QUERY, { slug }, options);
}

// Component for displaying a blog post
export default async function BlogPost({ params }: tParams) {
	const { slug } = await params;
	const post = await fetchPost(slug);

	// If post not found, show 404 page
	if (!post) {
		notFound();
	}

	// Format publication date
	const publishedDate = post.publishedAt
		? new Date(post.publishedAt).toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			})
		: null;

	return (
		<div className="my-8 mx-4 max-w-4xl">
			{/* Back to Home link */}
			<div className="mb-6">
				<BackLink href="/" label="Home" />
			</div>

			<article className="w-full">
				{/* Featured image if available */}
				{post.mainImage && (
					<div className="w-full mb-6">
						<Image
							src={post.mainImage.url}
							alt={post.mainImage.alt || post.title}
							width={1200}
							height={600}
							className="w-full object-cover max-h-96 rounded-lg"
							priority
						/>
					</div>
				)}

				<header className="mb-8">
					<h1 className="text-3xl md:text-4xl text-[#4384b0] font-semibold leading-tight mb-3">
						{post.title}
					</h1>

					{/* Date and categories */}
					<div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
						{publishedDate && (
							<span className="ml-1">Published: {publishedDate}</span>
						)}

						{post.categories && post.categories.length > 0 && (
							<div className="flex items-center gap-2">
								<span>•</span>
								<div className="flex flex-wrap gap-2">
									{post.categories.map((category: string) => (
										<span
											key={category}
											className="px-2 py-0.5 bg-secondary rounded-full text-xs"
										>
											{category}
										</span>
									))}
								</div>
							</div>
						)}
					</div>
				</header>

				{/* Main content */}
				<div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
					<ProseBody blocks={post.body} />
				</div>
			</article>
		</div>
	);
}
