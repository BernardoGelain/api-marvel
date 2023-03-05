import { blogApi } from "@/lib/axios";
import { PostModel } from "@/models/post-model";

type LoadPostParams = {
  slug: string;
};

type LoadPostBySlugResponse = PostModel;

export const loadPostBySlug = async ({
  slug,
}: LoadPostParams): Promise<LoadPostBySlugResponse> => {
  const response = await blogApi.get(`/posts/${slug}`);

  return response.data;
};
