# itscava.com

First of all a huge thank you to braydoncoyer.dev, I tool all the inspiration and started from his template. I love the idea of having Notion Databases as template! Thank you Braydon!

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [Notion API](https://developers.notion.com)

- **Deployment**: [Vercel](https://vercel.com)

## Project Overview

- `components/*` - Various components used throughout the site.
- `layouts/*` - The different layout options available to use on each page.
- `lib/*` - Short for "library", a collection of helpful utilities or code for external services.
- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction) powering article reactions, article views,
- `pages/blog/*` - Static pre-rendered blog pages that fetch information from the Notion API.
- `pages/*` - All other static pages.
- `public/*` - Static assets including robots.txt
- `styles/*` - A handful of global styles, and reusable classes utilzing @apply with Tailwind.
- `data/*` - a simple object containing global data about the site.

## Running Locally

```bash
$ git clone https://github.com/andreacavagna01/itscava.com.git
$ cd itscava.com
$ npm install
$ npm run dev
```

Create a `.env` file similar to `.env.example` and include the appropriate keys.

## Notion Article Template

Duplicate the following Notion databases, grab the database ID and add it to the environment variables in the `.env` file:

- [Blog Database template](https://itscava.notion.site/Personal-Website-template-1734555464e942e792ff6acb9852df96?pvs=4)
