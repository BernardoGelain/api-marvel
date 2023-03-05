import NextImage from "@/components/image/image";
import { styled } from "@/styles/theme";

export const PostDetailsPageContainer = styled("section", {
  width: "100vw",
  background: "$black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "$gray",
  flexDirection: "column",
  padding: "200px 64px",
});

export const PostImage = styled(NextImage, {
  maxWidth: "1200px",
  maxHeight: "600px",
  width: "100%",
  height: "auto",
  objectFit: "contain",
});

export const PostTitle = styled("h1", {
  fontSize: "$3xl",
  fontFamily: "Oswald",
  textTransform: "uppercase",
});

export const PostContent = styled("p", {
  fontSize: "$lg",
  lineHeight: 1.5,
});
