import { blogApi } from "@/lib/axios";
import { PostModel } from "@/models/post-model";

type LoadPostsResponse = PostModel;

export const loadLastPost = async (): Promise<LoadPostsResponse> => {
  const response = await blogApi.get("/posts/first");

  return response.data;
};
