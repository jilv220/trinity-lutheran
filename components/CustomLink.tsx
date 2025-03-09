import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import type { AnchorHTMLAttributes } from "react";

import Link, { type LinkProps } from "next/link";

const linkVariants = cva("transition", {
	variants: {
		variant: {
			default: "hover:text-primary",
			prose: "text-[#568eb6] hover:text-primary hover:underline",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

export type CustomLinkProps = LinkProps &
	AnchorHTMLAttributes<HTMLAnchorElement> &
	VariantProps<typeof linkVariants>;

const CustomLink = ({
	className,
	variant,
	children,
	...props
}: CustomLinkProps) => {
	return (
		<Link className={cn(linkVariants({ variant, className }))} {...props}>
			{children}
		</Link>
	);
};

export { CustomLink, linkVariants };
