import { Container, Footer, Header, PageLoading } from "@/components";
import { loadPostBySlug } from "@/services";
import { useQuery } from "@tanstack/react-query";
import {
  PostContent,
  PostDetailsPageContainer,
  PostImage,
  PostTitle,
} from "./post-details-page-styles";

type Props = {
  slug: string;
};

const PostDetailsPage = ({ slug }: Props) => {
  const { data, isLoading, isFetching } = useQuery({
    refetchOnWindowFocus: false,
    queryKey: ["postDetails"],
    queryFn: () =>
      loadPostBySlug({
        slug: slug as string,
      }),
  });

  if (!data) return null;

  if (isLoading || isFetching) return <PageLoading />;

  return (
    <>
      <Header />
      <PostDetailsPageContainer>
        <Container>
          <PostImage
            src={data.image_url}
            width={300}
            height={300}
            alt={`An image of ${data.title} post`}
          />
          <PostTitle>{data.title}</PostTitle>
          <PostContent>{data.content}</PostContent>
        </Container>
      </PostDetailsPageContainer>
      <Footer />
    </>
  );
};

export default PostDetailsPage;
