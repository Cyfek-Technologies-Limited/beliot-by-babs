import { MenuToggle, MobileMenu } from "./interactions";
const links = [["Portfolio", "#portfolio"], ["Services", "#services"], ["About Babs", "#about"], ["Experience", "#experience"]];
export function SiteHeader() { return <>
<header className="fixed top-0 inset-x-0 z-50 nav-blur"><div className="max-w-[1600px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[92px] gap-6">
<a href="#home" aria-label="Beliot by Babs Photography Limited home"><img src="/images/beliot-logo-white.svg" width={1029} height={332} alt="Beliot by Babs Photography Limited" className="beliot-logo h-auto w-[170px] sm:w-[220px]" /></a>
<nav aria-label="Main navigation" className="hidden lg:flex items-center gap-8">{links.map(([label,href])=><a key={href} href={href} className="mono-caption text-bone-muted hover:text-bone transition">{label}</a>)}</nav>
<div className="flex items-center gap-3"><a href="#contact" className="brand-button rounded-full px-5 py-3 mono-caption">Inquire</a><MenuToggle /></div></div></header>
<MobileMenu><nav id="mobile-nav-panel" aria-label="Mobile navigation" className="lg:hidden fixed inset-x-0 top-[92px] bottom-0 z-40 bg-void/95 backdrop-blur-xl border-t border-bone/10 px-6 py-8 overflow-y-auto">{links.map(([label,href])=><a key={href} href={href} className="block py-5 text-xl border-b border-bone/10">{label}</a>)}<a href="#contact" className="brand-button block rounded-full px-6 py-4 mt-8 text-center">Discuss your project</a></nav></MobileMenu>
</>; }
