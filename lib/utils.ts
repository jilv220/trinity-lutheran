import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const createQueryString = (name: string, value: string) => {
	const params = new URLSearchParams("");
	params.set(name, value);
	return params.toString();
};
