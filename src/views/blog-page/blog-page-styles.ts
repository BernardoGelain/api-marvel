import { styled } from "@/styles/theme";

export const BlogPageContainer = styled("div", {
  background: "$black",
  color: "$white",
  display: "flex",
  flexDirection: "column",
  paddingBottom: 300,
});

export const BlogPageTitle = styled("h1", {
  fontSize: "$3xl",
  fontFamily: "Oswald",
  textTransform: "uppercase",
});

export const PostsContainer = styled("section", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
  gap: 30,
});
