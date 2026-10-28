This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Writing articles

Copy `src/content/article-template.md` to `src/content/articles/<slug>.md`, then
replace its example frontmatter and outline with your article. The filename and
frontmatter slug must match and use lowercase kebab-case. Save the Markdown
file directly in `src/content/articles/`; article files are published by
default. Add `draft: true` to the frontmatter to keep an article hidden.

Put each article's images in `public/articles/<slug>/` and reference them with
site-relative Markdown paths, such as
`![Example output](/articles/<slug>/example.webp)`. Published articles require
a cover image, descriptive cover-image alt text, valid dates, and a registered
tool route for each `relatedTools` entry. Update the publication date and set
`draft: false` only when the article and images are ready.

Drafts are excluded from the article index and sitemap and render as 404 pages.
During development, save the file and refresh the page. The deployed site uses
a static export, so rebuild and redeploy after adding or editing articles. Run
`npm run build` to validate article metadata, links, cover images, and the
static export before publishing.

## Code games

The searchable tools directory is available at `/tools`; the home page links
to it and individual tool routes remain at `/<tool-slug>`.

The Games hub at `/games` lists distinct games. Bug Hunt is one game with its
language picker at `/games/bug-hunt`; Python, C, C++, Java, and C# each have 10
fixed-answer challenges defined in `src/lib/games/bug-hunt.ts`. Adding a
language there automatically adds its static route and sitemap entry. Each
challenge should include a correct answer index and a teaching explanation.
Answers are checked against fixed choices—the game does not execute player
code—and completed levels are saved in the visitor's browser. Snake is listed
as a playable browser game at `/games/snake`, with guided Python examples for
the game loop, coordinates, keyboard input, collisions, and scoring. The game
does not execute the displayed Python examples.

## Interactive activities

The Activities hub at `/activities` lists four original browser experiences:
Internet Time Machine, Pixel Playground, Algorithm Playground, and Signal
Journey. Their copy, metadata, and static route slugs are defined in
`src/lib/activities/registry.ts`; the client interactions are in
`src/components/activity-experience.tsx`. Keep each activity self-contained,
keyboard accessible, and usable without an account or server-side state.

## Programming courses

The self-paced Python and C courses are listed at `/courses`. Course content,
module checkpoints, lesson examples, and fixed-answer relevance quests are
defined in `src/lib/courses/curriculum.ts`; course routes are generated from
those course slugs. The shared player in `src/components/course-player.tsx`
tracks lesson and quest XP, badges, and an optional non-punitive study streak
in versioned browser-local storage. The course player presents code examples
for learning and does not execute learner-submitted code. Keep browser storage
failures visible to learners and update the static sitemap when changing
discoverable route registries.

## Production checks

Run `npm run lint` and `npm run typecheck` before releasing. `npm test` builds
the static site and runs Node-based smoke tests against the exported tools
route, deployment redirects, sitemap, robots file, and privacy disclosures.
Deploy the generated `out/` directory with the platform configuration files
from `public/` so the static host applies the intended redirects and headers.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
"# Iamnoobs" 
"# Iamnoobs" 
