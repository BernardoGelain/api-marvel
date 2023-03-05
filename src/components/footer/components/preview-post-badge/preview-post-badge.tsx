import NextImage from "@/components/image/image";
import { loadLastPost } from "@/services/blog/load-last-post";
import { useQuery } from "@tanstack/react-query";
import {
  KeepReading,
  PreviewPostContainer,
  PreviewPostDescription,
  PreviewPostImageAndDescription,
  PreviewPostTitle,
} from "./preview-post-badge-styles";

export const PreviewPostBadge = () => {
  const { data } = useQuery({
    refetchOnWindowFocus: false,
    queryFn: loadLastPost,
    queryKey: ["previewPost"],
  });

  if (!data) return null;

  return (
    <PreviewPostContainer>
      <PreviewPostTitle>Última do blog</PreviewPostTitle>
      <PreviewPostImageAndDescription>
        {Boolean(data.image_url) && (
          <NextImage
            src={data.image_url}
            width={60}
            height={60}
            alt={`A preview image from blog post ${data.title}`}
            style={{ objectFit: "cover" }}
          />
        )}
        <PreviewPostDescription>{data.title}</PreviewPostDescription>
      </PreviewPostImageAndDescription>
      <KeepReading href={`/blog/${data.slug}`}>Continuar lendo</KeepReading>
    </PreviewPostContainer>
  );
};
