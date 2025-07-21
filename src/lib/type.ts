export type TPostListItem = {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  content: string;
  lastUpdatedDate: string;
  tags: string[];
  image?: string;
};
export type Tsorting = "default" | "recent";
