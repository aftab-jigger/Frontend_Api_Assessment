import { apiSlice } from "./api";
import { Post } from "../../types";
import { CreatePost } from "../../types/Post";

export const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], any>({
      query: () => ({ url: "/posts" }),
      providesTags: ["Posts"], // Example tag, adjust as per your needs
    }),
    createPost: builder.mutation<void, CreatePost>({
      query: (data) => ({
        url: "/posts",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Posts"], // Example invalidation tag, adjust as per your needs
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostMutation } = postsApiSlice;
