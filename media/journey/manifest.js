/* =========================================================
   THE JOURNEY — MEDIA MANIFEST
   One entry per event. Both journey.html and gallery.html
   read this file; nothing else needs editing when media lands.

   How to add media:
   1. Upload photos/videos to the event's folder (Supabase
      public storage or a local media/ path both work).
   2. List each file in that event's `items` array. Two ways:
        { file: "photo with spaces.jpeg",      // RAW storage filename —
          type: "image",                        // encoding is handled for you
          alt:  "Esha lifts the regional trophy" }
      or, for local/absolute URLs:
        { src: "media/journey/videos/clip.mp4", type: "video",
          poster: "media/journey/posters/clip.jpg", alt: "…" }
   3. The FIRST item in `items` is the sample shown on the
      journey page — reorder to choose a different sample.

   Supabase images are automatically served as resized
   renditions (thumb/large) via the render endpoint; the
   original is only used as a fallback. Videos hosted on the
   site itself are H.264 web transcodes — keep the 4K HEVC
   originals in Supabase as the archive, don't link them
   directly (they don't play in Firefox/most Androids).
   ========================================================= */

const SUPA = "https://jqpwucwzacqrpeazqbmd.supabase.co/storage/v1/object/public/public-assets/LOFB/";
const JEONJU_IMG = SUPA + "Jeonju%20Final%20Images/";
const JEONJU_VID = SUPA + "Jeonju%20Final%20Videos/";
const KENT_IMG = SUPA + "Kent%20Final%20Images/";
const HARROGATE_IMG = SUPA + "Harrogate%20Final%20Images/";
const HARROGATE_VID = SUPA + "Harrogate%20Final%20Videos/";

/* Resolve an item to a URL.
   variant: undefined|"full" → original; "thumb" → 800px; "large" → 1600px.
   Sized variants only apply to Supabase-hosted images (render endpoint). */
window.JOURNEY_MEDIA_URL = function (ev, item, variant) {
  var url = item.src || ((ev.dir || "") + encodeURIComponent(item.file || ""));
  if (variant && variant !== "full" && item.type !== "video" &&
      url.indexOf("/storage/v1/object/public/") !== -1) {
    var q = { thumb: "width=800&quality=70", large: "width=1600&quality=78" }[variant];
    if (q) return url.replace("/storage/v1/object/public/", "/storage/v1/render/image/public/") + "?" + q;
  }
  return url;
};

window.JOURNEY_MEDIA = [
  {
    id: "hero",
    title: "Jeonju — the award moment",
    date: "July 2026",
    dir: "media/journey/00-hero/",
    onGalleryPage: false, // ambient hero only; Jeonju has its own sections below
    items: [
      {
        type: "video",
        ambient: true, // muted, looping, no controls; falls back to poster
        src: "media/journey/00-hero/hero-loop-1920.mp4",
        srcSmall: "media/journey/00-hero/hero-loop-960.mp4",
        poster: "media/journey/00-hero/hero-poster.jpg",
        alt: "The team on stage in Jeonju, medals on, holding the Robot Performance Award 2nd Place certificate with the Union Jack draped behind them",
      },
    ],
  },
  {
    id: "regionals",
    title: "Kent Regionals",
    date: "2026", // fill month
    dir: KENT_IMG,
    autoDir: "LOFB/Kent Final Images",
    items: [
      { file: "LOFB Team Photo in Kent Regional Championship Win.jpeg", type: "image", alt: "The full team with coaches pose with the LEGO trophy beneath their projected badge after winning the Kent Regional Championship." },
      { file: "WhatsApp Image 2026-07-15 at 13.56.44 (6).jpeg", type: "image", alt: "A coach stands with two team members in orange shirts, one raising the LEGO trophy, after the Kent Regional Championship win." },
    ],
  },
  {
    id: "nationals",
    title: "UK Nationals, Harrogate",
    date: "2026", // fill month
    dir: HARROGATE_IMG,
    autoDir: "LOFB/Harrogate Final Images",
    items: [
      { file: "LOFB Harrogate Team on Stage for 2nd Place in Robotic Performance.jpeg", type: "image", alt: "Team members celebrate on stage in Harrogate beneath a big screen announcing their 2nd Place Robot Performance Award, score 485." },
      { file: "LOFB Harrogate 1.jpeg", type: "image", alt: "A team member in a cowboy hat holds up the red Kent flag with its white horse at the UK National Finals in Harrogate." },
      { file: "LOFB Harrogate 2nd Place in Robotic Performance.jpeg", type: "image", alt: "Arena screen at the UK National Finals announcing Lord of the Bricks' 2nd Place Robot Performance Award with a score of 485." },
      { file: "LOFB Harrogate Knockouts.jpeg", type: "image", alt: "A TV camera operator films team members in orange shirts beside the competition tables during the knockout rounds in Harrogate." },
      { file: "LOFB Harrogate Line before our Table.jpeg", type: "image", alt: "Young participants in explorer hats queue beside display boards, including a Kent Archaeology Society poster, at the UK National Finals." },
      { file: "LOFB after winning in Harrogate 2.jpeg", type: "image", alt: "Five team members in orange Lord of the Bricks shirts smile together in front of the IET FIRST LEGO League banner in Harrogate." },
      { file: "LOFB after winning in Harrogate 3.jpeg", type: "image", alt: "Three team members share a hug in front of the FIRST LEGO League backdrop after their win at the UK National Finals in Harrogate." },
      { file: "LOFB after winning in harrogate.jpeg", type: "image", alt: "Team members with medals celebrate in front of the IET FIRST LEGO League banner after their win in Harrogate." },
      {
        src: HARROGATE_VID + "LOFB%20Harrogate%20Knockout%20Winnders.mp4",
        poster: "media/journey/posters/harrogate-knockout-winners.jpg",
        type: "video",
        alt: "The team celebrates winning the UK Knockout Challenge at the UK National Finals in Harrogate",
      },
      {
        src: HARROGATE_VID + "LOFB%20Harrogate%20Spin%20the%20Wheel%20Game.mp4",
        poster: "media/journey/posters/harrogate-spin-the-wheel.jpg",
        type: "video",
        alt: "Spin-the-wheel game at the team's stand at the UK National Finals in Harrogate",
      },
    ],
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
    dir: JEONJU_IMG,
    autoDir: "LOFB/Jeonju Final Images",
    exclude: [
      "DJI_20260704161309_0045_D.JPG",  // accidental extreme close-up
      "DJI_20260704163922_0050_D.JPG",  // motion-blurred flag, no subject
    ],
    items: [
      { file: "DJI_20260703113430_0012_D.JPG", type: "image", alt: "Young Korean visitors wave Union Jack flags at the bunting-covered Lord of the Bricks stand during the Korea Open in Jeonju." },
      { file: "DJI_20260703112750_0010_D.JPG", type: "image", alt: "A coach carries iced coffees down the stands beneath a large Union Jack at the FIRST LEGO League Korea Open arena in Jeonju." },
      { file: "DJI_20260703113428_0011_D.JPG", type: "image", alt: "A smiling coach takes a wide-angle selfie beneath the steel roof of the Korea Open arena in Jeonju." },
      { file: "DJI_20260703113432_0013_D.JPG", type: "image", alt: "Children wave Union Jack hand flags beside the prize wheel at the Lord of the Bricks stand in Jeonju." },
      { file: "DJI_20260703113434_0014_D.JPG", type: "image", alt: "Young visitors wave Union Jack flags in front of the Lord of the Bricks display at the Korea Open in Jeonju." },
      { file: "DJI_20260703113437_0015_D.JPG", type: "image", alt: "A young visitor holds a Union Jack flag at the Lord of the Bricks stand during the FIRST LEGO League Korea Open in Jeonju." },
      { file: "DJI_20260703113625_0016_D.JPG", type: "image", alt: "Teenagers in flag-themed, badge-covered bucket hats chat during pin trading at the Korea Open in Jeonju." },
      { file: "DJI_20260703113715_0017_D.JPG", type: "image", alt: "Balloons and Union Jack bunting rise above the Lord of the Bricks stand against the arena roof in Jeonju." },
      { file: "DJI_20260703113718_0018_D.JPG", type: "image", alt: "Union Jack bunting, balloons and the team's British culture banner above the Lord of the Bricks stand in Jeonju." },
      { file: "DJI_20260704163847_0046_D.JPG", type: "image", alt: "Spectators and a team flag beneath the FIRST LEGO League Korea Open banner as robot matches run in the Jeonju hall." },
      { file: "DJI_20260704163850_0047_D.JPG", type: "image", alt: "Flags raised over the robot game tables at the FIRST LEGO League Korea Open Invitational in Jeonju, 3–5 July 2026." },
      { file: "DJI_20260704163853_0048_D.JPG", type: "image", alt: "Young competitors work at the robot game tables beneath the Korea Open banner in the Jeonju arena." },
      { file: "DJI_20260704163854_0049_D.JPG", type: "image", alt: "A German flag waves above the crowd as teams compete at the robot tables during the Korea Open in Jeonju." },
      { file: "DJI_20260705135704_0070_D.JPG", type: "image", alt: "Presenters hold an award certificate on the Jeonju stage as a Lord of the Bricks team member watches from the floor." },
      { file: "WhatsApp Image 2026-07-05 at 12.15.32.jpeg", type: "image", alt: "Teams from around the world wave national flags, the Union Jack among them, at the Korea Open ceremony in Jeonju." },
      { file: "WhatsApp Image 2026-07-05 at 14.27.53 (1).jpeg", type: "image", alt: "Team members hold the Robot Performance Award 2nd Place certificate beside the Lord of the Bricks flag on stage in Jeonju." },
      { file: "WhatsApp Image 2026-07-05 at 14.27.53 (2).jpeg", type: "image", alt: "Team members on stage at the FIRST LEGO League Korea Open, holding their 2nd place Robot Performance Award board and Lord of the Bricks flag." },
      { file: "WhatsApp Image 2026-07-05 at 14.27.53 (3).jpeg", type: "image", alt: "Team members celebrate on stage with their Lord of the Bricks Union Jack flag at the FIRST LEGO League Korea Open awards ceremony." },
      { file: "WhatsApp Image 2026-07-05 at 14.27.53.jpeg", type: "image", alt: "Team members hold the Robot Performance Award 2nd Place board on stage beneath Korea Open Invitational branding in Jeonju." },
      { file: "WhatsApp Image 2026-07-05 at 15.12.37 (1).jpeg", type: "image", alt: "A coach and a team member with the star trophy and 2nd place award board in front of the Lord of the Bricks Union Jack." },
      { file: "WhatsApp Image 2026-07-05 at 15.12.37 (2).jpeg", type: "image", alt: "A coach wearing her medal and a smiling team member holding the star trophy behind the 2nd place award board in Jeonju." },
      { file: "WhatsApp Image 2026-07-05 at 15.12.37 (3).jpeg", type: "image", alt: "A coach and a team member in GB kit hold the star trophy and 2nd place board in front of the team's Union Jack flag." },
      { file: "WhatsApp Image 2026-07-05 at 15.12.37.jpeg", type: "image", alt: "A coach and a team member celebrate with the Robot Performance Award board and star trophy at the Korea Open in Jeonju." },
      { file: "WhatsApp Image 2026-07-05 at 15.12.38 (1).jpeg", type: "image", alt: "A smiling coach and team member hold the full 2nd place award board and star trophy before the Lord of the Bricks flag." },
      { file: "WhatsApp Image 2026-07-05 at 15.12.38 (2).jpeg", type: "image", alt: "A coach and a team member beam with the star trophy and full 2nd place award board in front of the Lord of the Bricks Union Jack." },
      { file: "WhatsApp Image 2026-07-05 at 15.12.38 (3).jpeg", type: "image", alt: "Team member in a red cap raises a gold trophy beside a coach as they hold the Robot Performance Award 2nd Place board in front of a Union Jack." },
      { file: "WhatsApp Image 2026-07-05 at 15.12.38 (4).jpeg", type: "image", alt: "Team member holding a trophy and a coach display the Robot Performance Award 2nd Place board beneath a Union Jack in the competition hall." },
      { file: "WhatsApp Image 2026-07-05 at 15.12.38 (5).jpeg", type: "image", alt: "Team member and coach hold the FIRST LEGO League Korea Robot Performance Award 2nd Place board in front of a Union Jack flag." },
      { file: "WhatsApp Image 2026-07-05 at 15.12.38 (6).jpeg", type: "image", alt: "Smiling coach and team member in a red cap present the Robot Performance Award 2nd Place board, the team's lion crest visible on the flag behind." },
      { file: "WhatsApp Image 2026-07-05 at 15.12.38 (7).jpeg", type: "image", alt: "Team member in glasses holds a gold star trophy between two proud adults behind the Robot Performance Award 2nd Place board." },
      { file: "WhatsApp Image 2026-07-05 at 15.12.38 (8).jpeg", type: "image", alt: "A beaming team member holds a gold star trophy between two smiling adults, presenting the Robot Performance Award 2nd Place board in Jeonju." },
      { file: "WhatsApp Image 2026-07-05 at 15.12.38 (9).jpeg", type: "image", alt: "Team member with a star trophy stands between two adults holding the FIRST LEGO League Korea 2nd Place award board before a Union Jack." },
      { file: "WhatsApp Image 2026-07-05 at 15.12.38.jpeg", type: "image", alt: "Grinning team member in GB kit holds the star trophy beside a medal-wearing coach with the Robot Performance Award 2nd Place board in Jeonju." },
      { file: "WhatsApp Image 2026-07-05 at 15.13.24.jpeg", type: "image", alt: "Official results table from the FIRST LEGO League Korea Open showing Lord of the Bricks' round scores of 425, 500 and 540." },
      { file: "WhatsApp Image 2026-07-05 at 15.35.44.jpeg", type: "image", alt: "Robot Performance Award 2nd Place certificate from the FIRST LEGO League Korea Open Invitational in Jeonju, held on a team member's lap" },
      { file: "WhatsApp Image 2026-07-05 at 16.43.32.jpeg", type: "image", alt: "Team members on the awards stage in Jeonju with the 2nd place certificate, their Lord of the Bricks Union Jack flag and a Union Jack flying overhead" },
      { file: "WhatsApp Image 2026-07-07 at 07.59.25.jpeg", type: "image", alt: "Team members in GB kit present their project boards to judges in a classroom at the Korea Open, one pointing at the Lord of the Bricks banner" },
      { file: "WhatsApp Image 2026-07-07 at 07.59.26.jpeg", type: "image", alt: "A team member presents the robot design strategy to judges between Lord of the Bricks display banners at the Korea Open judging session" },
      { file: "WhatsApp Image 2026-07-08 at 17.46.30.jpeg", type: "image", alt: "Handmade red, white and blue beaded bracelet with Union Jack beads, a keepsake from the team's trip to Jeonju" },
      { file: "WhatsApp Image 2026-07-10 at 11.29.55.jpeg", type: "image", alt: "A team member in a red cap and a coach smile behind the Robot Performance 2nd Place certificate at the FIRST LEGO League Korea Open." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.56 (1).jpeg", type: "image", alt: "A team member pulls a playful face beside a smiling coach behind the Korea Open Robot Performance 2nd Place certificate." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.56 (10).jpeg", type: "image", alt: "Team members and coaches hold the Robot Performance Award 2nd Place certificate, a trophy and the Lord of the Bricks Union flag in Jeonju." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.56 (11).jpeg", type: "image", alt: "The full team with coaches poses with the Korea Open 2nd Place certificate and Lord of the Bricks flag in the Jeonju hall." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.56 (2).jpeg", type: "image", alt: "Team members celebrate around the Robot Performance 2nd Place certificate and Lord of the Bricks Union flag at the Korea Open." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.56 (3).jpeg", type: "image", alt: "Team members and a mentor gather behind the Korea Open 2nd Place certificate and the team's Union flag in Jeonju." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.56 (4).jpeg", type: "image", alt: "Team members flash peace signs behind the Robot Performance 2nd Place certificate and Lord of the Bricks flag in Jeonju." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.56 (5).jpeg", type: "image", alt: "A team member in a red beret leads a celebratory pose over the Lord of the Bricks flag beside the Korea Open 2nd Place certificate." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.56 (6).jpeg", type: "image", alt: "Team members hold a Lord of the Bricks Union Jack flag and flash peace signs at the FIRST LEGO League Korea Open awards, certificate raised behind." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.56 (7).jpeg", type: "image", alt: "Team members and coaches with the Robot Performance Award 2nd Place certificate and Lord of the Bricks flag at the FIRST LEGO League Korea Open." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.56 (8).jpeg", type: "image", alt: "The full Lord of the Bricks delegation, team members, coaches and parents, poses with the 2nd Place certificate at the Korea Open in Jeonju." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.56 (9).jpeg", type: "image", alt: "Team members, coaches and parents gather with the Robot Performance Award certificate and team flag in the Jeonju competition hall." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.56.jpeg", type: "image", alt: "A team member in a red cap and a coach hold the Robot Performance 2nd Place certificate in front of the team's Union flag in Jeonju." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.57 (1).jpeg", type: "image", alt: "Team members hold the Robot Performance Award 2nd Place certificate above the Lord of the Bricks flag at the Korea Open in Jeonju." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.57 (10).jpeg", type: "image", alt: "Smiling team members hold the Robot Performance Award 2nd Place certificate and gold trophy over the Lord of the Bricks flag in Jeonju." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.57 (11).jpeg", type: "image", alt: "A team member raises the gold star Robot Performance trophy beside the award certificate and Union Jack flag at the Korea Open in Jeonju." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.57 (2).jpeg", type: "image", alt: "Team members and a coach hold the Robot Performance Award 2nd Place certificate above the Lord of the Bricks flag at the Korea Open ceremony." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.57 (3).jpeg", type: "image", alt: "Team members hold the Robot Performance Award 2nd Place certificate at the FIRST LEGO League Korea Open, with a Union Jack team flag and trophy." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.57 (4).jpeg", type: "image", alt: "Smiling team members display their FIRST LEGO League Korea Open Robot Performance 2nd Place certificate behind a Union Jack team flag." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.57 (5).jpeg", type: "image", alt: "Team members in United Kingdom shirts hold the Robot Performance Award 2nd Place certificate at the FIRST LEGO League Korea Open in Jeonju." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.57 (6).jpeg", type: "image", alt: "Team members laugh together while holding their FIRST LEGO League Korea Open 2nd Place certificate and Union Jack team flag." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.57 (7).jpeg", type: "image", alt: "Team members smile at the camera with the Robot Performance Award 2nd Place certificate and their Lord of the Bricks Union Jack flag in Jeonju." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.57 (8).jpeg", type: "image", alt: "Close view of team members holding the FIRST LEGO League Korea Open Robot Performance 2nd Place certificate above their team flag." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.57 (9).jpeg", type: "image", alt: "Team members pose with certificate, trophy and Union Jack flag after taking 2nd place in Robot Performance at the FIRST LEGO League Korea Open." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.57.jpeg", type: "image", alt: "Team members hold the Lord of the Bricks Union Jack and award certificate beside a coach at the FIRST LEGO League Korea Open ceremony." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.58 (1).jpeg", type: "image", alt: "The star Robot Performance trophy is raised above a team member and coach behind the 2nd Place certificate at the Korea Open." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.58 (10).jpeg", type: "image", alt: "A team member and parent coach smile behind the FIRST LEGO League Korea Open Robot Performance Award 2nd Place certificate, Union Jack behind." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.58 (11).jpeg", type: "image", alt: "A team member and parent coach hold the Robot Performance Award 2nd Place certificate at the FIRST LEGO League Korea Open, Union Jack behind." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.58 (12).jpeg", type: "image", alt: "A team member and parent coach with the Robot Performance 2nd Place certificate at the Korea Open, Lord of the Bricks crest on the Union Jack." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.58 (2).jpeg", type: "image", alt: "A laughing team member with parent coaches behind the FIRST LEGO League Korea Open 2nd Place certificate, in front of a Union Jack." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.58 (3).jpeg", type: "image", alt: "Parent coaches and a team member hold the Robot Performance Award 2nd Place certificate at the FIRST LEGO League Korea Open in Jeonju." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.58 (4).jpeg", type: "image", alt: "A gold star trophy held aloft before the Lord of the Bricks crest and Union Jack, above the Korea Open Robot Performance certificate." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.58 (5).jpeg", type: "image", alt: "The Robot Performance Award trophy raised in front of the Union Jack and Lord of the Bricks crest at the FIRST LEGO League Korea Open." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.58 (6).jpeg", type: "image", alt: "A parent coach beside the gold Robot Performance trophy, held before the Lord of the Bricks banner at the Korea Open in Jeonju." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.58 (7).jpeg", type: "image", alt: "Parent coaches with the gold Robot Performance trophy and 2nd Place certificate at the FIRST LEGO League Korea Open, Union Jack behind." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.58 (8).jpeg", type: "image", alt: "Team coaches hold the gold Robot Performance 2nd Place trophy behind the FIRST LEGO League Korea Open Invitational award board, Union Jack behind." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.58 (9).jpeg", type: "image", alt: "Coaches with the Robot Performance 2nd Place trophy and award board at the FIRST LEGO League Korea Open Invitational in Jeonju." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.58.jpeg", type: "image", alt: "A team member holds the gold star Robot Performance trophy beside a coach, with the 2nd Place certificate and Union Jack flag behind." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.59 (1).jpeg", type: "image", alt: "A team member holds the FIRST LEGO League Korea Robot Performance 2nd Place board in front of a Union Jack and the team's lion crest." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.59 (10).jpeg", type: "image", alt: "A team member raises the gold star trophy beside the Robot Performance 2nd Place board at the FIRST LEGO League Korea Open Invitational." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.59 (11).jpeg", type: "image", alt: "Two team members hold the Robot Performance 2nd Place trophy above the award board at the FIRST LEGO League Korea Open Invitational in Jeonju." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.59 (12).jpeg", type: "image", alt: "Two team members display the gold star trophy in front of a Union Jack at the FIRST LEGO League Korea Open Invitational." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.59 (2).jpeg", type: "image", alt: "A team member with the Robot Performance 2nd Place board at the FIRST LEGO League Korea Open Invitational, Union Jack in the background." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.59 (3).jpeg", type: "image", alt: "A beaming team member holds the Robot Performance 2nd Place board at the FIRST LEGO League Korea Open Invitational, Union Jack behind." },
      { file: "WhatsApp Image 2026-07-10 at 11.29.59 (4).jpeg", type: "image", alt: "Team member smiling behind the Robot Performance 2nd Place board at the FIRST LEGO League Korea Open, Union Jack draped behind" },
      { file: "WhatsApp Image 2026-07-10 at 11.29.59 (5).jpeg", type: "image", alt: "Team member holding the FIRST LEGO League Korea Open Robot Performance 2nd Place board in front of a Union Jack backdrop" },
      { file: "WhatsApp Image 2026-07-10 at 11.29.59 (6).jpeg", type: "image", alt: "Team member in a red cap raising the star trophy over the Robot Performance 2nd Place board at the Korea Open in Jeonju" },
      { file: "WhatsApp Image 2026-07-10 at 11.29.59 (7).jpeg", type: "image", alt: "Team member in a red cap celebrating with the star trophy and Robot Performance 2nd Place board at the FIRST LEGO League Korea Open" },
      { file: "WhatsApp Image 2026-07-10 at 11.29.59 (8).jpeg", type: "image", alt: "Team member in a red cap celebrating with the trophy behind the Robot Performance 2nd Place board, Union Jack behind" },
      { file: "WhatsApp Image 2026-07-10 at 11.29.59 (9).jpeg", type: "image", alt: "Team member holding the Robot Performance Award trophy beside the 2nd Place board at the FIRST LEGO League Korea Open in Jeonju" },
      { file: "WhatsApp Image 2026-07-10 at 11.29.59.jpeg", type: "image", alt: "A team member smiles behind the Robot Performance 2nd Place board at the FIRST LEGO League Korea Open Invitational, Union Jack draped behind." },
      { file: "WhatsApp Image 2026-07-10 at 11.30.00 (1).jpeg", type: "image", alt: "Team member smiling behind the Robot Performance 2nd Place board in front of the Union Jack at the Korea Open in Jeonju" },
      { file: "WhatsApp Image 2026-07-10 at 11.30.00 (2).jpeg", type: "image", alt: "Team member with the Robot Performance Award trophy and 2nd Place board at the FIRST LEGO League Korea Open, Union Jack behind" },
      { file: "WhatsApp Image 2026-07-10 at 11.30.00 (3).jpeg", type: "image", alt: "Team member holds the Robot Performance certificate in front of a Union Jack at the FIRST LEGO League Korea Open in Jeonju." },
      { file: "WhatsApp Image 2026-07-10 at 11.30.00 (4).jpeg", type: "image", alt: "Team member with a gold star trophy and the Robot Performance Award 2nd Place certificate in front of a Union Jack in Jeonju." },
      { file: "WhatsApp Image 2026-07-10 at 11.30.00.jpeg", type: "image", alt: "Two team members jointly holding the Robot Performance trophy above the 2nd Place board at the FIRST LEGO League Korea Open" },
      { file: "WhatsApp Image 2026-07-10 at 11.30.27 (1).jpeg", type: "image", alt: "UK team members hold two FIRST LEGO League Korea Open award certificates, including Robot Performance 2nd Place, in Jeonju." },
      { file: "WhatsApp Image 2026-07-10 at 11.30.27 (2).jpeg", type: "image", alt: "Two UK teams celebrate with award certificates and a star trophy at the FIRST LEGO League Korea Open Invitational in Jeonju." },
      { file: "WhatsApp Image 2026-07-10 at 11.30.27 (3).jpeg", type: "image", alt: "Team members on stage with the Union Jack, Lord of the Bricks flag and Robot Performance 2nd Place certificate in Jeonju." },
      { file: "WhatsApp Image 2026-07-10 at 11.30.27.jpeg", type: "image", alt: "UK team members with Engineering Excellence and Robot Performance 2nd Place certificates at the FIRST LEGO League Korea Open." },
      { file: "WhatsApp Image 2026-07-10 at 11.31.10 (1).jpeg", type: "image", alt: "Team members with their signed Union Jack team flag on the ceremony stage at the FIRST LEGO League Korea Open, Jeonju." },
      { file: "WhatsApp Image 2026-07-10 at 11.31.10 (2).jpeg", type: "image", alt: "Team members and coach display signed Union Jack flags on stage at the FIRST LEGO League Korea Open Invitational in Jeonju." },
      { file: "WhatsApp Image 2026-07-10 at 11.31.10 (3).jpeg", type: "image", alt: "Team members line up on stage at the FIRST LEGO League Korea Open, raising fists and Union Jack flags as one holds the trophy aloft." },
      { file: "WhatsApp Image 2026-07-10 at 11.31.10 (4).jpeg", type: "image", alt: "Team members in Union Jack bucket hats raise their fists in celebration behind a Union Jack flag at the FIRST LEGO League Korea Open ceremony." },
      { file: "WhatsApp Image 2026-07-10 at 11.31.10 (5).jpeg", type: "image", alt: "The team spreads Union Jack flags across the stage at the FIRST LEGO League Korea Open in Jeonju, with the trophy raised at one end." },
      { file: "WhatsApp Image 2026-07-10 at 11.31.10 (6).jpeg", type: "image", alt: "Team members pose with a Union Jack flag and their trophy on stage beneath the FIRST LEGO League Korea Open backdrop in Jeonju." },
      { file: "WhatsApp Image 2026-07-10 at 11.31.10.jpeg", type: "image", alt: "Team members and coach hold a badge-covered signed Union Jack on stage at the FIRST LEGO League Korea Open in Jeonju." },
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
    title: "The films",
    date: "Jeonju, July 2026",
    dir: JEONJU_VID,
    items: [
      {
        src: "media/journey/videos/jeonju-award-film.mp4",
        poster: "media/journey/posters/jeonju-award-film.jpg",
        type: "video",
        alt: "The Robot Performance Award ceremony in full — silver for Great Britain: the team called up, medals on, Union Jack raised",
      },
      {
        src: "media/journey/videos/both-uk-teams.mp4",
        poster: "media/journey/posters/both-uk-teams.jpg",
        type: "video",
        alt: "Both UK teams together after prize giving — medals, certificates and the Union Jack",
      },
      {
        file: "WhatsApp Video 2026-07-05 at 10.15.50.mp4",
        poster: "media/journey/posters/wa-robot-tables.jpg",
        type: "video",
        alt: "At the robot game tables on competition morning — flags up as the runs begin",
      },
      {
        file: "WhatsApp Video 2026-07-05 at 14.27.54.mp4",
        poster: "media/journey/posters/wa-after-award.jpg",
        type: "video",
        alt: "Walking off stage with the Robot Performance Award board, medals on",
      },
      {
        src: "media/journey/videos/team-with-jeonju-kids.mp4",
        poster: "media/journey/posters/team-with-jeonju-kids.jpg",
        type: "video",
        alt: "The whole team surrounded by kindergarten children from Jeonju, a sea of Union Jack hand flags",
      },
      {
        src: "media/journey/videos/uk-flags-jeonju-kids.mp4",
        poster: "media/journey/posters/uk-flags-jeonju-kids.jpg",
        type: "video",
        alt: "Jeonju kindergarten children wave Union Jack flags around the team's stand",
      },
      {
        src: "media/journey/videos/girls-with-jeonju-kids.mp4",
        poster: "media/journey/posters/girls-with-jeonju-kids.jpg",
        type: "video",
        alt: "Team members with kindergarten children from Jeonju, all waving UK flags",
      },
      {
        src: "media/journey/videos/kindergarten-kids.mp4",
        poster: "media/journey/posters/kindergarten-kids.jpg",
        type: "video",
        alt: "A quick group moment with the Jeonju kindergarten class",
      },
      {
        src: "media/journey/videos/uae-bear.mp4",
        poster: "media/journey/posters/uae-bear.jpg",
        type: "video",
        alt: "The team poses with Team UAE's inflatable bear mascot in the Jeonju hall",
      },
      {
        src: "media/journey/videos/uae-bear-arena.mp4",
        poster: "media/journey/posters/uae-bear-arena.jpg",
        type: "video",
        alt: "The UAE bear mascot wanders among the kindergarten classes visiting the Jeonju arena",
      },
    ],
  },
];

/* =========================================================
   AUTO-DISCOVERY — photos appear on the site the moment they
   land in the Supabase folder. Every event with an `autoDir`
   is listed at page load; image files not already curated in
   `items` (and not in `exclude`) are appended in filename
   order with a generated caption.

   To wire a NEW folder: create it under LOFB/ in the
   public-assets bucket, then set that event's
     dir:     SUPA + "<Folder%20Name>/"   (URL-encoded)
     autoDir: "LOFB/<Folder Name>"        (raw)

   Videos are NEVER auto-added on purpose: phone/DJI originals
   are 4K HEVC, which Firefox and most Android devices cannot
   play, and they run to hundreds of MB. Transcode to H.264
   (media/journey/videos/) and list them in `items` by hand.
   ========================================================= */
const SUPA_LIST = "https://jqpwucwzacqrpeazqbmd.supabase.co/storage/v1/object/list/public-assets";
const SUPA_KEY = "sb_publishable_UR0H0BWA8XcsZ6u-P9_ylA_sadBGRYW"; // publishable client key

window.JOURNEY_MEDIA_READY = Promise.all(
  window.JOURNEY_MEDIA.filter(ev => ev.autoDir).map(ev =>
    fetch(SUPA_LIST, {
      method: "POST",
      headers: { apikey: SUPA_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ prefix: ev.autoDir, limit: 1000, sortBy: { column: "name", order: "asc" } }),
    })
      .then(res => (res.ok ? res.json() : []))
      .then(files => {
        const have = new Set(ev.items.map(i => i.file).filter(Boolean));
        const skip = new Set(ev.exclude || []);
        files.forEach(f => {
          if (!/\.(jpe?g|png|webp|avif)$/i.test(f.name)) return; // images only
          if (have.has(f.name) || skip.has(f.name)) return;
          ev.items.push({ file: f.name, type: "image" }); // pages generate the caption
        });
      })
      .catch(() => {}) /* offline or listing blocked — curated items still render */
  )
).then(() => window.JOURNEY_MEDIA);
