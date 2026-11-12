"use client";
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

const MenuContext = createContext({ open: false, setOpen: (_value: boolean) => {} });
export function MenuProvider({ children }: { children: ReactNode }) {
 const [open, setOpen] = useState(false);
 useEffect(() => {
  if (!open) return;
  const previous = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
  window.addEventListener("keydown", onKey);
  return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", onKey); };
 }, [open]);
 return <MenuContext.Provider value={{ open, setOpen }}>{children}</MenuContext.Provider>;
}
export function MenuToggle() {
 const { open, setOpen } = useContext(MenuContext);
 return <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav-panel" onClick={() => setOpen(!open)} className="lg:hidden inline-flex h-11 w-11 items-center justify-center text-bone hover:text-bone transition-colors"><span aria-hidden="true" className="text-2xl">{open ? "×" : "☰"}</span></button>;
}
export function MobileMenu({ children }: { children: ReactNode }) {
 const { open, setOpen } = useContext(MenuContext);
 const panel = useRef<HTMLDivElement>(null);
 useEffect(() => {
  if (!open) return;
  const firstLink = panel.current?.querySelector<HTMLAnchorElement>("a");
  firstLink?.focus();
  const onKey = (event: KeyboardEvent) => {
   if (event.key !== "Tab") return;
   const links = panel.current?.querySelectorAll<HTMLAnchorElement>("a");
   const toggle = document.querySelector<HTMLButtonElement>('button[aria-controls="mobile-nav-panel"]');
   if (links?.length && !event.shiftKey && document.activeElement === links[links.length - 1]) { event.preventDefault(); toggle?.focus(); }
   if (links?.length && event.shiftKey && document.activeElement === toggle) { event.preventDefault(); links[links.length - 1].focus(); }
  };
  window.addEventListener("keydown", onKey);
  return () => { window.removeEventListener("keydown", onKey); document.querySelector<HTMLButtonElement>('button[aria-controls="mobile-nav-panel"]')?.focus(); };
 }, [open]);
 return <div ref={panel} hidden={!open} onClick={event => { if ((event.target as Element).closest("a")) setOpen(false); }}>{children}</div>;
}
export function GalleryItem({ src, title }: { src: string; title: string }) {
 const dialog = useRef<HTMLDialogElement>(null);
 const trigger = useRef<HTMLButtonElement>(null);
 const close = () => dialog.current?.close();
 return <>
  <button ref={trigger} type="button" aria-label={`Open ${title}`} onClick={() => dialog.current?.showModal()} className="group block w-full bg-void-card overflow-hidden cursor-zoom-in focus-visible:ring-2 focus-visible:ring-bone mb-3 lg:mb-5 break-inside-avoid">
   <img src={src} alt={title} loading="lazy" className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.035]" />
  </button>
  <dialog ref={dialog} aria-label={title} onClose={() => trigger.current?.focus()} onClick={event => { if (event.target === event.currentTarget) close(); }} className="m-auto w-[95vw] max-w-6xl max-h-[95svh] bg-void text-bone p-4 backdrop:bg-black/90">
   <div className="flex items-center justify-between pb-3"><p className="mono-caption">{title}</p><button autoFocus type="button" onClick={close} aria-label="Close photograph" className="h-11 w-11 text-3xl">×</button></div>
   <img src={src} alt={title} className="max-h-[78svh] w-full object-contain" />
  </dialog>
 </>;
}
