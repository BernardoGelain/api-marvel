import { PostModel } from "@/models/post-model";
import { PostCardContainer, PostImage, PostTitle } from "./post-card-styles";

type Props = {
  post: PostModel;
};

export const PostCard = ({ post }: Props) => {
  if (!post) return null;

  return (
    <PostCardContainer href={`/blog/${post.slug}`}>
      <PostImage
        src={post.image_url}
        width={200}
        height={150}
        alt={`An image of ${post.title} post`}
      />
      <PostTitle>{post.title}</PostTitle>
    </PostCardContainer>
  );
};
