import { CustomLink } from "@/components/CustomLink";
import { ArrowLeft } from "lucide-react";

export default function BlogNotFound() {
	return (
		<div className="my-16 mx-4 max-w-4xl text-center">
			<div className="flex flex-col items-center justify-center space-y-6">
				<div className="rounded-full bg-secondary/50 p-6 w-24 h-24 flex items-center justify-center">
					<span className="text-4xl">📝</span>
				</div>

				<h1 className="text-3xl font-semibold text-[#4384b0]">
					Post Not Found
				</h1>

				<p className="text-muted-foreground max-w-md mx-auto">
					We couldn't find the blog post you're looking for. It may have been
					moved, deleted, or hasn't been published yet.
				</p>

				<div className="flex flex-col sm:flex-row gap-4 mt-6">
					<CustomLink
						href="/"
						variant="prose"
						className="inline-flex items-center"
						aria-label="Return to homepage"
					>
						<ArrowLeft className="h-4 w-4 mr-2" aria-hidden="true" />
						Return to Home
					</CustomLink>
				</div>
			</div>
		</div>
	);
}
