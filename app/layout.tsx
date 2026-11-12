import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { MenuProvider } from "../components/interactions";
export const metadata: Metadata = { title: "Beliot by Babs Photography Limited", description: "Portraits, events, culture and corporate photography by Beliot by Babs Photography Limited. Led by Babarinde Olumide Henry, with over a decade of visual storytelling experience." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
 return <html lang="en"><body className="grain bg-void text-bone antialiased overflow-x-hidden"><MenuProvider><SiteHeader />{children}<SiteFooter /></MenuProvider></body></html>;
}
