import type { Url, UrlObject } from "node:url";
import { ArrowLeft } from "lucide-react";
import { ComponentProps } from "react";
import { CustomLink } from "./CustomLink";

const BackLink = ({
	href,
	label,
}: {
	href: string | (UrlObject & string);
	label: string;
}) => {
	return (
		<CustomLink
			href={href}
			variant="prose"
			className="inline-flex items-center"
			aria-label={`Back to ${label}`}
		>
			<ArrowLeft className="h-4 w-4 mr-2" aria-hidden="true" />
			Back to {label}
		</CustomLink>
	);
};

export default BackLink;
