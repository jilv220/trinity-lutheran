import { getCloudflareContext } from "@opennextjs/cloudflare";
import type { BlocksContent } from "@strapi/blocks-react-renderer";
import axios from "redaxios";

// Fix later
type Media = {
	data: {
		id: number;
		attributes: {
			url: string;
			alternativeText?: string;
			width: number;
			height: number;
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			formats?: Record<string, any>;
			mime: string;
		};
	} | null;
};

export type Article = {
	id: number;
	documentId: string;
	title: string;
	content: BlocksContent;
	order: number | null;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	image: Media | null;
};
export type Articles = Array<Article>;

export const getStrapiUrl = () => {
	const ctx = getCloudflareContext();
	const strapiUrl = ctx.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
	return strapiUrl;
};

export const makeStrapiClient = () => {
	return axios.create({
		baseURL: `${getStrapiUrl()}/api`,
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export const getArticles = async () => {
	const client = makeStrapiClient();
	const response = await client.get("/articles?populate=*");
	return response.data.data as Articles;
};
