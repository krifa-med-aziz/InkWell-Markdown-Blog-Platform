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
  canDeleted?: boolean;
  canEdited?: boolean;
};
export type Tsorting = "oldest" | "recent" | "";

export type TUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  bookmarksPostsIds: string[];
};

export type TFormData = TUser & {
  confirmPassword: string;
};
