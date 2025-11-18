export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "iot-mailbox",
    title: "Sending love letters",
    date: "2025-11-18",
    excerpt:
      "Explaining my design philosophy behind the IoT mailbox I made for my girlfriend to send her letters.",
  },
];

export default BLOG_POSTS;
