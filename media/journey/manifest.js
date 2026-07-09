/* =========================================================
   THE JOURNEY — MEDIA MANIFEST
   One entry per event. Both journey.html and gallery.html
   read this file; nothing else needs editing when media lands.

   How to add media:
   1. Upload photos/videos to the event's folder (the `dir`
      below — Supabase public storage or a local media/ path
      both work; src just needs to be a reachable URL).
   2. List each file in that event's `items` array:
        { src: "https://…/photo.jpeg",         // or "media/journey/…/photo.jpg"
          type: "image",                       // or "video"
          alt:  "Esha lifts the regional trophy" }
      Videos may add:  poster: "…/frame.jpg"
   3. The FIRST item in `items` is the sample shown on the
      journey page — reorder to choose a different sample.
   ========================================================= */

const SUPA = "https://jqpwucwzacqrpeazqbmd.supabase.co/storage/v1/object/public/public-assets/LOFB/";

window.JOURNEY_MEDIA = [
  {
    id: "hero",
    title: "Jeonju — the medal photo",
    date: "July 2026",
    dir: "media/journey/00-hero/",
    onGalleryPage: false, // hero photo only; Jeonju event has its own section
    items: [],
  },
  {
    id: "regionals",
    title: "Kent Regionals",
    date: "2026", // fill month
    dir: "media/journey/01-regionals/",
    items: [],
  },
  {
    id: "nationals",
    title: "UK Nationals, Harrogate",
    date: "2026", // fill month
    dir: "media/journey/02-nationals/",
    items: [],
  },
  {
    id: "practice",
    title: "The two months between",
    date: "Spring 2026",
    dir: "media/journey/03-practice/",
    items: [],
  },
  {
    id: "jeonju",
    title: "Korea Open, Jeonju",
    date: "July 2026",
    dir: SUPA + "Jeonju Final Images/",
    items: [
      {
        src: SUPA + "Jeonju%20Final%20Images/WhatsApp%20Image%202026-07-05%20at%2012.15.32.jpeg",
        type: "image",
        alt: "Teams from dozens of countries raise their flags at the FIRST LEGO League Korea Open in Jeonju — Lord of the Bricks among them in GB kit",
      },
    ],
  },
  {
    id: "team",
    title: "The team",
    date: "2025–26 season",
    dir: "media/journey/05-team/",
    items: [],
  },
  {
    id: "coaches",
    title: "The coaches",
    date: "2025–26 season",
    dir: "media/journey/06-coaches/",
    items: [],
  },
  {
    id: "robot",
    title: "World Dominator",
    date: "Fourth generation",
    dir: "media/journey/07-robot/",
    items: [],
  },
  {
    id: "innovation",
    title: "The KAS AI assistant",
    date: "Live since January 2026",
    dir: "media/journey/08-innovation/",
    items: [],
  },
  {
    id: "film",
    title: "The film",
    date: "Jeonju, July 2026",
    dir: SUPA + "Jeonju Final Videos/",
    items: [
      {
        src: SUPA + "Jeonju%20Final%20Videos/robo%20performance%20award%20jeonju.mp4",
        type: "video",
        alt: "The Robot Performance award moment — silver for Great Britain, Jeonju",
      },
    ],
  },
];
