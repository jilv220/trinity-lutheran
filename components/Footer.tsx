import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer
			className="mt-auto bg-background text-foreground/95 border-t-[6px] border-[#568eb6]"
			aria-label="Site footer"
		>
			<div className="max-w-7xl mx-auto py-8 px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Contact Information */}
					<div>
						<h3 className="text-lg font-semibold mb-4 text-foreground">
							Contact Us
						</h3>
						<div className="space-y-3">
							<div className="flex items-start gap-2">
								<MapPin
									className="h-5 w-5 text-primary mt-1 flex-shrink-0"
									aria-hidden="true"
								/>
								<div>
									<a
										href="https://www.google.com/maps/place/Trinity+Lutheran+Church/@49.1623193,-123.1487974,16z/data=!3m1!4b1!4m6!3m5!1s0x54860ac80cd86a39:0x150beb6876498d89!8m2!3d49.1623193!4d-123.1462171!16s%2Fg%2F1trcg3f7?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-primary transition"
										aria-label="Open church location in Google Maps (opens in new tab)"
									>
										<p>7100 Granville Avenue</p>
										<p>Richmond, BC V6Y 1P3</p>
									</a>
								</div>
							</div>
							<div className="flex items-start gap-2">
								<Phone
									className="h-5 w-5 text-primary mt-1 flex-shrink-0"
									aria-hidden="true"
								/>
								<div>
									<div className="flex flex-col">
										<span className="font-medium">Office (English):</span>
										<a
											href="tel:+16042785766"
											className="hover:text-primary transition"
											aria-label="Call English ministry phone number"
										>
											604-278-5766
										</a>
									</div>
									<div className="flex flex-col mt-2">
										<span className="font-medium">Office (Chinese):</span>
										<a
											href="tel:+16042786827"
											className="hover:text-primary transition"
											aria-label="Call Chinese ministry phone number"
										>
											604-278-6827
										</a>
									</div>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<Mail
									className="h-5 w-5 text-primary flex-shrink-0"
									aria-hidden="true"
								/>
								<a
									href="mailto:tlcoffice@telus.net"
									className="hover:text-primary transition"
									aria-label="Send email to Trinity Lutheran Church"
								>
									tlcoffice@telus.net
								</a>
							</div>
						</div>
					</div>

					{/* Quick Links */}
					<nav aria-label="Footer navigation">
						<h3 className="text-lg font-semibold mb-4 text-foreground">
							Quick Links
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/our-beliefs"
									className="hover:text-primary transition"
								>
									Our Beliefs
								</Link>
							</li>
							<li>
								<Link
									href="/bible-studies"
									className="hover:text-primary transition"
								>
									Bible Studies
								</Link>
							</li>
							<li>
								<Link
									href="/trinitys-little-children-centre"
									className="hover:text-primary transition"
								>
									Trinity's Little Children Centre
								</Link>
							</li>
							<li>
								<Link
									href="/contact-us"
									className="hover:text-primary transition"
								>
									Contact Us
								</Link>
							</li>
						</ul>
					</nav>

					{/* Social & Additional Info */}
					<div>
						<h3 className="text-lg font-semibold mb-4 text-foreground">
							Connect With Us
						</h3>
						<a
							href="https://www.facebook.com/TrinityLutheranRichmondBC"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 hover:text-primary transition group"
							aria-label="Visit our Facebook page (opens in new tab)"
						>
							<Facebook
								className="h-5 w-5 group-hover:text-primary"
								aria-hidden="true"
							/>
							<span>Follow us on Facebook</span>
						</a>
						<div className="mt-7">
							<h4 className="text-lg font-semibold mb-2 text-foreground">
								A member congregation of
							</h4>
							<a
								href="https://www.lutheranchurchcanada.ca/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src="/lcc-logo.jpg"
									alt="Lutheran Church of Canada Logo"
									width={220}
									height={52}
								/>
							</a>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="pt-6 text-center">
					<p className="text-sm">
						© {new Date().getFullYear()} Trinity Lutheran Church. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
