import {
	PortableText,
	type PortableTextReactComponents,
} from "@portabletext/react";
import Link from "next/link";
import { CustomLink } from "./CustomLink";

const components: Partial<PortableTextReactComponents> = {
	marks: {
		internalLink: ({ value, children }) => {
			const { slug = {} } = value;
			const href = `/${slug.current}`;

			return (
				<CustomLink href={href} variant={"prose"}>
					{children}
				</CustomLink>
			);
		},
		link: ({ value, children }) => {
			const { href } = value;

			return (
				<CustomLink href={href} variant={"prose"} external>
					{children}
				</CustomLink>
			);
		},
	},
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const ProseBody = (blocks: Array<any>) => {
	return <PortableText value={blocks} components={components} />;
};
