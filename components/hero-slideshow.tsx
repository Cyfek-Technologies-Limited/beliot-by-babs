"use client";
import { useEffect, useState } from "react";
const slides = [
 { src:"/images/beliot-03.jpg", alt:"A cultural celebration documented by Beliot", position:"50% 50%" },
 { src:"/images/beliot-05.jpg", alt:"Creative studio portrait against a green backdrop", position:"50% 38%" },
 { src:"/images/beliot-12.jpg", alt:"Corporate gathering photographed by Beliot", position:"50% 55%" },
 { src:"/images/beliot-01.jpg", alt:"Guests celebrating at an event", position:"50% 40%" },
 { src:"/images/beliot-18.jpg", alt:"Professional corporate team portrait", position:"50% 35%" }
];
export function HeroSlideshow() {
 const [active,setActive] = useState(0);
 const [paused,setPaused] = useState(false);
 const [reducedMotion,setReducedMotion] = useState(true);
 const [visible,setVisible] = useState(true);
 useEffect(() => {
  const media=window.matchMedia("(prefers-reduced-motion: reduce)");
  const update=()=>setReducedMotion(media.matches);
  const visibility=()=>setVisible(!document.hidden);
  update(); visibility();
  media.addEventListener("change",update); document.addEventListener("visibilitychange",visibility);
  return ()=>{media.removeEventListener("change",update); document.removeEventListener("visibilitychange",visibility);};
 },[]);
 useEffect(()=>{
  if(paused || reducedMotion || !visible) return;
  const timer=window.setInterval(()=>setActive(index=>(index+1)%slides.length),6000);
  return ()=>window.clearInterval(timer);
 },[active,paused,reducedMotion,visible]);
 function move(offset:number) { setActive(index=>(index+offset+slides.length)%slides.length); }
 return <>
 <div className="absolute inset-0" role="region" aria-roledescription="carousel" aria-label="Featured photography">
 {slides.map((slide,index)=><div key={slide.src} className={`hero-slide absolute inset-0 overflow-hidden ${index===active?'is-active opacity-100':'opacity-0'}`} aria-hidden={index!==active}>
 <img src={slide.src} alt={slide.alt} className="h-full w-full object-cover" style={{objectPosition:slide.position}} fetchPriority={index===0?'high':'auto'} loading={index===0?'eager':'lazy'} />
 </div>)}
 </div>
 <div className="hero-slideshow-controls" role="group" aria-label="Hero slideshow controls">
 <span className="sr-only" aria-live={paused||reducedMotion?'polite':'off'}>Photograph {active+1} of {slides.length}: {slides[active].alt}</span>
 <button type="button" className="hero-control" onClick={()=>move(-1)} aria-label="Previous hero photograph">←</button>
 <div className="flex items-center" aria-label="Choose a photograph">{slides.map((slide,index)=><button key={slide.src} type="button" onClick={()=>setActive(index)} aria-label={`Show photograph ${index+1}`} aria-current={index===active?"true":undefined} className="inline-flex items-center justify-center w-8 h-11"><span aria-hidden="true" className={`hero-dot ${index===active?'is-active':''}`} /></button>)}</div>
 <button type="button" className="hero-control" onClick={()=>move(1)} aria-label="Next hero photograph">→</button>
 {!reducedMotion && <button type="button" className="hero-control ml-1" onClick={()=>setPaused(!paused)} aria-label={paused?'Play hero slideshow':'Pause hero slideshow'}>{paused?'▶':'Ⅱ'}</button>}
 </div>
 </>;
}
