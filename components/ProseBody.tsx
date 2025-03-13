"use client";

import {
	PortableText,
	type PortableTextReactComponents,
} from "@portabletext/react";
import dynamic from "next/dynamic";
import { CustomLink } from "./CustomLink";

const ReactPlayer = dynamic(() => import("react-player/lazy"), {
	ssr: false,
	loading: () => <div className="aspect-video bg-muted animate-pulse" />,
});

const components: Partial<PortableTextReactComponents> = {
	types: {
		youtube: ({ value }) => {
			const { url } = value;
			return <ReactPlayer url={url} />;
		},
	},
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
export const ProseBody = ({ blocks }: { blocks: any }) => {
	if (!blocks || !Array.isArray(blocks)) {
		return null;
	}
	return <PortableText value={blocks} components={components} />;
};
