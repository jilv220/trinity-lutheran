import { CustomLink } from "@/components/CustomLink";
import { Card, CardContent } from "@/components/ui/card";
import { nanoid } from "nanoid";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Library | Trinity Lutheran Church - Richmond, B.C.",
	description:
		"Browse the Trinity Lutheran Church library catalog with over 1500 titles including books and DVDs for all ages and reading levels.",
};

// Define library category types
type SubCategory = string;
type LibraryCategory = {
	name: string;
	subcategories: SubCategory[];
};

// Create array of library categories extracted from the content
const libraryCategories: LibraryCategory[] = [
	{
		name: "Ministry & Discipleship",
		subcategories: [
			"Growing & Sharing",
			"Caring",
			"Youth Ministry",
			"VBS Ministry",
			"Sunday School Ministry",
			"Nursery Ministry",
			"Stewardship",
			"Doctrinal Teachings",
			"Worship Resources",
		],
	},
	{
		name: "Family",
		subcategories: [
			"Family Devotionals",
			"Relationships",
			"Parenting",
			"Crafts & Activities",
			"Health",
		],
	},
	{
		name: "Young",
		subcategories: [
			"Grade 5-6",
			"Grade 3-4",
			"Grade 1-2",
			"Nursery & Kindergarten",
		],
	},
	{
		name: "Youth",
		subcategories: [
			"Devotionals (Youth)",
			"General (Youth)",
			"Biographies (Youth)",
			"Fiction (Youth)",
		],
	},
	{
		name: "Adult",
		subcategories: [
			"Devotionals (Adult)",
			"General (Adult)",
			"Biographies (Adult)",
			"Fiction (Adult)",
			"Crosswords & Bible Games (Adult)",
		],
	},
	{
		name: "Music",
		subcategories: [],
	},
	{
		name: "Videos",
		subcategories: [
			"Videos (Nursery & Kindergarten)",
			"Videos (Children)",
			"Videos (Youth)",
			"Videos (Adult)",
		],
	},
];

export default function LibraryPage() {
	return (
		<div className="my-8 mx-4 max-w-4xl">
			<h1 className="pb-6 text-3xl text-[#4384b0] font-semibold leading-none tracking-tight">
				Trinity Library
			</h1>

			{/* Introduction section */}
			<div className="space-y-5 mb-8">
				<p className="text-base text-foreground">
					Trinity has a library full of books and DVDs suitable for all age
					groups and reading levels. The library is now located next to the main
					entrance, across from the front office. Please feel free to drop in
					any time the door is open, or ask the office to open the door for you.
					Books and DVDs may be borrowed for up to a month at a time by signing
					them out with your email address or contact phone number.
				</p>

				<p className="text-base text-foreground">
					A catalog of all the Library holdings is now online. There are over
					1500 titles. Please take a look and browse through the catalog by
					clicking on the button below.
				</p>

				<p className="text-base text-foreground">
					Once inside the online library, you can browse by clicking on any
					category to see sub-categories and then click on subcategories to see
					individual titles. Or, if you are looking for a specific subject or
					author, simply click on "SEARCH BOOKS" at the top of a page and enter
					a keyword into the "Search Keywords" box and press "Return" on your
					keyboard. The search will return all titles where the keyword appears
					in the title, the author's name, the description of the book or DVD,
					or a review of the title.
				</p>
			</div>

			{/* Library access button */}
			<div className="flex justify-center my-12">
				<CustomLink
					href="/library/library-items"
					className="bg-[#33cccc] hover:bg-[#33cccc]/80 text-[#800000] hover:opacity-90 font-bold py-4 px-8 rounded-md text-xl shadow-md transition-all"
					aria-label="Access the online Trinity Library catalog"
				>
					Click here to access the online Library!
				</CustomLink>
			</div>

			{/* Library structure */}
			<div className="mt-12">
				<h2 className="text-xl text-[#4384b0] font-semibold mb-6 text-center">
					The online library is organized as follows
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{libraryCategories.map((category) => (
						<Card key={nanoid()} className="border-l-2 border-l-[#4384b0]">
							<CardContent className="pt-6">
								<h3 className="text-lg font-semibold text-foreground mb-2">
									{category.name}
								</h3>
								{category.subcategories.length > 0 ? (
									<ul className="space-y-1 text-muted-foreground">
										{category.subcategories.map((subCategory) => (
											<li key={nanoid()}>{subCategory}</li>
										))}
									</ul>
								) : (
									<p className="text-muted-foreground">General collection</p>
								)}
							</CardContent>
						</Card>
					))}
				</div>
			</div>

			{/* Additional Information */}
			<div className="mt-12 p-6 bg-secondary/20 rounded-lg border border-muted">
				<h2 className="text-xl text-foreground font-semibold mb-4">
					Library Information
				</h2>
				<div className="space-y-4 text-muted-foreground">
					<p>
						For more information about the library or assistance finding
						specific books, please contact the church office.
					</p>
					<p>
						All library items are available to Trinity members and visitors. We
						encourage you to take advantage of these resources for your
						spiritual growth and education.
					</p>
				</div>
			</div>
		</div>
	);
}
