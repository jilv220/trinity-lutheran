import { CustomLink } from "@/components/CustomLink";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { makeClient } from "@/lib/sanity";
import { createQueryString } from "@/lib/utils";
import { nanoid } from "nanoid";
import type { SanityDocument } from "next-sanity";

export const revalidate = 1800;

export default async function LibraryItemsPage() {
	const client = await makeClient({ async: true });
	const CATEGORIES_QUERY = `*[_type == "libraryCategory"] | order(title asc)
  {
    _id, 
    title,
    "bookCount": count(*[_type=='libraryItem' && references(^._id)])
  }`;

	const options = { next: { revalidate } };

	// Fetch categories properly
	const categories = await client.fetch<SanityDocument[]>(
		CATEGORIES_QUERY,
		{},
		options,
	);

	// Calculate total books
	const totalBooks = categories.reduce(
		(total, category) => total + category.bookCount,
		0,
	);

	return (
		<div className="my-8 mx-4 max-w-5xl">
			<h1 className="pb-4 text-3xl text-[#4384b0] font-semibold leading-none tracking-tight">
				Library Items
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
				<div className="md:col-span-2">
					<p className="text-base text-foreground mb-4">
						Click on any category (blue text) to see subcategories, titles and
						descriptions for each title. There are over{" "}
						{totalBooks.toLocaleString()} titles in the church library.
					</p>
					<p className="text-base text-foreground">
						Use the &quot;Search Books&quot; feature to search the entire
						database for keywords in titles, author names and descriptions.
					</p>
				</div>
			</div>

			{/* Library Item Table */}
			<Table>
				<TableHeader>
					<TableRow className="bg-secondary/20">
						<TableHead className="w-[70%]">Category</TableHead>
						<TableHead className="text-right"># Books</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{categories.map((category) => (
						<TableRow key={nanoid()} className="[&>td]:p-3">
							<TableCell className="font-medium ">
								<CustomLink
									href={`/library-items/${category._id}?${createQueryString("parent", category.title)}`}
									variant="prose"
									aria-label={`Browse ${category.title} category`}
								>
									{category.title}
								</CustomLink>
							</TableCell>
							<TableCell className="text-right">{category.bookCount}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
