import NextImage from "@/components/image/image";
import { styled } from "@/styles/theme";
import Link from "next/link";

export const PostCardContainer = styled(Link, {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "16px",
  flexDirection: "column",
  marginTop: "100px",
  color: "$white",
});

export const PostTitle = styled("h1", {
  fontFamily: "Open Sans",
});

export const PostImage = styled(NextImage, {
  width: "100%",
  height: "auto",
});
