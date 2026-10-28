import { blogPosts } from '../data/blog';

export const BLOG_PAGE_SIZE = 12;

export function getBlogPageCount(): number {
  return Math.max(1, Math.ceil(blogPosts.length / BLOG_PAGE_SIZE));
}

export function getBlogPostsForPage(page: number) {
  const safePage = Math.min(Math.max(1, page), getBlogPageCount());
  const start = (safePage - 1) * BLOG_PAGE_SIZE;
  return {
    page: safePage,
    posts: blogPosts.slice(start, start + BLOG_PAGE_SIZE),
    totalPages: getBlogPageCount(),
  };
}

export function blogPagePath(page: number): string {
  if (page <= 1) return '/blog/';
  return `/blog/page/${page}/`;
}
