import { blogApi } from "@/lib/axios";
import { PostModel } from "@/models/post-model";

type LoadPostBySlugResponse = PostModel[];

export const loadPosts = async (): Promise<LoadPostBySlugResponse> => {
  const response = await blogApi.get("posts");

  return response.data;
};
