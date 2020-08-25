//MainTypes

export type AuthorType = {
  username: string;
  bio: string | null;
  image: string;
  following: boolean;
};

export type FeedType = {
  author: AuthorType;
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: Array<string>;
  title: string;
  updatedAt: string;
};

export type FeedsListType = Array<FeedType>;

export type FeedsStateType = {
  feedsList: FeedsListType;
  feedsCount: number;
  loading: boolean;
  error: boolean | ErrorHttpAction;
};

//Error
export type ErrorHttpAction = {
  status: number;
  message: string;
};

export type FeedsListRequestParamsType = {
  limit?: string;
  offset?: string;
};
