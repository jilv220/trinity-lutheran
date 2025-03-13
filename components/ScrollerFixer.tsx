"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function ScrollFixer() {
	const pathname = usePathname();
	const isStatePopped = useRef(false);

	// Handling the scroll position to ensure clicking on the links
	// scrolls the page to the top with the sticky positioned navbar.
	useEffect(() => {
		// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
		const onPopState = () => (isStatePopped.current = true);

		window.addEventListener("popstate", onPopState);
		return () => window.removeEventListener("popstate", onPopState);
	}, []);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (!isStatePopped.current) {
			// navigation occurred without pressing
			// the browser's back or forward buttons
			window.scrollTo(0, 0);
		} else {
			isStatePopped.current = false;
		}
	}, [pathname]);

	return <></>;
}
