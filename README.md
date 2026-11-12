# Beliot by Babs Photography Limited

Next.js App Router, React and Tailwind CSS website for portraits, events, culture and corporate photography.

## Run

Requires Node.js 20.9+ and npm.

```sh
npm ci
npm run dev
```

## Build

```sh
npm run typecheck
npm run build
npm run preview
```

The build exports a static website to out/. Preview uses Python 3 on port 3012.

## Content and assets

The company name is Beliot by Babs Photography Limited. The supplied creative portfolio is the source for the biography, experience, service capabilities and contact details. Experience is attributed to Babs; it is not presented as independent corporate endorsements. Culture photography is included as requested and illustrated with the supplied photographs. No invented customer testimonials, publication claims, prices or turnaround guarantees are used.

All 18 supplied photographs remain in the gallery. The PDF logo appears in the header and footer. The brand accent is #05250a; light text preserves contrast on the dark site. The supplied PPTX is available through the company profile download. Email and phone links contact Beliot directly. No contact data is collected by a form.

Edit components/home-sections.tsx for page content, site-header.tsx and site-footer.tsx for navigation, interactions.tsx for gallery and menu behavior, and app/globals.css for tokens. ASSET-MAP.json maps supplied image filenames.

This is the original working project on your Desktop. Dependencies are already installed. Run npm run dev from this folder; future updates should be applied here.

Hero slideshow: five supplied images with a 6-second rotation, crossfade, manual selection and pause/play. Autoplay stops for reduced-motion preferences and hidden tabs. Montserrat regular and italic variable fonts are served locally; license is in public/fonts/Montserrat-OFL.txt.
