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
	VariantProps<typeof linkVariants> & {
		external?: boolean;
	};

const CustomLink = ({
	className,
	variant,
	children,
	external = false,
	...props
}: CustomLinkProps) => {
	if (external)
		return (
			<Link
				className={cn(linkVariants({ variant, className }))}
				{...props}
				target="_blank"
				rel="noreferrer noopener"
			>
				{children}
			</Link>
		);

	return (
		<Link className={cn(linkVariants({ variant, className }))} {...props}>
			{children}
		</Link>
	);
};

export { CustomLink, linkVariants };
