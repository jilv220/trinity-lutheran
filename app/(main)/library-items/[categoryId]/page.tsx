import BackLink from "@/components/BackLink";
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
import { nanoid } from "nanoid";
import type { SanityDocument } from "next-sanity";

export const revalidate = 30 * 60;
export const dynamicParams = true;

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
type tParams = {
	params: Promise<{
		categoryId: string;
	}>;
	searchParams: SearchParams;
};

export default async function SubcategoriesPage({
	params,
	searchParams,
}: tParams) {
	const { categoryId } = await params;
	const { parent } = await searchParams;

	const client = await makeClient();
	const CATEGORIES_QUERY = `*[_type=="librarySubcategory" 
		&& references("${categoryId}")
	] 
  | order(title asc)
  {
    _id, 
    title,
    "bookCount": count(*[_type=='libraryItem' && references(^._id)])
  }`;
	const options = { next: { revalidate } };

	// Fetch categories properly
	const subcategories = await client.fetch<SanityDocument[]>(
		CATEGORIES_QUERY,
		{},
		options,
	);
	// console.log(subcategories);

	return (
		<div className="my-8 mx-4 max-w-5xl">
			<h1 className="pb-4 text-3xl text-[#4384b0] font-semibold leading-none tracking-tight">
				Library Items
			</h1>

			<div className="mt-6 mb-3">
				<BackLink href="/library-items" label={parent as string} />
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
					{subcategories.map((category) => (
						<TableRow key={nanoid()} className="[&>td]:p-3">
							<TableCell className="font-medium">
								<CustomLink
									href={`/library-items/${category._id}`}
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
