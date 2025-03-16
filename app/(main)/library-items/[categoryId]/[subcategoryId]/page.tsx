import BackLink from "@/components/BackLink";
import { CustomLink } from "@/components/CustomLink";
import { Card, CardContent } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { makeClient } from "@/lib/sanity";
import { cn } from "@/lib/utils";
import { nanoid } from "nanoid";
import type { SanityDocument } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";

export const revalidate = 1800;
export const dynamicParams = true;

type tParams = {
	params: Promise<{
		categoryId: string;
		subcategoryId: string;
	}>;
};

export default async function LibraryItemsPage({ params }: tParams) {
	const { categoryId, subcategoryId } = await params;

	const client = await makeClient();

	const SUBCATEGORY_QUERY = `*[_type == "librarySubcategory" && _id == "${subcategoryId}"][0]{
    title,
		"parent": categories[]->title
  }`;

	const LIBRARY_ITEMS_QUERY = `*[_type == "libraryItem" && references("${subcategoryId}")][0..25]
    | order(title asc) {
		"coverImageUrl": coverImage.asset->url,
		title,
		slug,
		authors,
		hits
	}`;
	const options = { next: { revalidate } };

	// Fetch subcategory and library items
	const subcategory = await client.fetch<SanityDocument>(
		SUBCATEGORY_QUERY,
		{},
		options,
	);
	// console.log(subcategory);

	if (!subcategory) {
		notFound();
	}

	const libraryItems = await client.fetch<SanityDocument[]>(
		LIBRARY_ITEMS_QUERY,
		{},
		options,
	);
	// console.log(libraryItems);

	return (
		<div className="my-8 mx-4 max-w-5xl">
			<h1 className="pb-4 text-3xl text-[#4384b0] font-semibold leading-none tracking-tight">
				Library Items: {subcategory.title}
			</h1>

			<div className="mt-6 mb-6">
				<BackLink
					href={`/library-items/${categoryId}`}
					label={subcategory.parent[0]}
				/>
			</div>

			{libraryItems.length === 0 ? (
				<p className="text-muted-foreground italic">
					No items found in this category.
				</p>
			) : (
				<>
					<p className="mb-4 text-muted-foreground">
						Showing {libraryItems.length} item
						{libraryItems.length !== 1 ? "s" : ""} in this category.
					</p>

					<Table>
						<TableHeader>
							<TableRow className="bg-secondary/20">
								<TableHead className="w-[20%]">Cover</TableHead>
								<TableHead className="w-[40%]">Title</TableHead>
								<TableHead className="w-[30%]">Authors</TableHead>
								<TableHead className="text-right">Hits</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{libraryItems.map((item) => (
								<TableRow
									key={nanoid()}
									className="group hover:bg-secondary/30"
								>
									<TableCell>
										{item.coverImageUrl ? (
											<div className="relative w-[50px] h-[75px]">
												<Image
													src={item.coverImageUrl}
													alt={`Cover Image for ${item.title}`}
													fill
													sizes="50px"
												/>
											</div>
										) : null}
									</TableCell>
									<TableCell className="font-medium">
										<CustomLink
											href={`/library-items/books/${item.slug.current}`}
											variant={"prose"}
										>
											{item.title}
										</CustomLink>
									</TableCell>
									<TableCell>{item.authors.join(" / ") || "—"}</TableCell>
									<TableCell className="text-right">{item.hits || 0}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</>
			)}
		</div>
	);
}
