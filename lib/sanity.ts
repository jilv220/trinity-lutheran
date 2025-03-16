import { getCloudflareContext } from "@opennextjs/cloudflare";
import { createClient } from "next-sanity";

type ClientOpts = {
	async: true;
};

export const makeClient = async (options?: ClientOpts) => {
	// biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
	let ctx;
	try {
		if (options?.async) {
			ctx = await getCloudflareContext({ async: true });
		} else {
			ctx = getCloudflareContext();
		}
	} catch (e) {
		console.error("Fail to get cloudflare context");
	}
	const isDevelopment = ctx?.env.NEXTJS_ENV === "development";

	return createClient({
		projectId: "0952e622",
		dataset: isDevelopment ? "development" : "production",
		apiVersion: "2024-01-01",
		useCdn: !isDevelopment,
	});
};
