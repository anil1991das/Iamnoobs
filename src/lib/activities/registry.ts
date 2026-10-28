export interface ActivityConfig {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  category: string;
  description: string;
  metaDescription: string;
  intro: string;
  learningPoint: string;
  keywords: string[];
}

export const activities: ActivityConfig[] = [
  {
    slug: "internet-time-machine",
    title: "Internet Time Machine",
    shortTitle: "Internet Time Machine",
    icon: "🕰️",
    category: "Digital history",
    description:
      "Travel through the web's eras and explore how everyday online life changed.",
    metaDescription:
      "Explore an interactive timeline of the web, from early homepages to today's connected world, with original facts and playful comparisons.",
    intro:
      "The web changes one little invention at a time. Choose an era to explore what browsing, creating, and connecting felt like.",
    learningPoint:
      "A playful, high-level history of web standards, browsers, and how people use the internet.",
    keywords: ["internet timeline", "web history", "interactive web activity"],
  },
  {
    slug: "pixel-playground",
    title: "Pixel Playground",
    shortTitle: "Pixel Playground",
    icon: "🎨",
    category: "Creative coding",
    description:
      "Paint a tiny pixel scene and discover how grids, coordinates, and color create digital images.",
    metaDescription:
      "Make a small pixel-art scene in your browser and learn about pixels, coordinates, color values, and raster images.",
    intro:
      "A digital picture is made from tiny colored squares. Pick a color, paint the grid, and see how a few pixels can make a scene.",
    learningPoint:
      "Understand pixels, two-dimensional coordinates, and how color values combine into an image.",
    keywords: ["pixel art maker", "pixel activity", "learn image pixels"],
  },
  {
    slug: "algorithm-playground",
    title: "Algorithm Playground",
    shortTitle: "Algorithm Playground",
    icon: "🧩",
    category: "Computer science",
    description:
      "Step through search and sorting challenges and see how different strategies solve a task.",
    metaDescription:
      "Compare linear search and sorting strategies with an interactive visualizer. Learn how algorithms make decisions step by step.",
    intro:
      "An algorithm is a repeatable set of steps. Try a search or sorting challenge and reveal each comparison as it happens.",
    learningPoint:
      "Compare linear search with binary search and watch selection sort organize a small list.",
    keywords: ["algorithm visualizer", "sorting activity", "search algorithm interactive"],
  },
  {
    slug: "signal-journey",
    title: "Signal Journey",
    shortTitle: "Signal Journey",
    icon: "📡",
    category: "How the web works",
    description:
      "Follow a message from your browser through name lookup and networks to a server and back.",
    metaDescription:
      "Explore how a browser request travels through DNS, network connections, servers, and a response in this interactive web activity.",
    intro:
      "You enter a web address and press go. Follow a request through a simplified journey to discover the invisible steps behind a page loading.",
    learningPoint:
      "Learn the roles of the browser, DNS, a connection, a web server, and the response sent back.",
    keywords: ["how internet works activity", "DNS visualizer", "browser request journey"],
  },
];

export function getActivity(slug: string): ActivityConfig | undefined {
  return activities.find((activity) => activity.slug === slug);
}
