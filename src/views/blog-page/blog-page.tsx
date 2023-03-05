import { Container, Footer, Header, PageLoading } from "@/components";
import { loadPosts } from "@/services";
import { useQuery } from "@tanstack/react-query";
import {
  BlogPageContainer,
  BlogPageTitle,
  PostsContainer,
} from "./blog-page-styles";
import { PostCard } from "./components";

const BlogPage = () => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["blogPosts"],
    refetchOnWindowFocus: false,
    queryFn: () => loadPosts(),
  });

  if (isLoading || isFetching) return <PageLoading />;

  return (
    <>
      <Header />
      <BlogPageContainer>
        <Container>
          <BlogPageTitle>Bem vindo ao blog da Marvel</BlogPageTitle>
          <PostsContainer>
            {data?.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </PostsContainer>
        </Container>
      </BlogPageContainer>
      <Footer />
    </>
  );
};

export default BlogPage;
