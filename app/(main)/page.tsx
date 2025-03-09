import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { BookOpenIcon, CrossIcon, HeartIcon } from "lucide-react";
import Image from "next/image";
import { WORSHIP_PASTORS_INFO } from "../config";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="w-[85%] mt-6">
				<Image
					src="/headerphoto.jpg"
					alt="Trinity Lutheran Church Richmond BC"
					width={820}
					height={120}
					className="w-full"
				/>
			</div>
		</div>
	);
}
