export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface CreatePost extends Omit<Post, 'id'> {
  userId: number;
}
