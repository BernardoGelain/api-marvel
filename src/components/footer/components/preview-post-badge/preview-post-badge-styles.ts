import { styled } from "@/styles/theme";
import Link from "next/link";

export const PreviewPostContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const PreviewPostTitle = styled("div", {
  color: "$white",
  fontFamily: "Oswald",
  fontWeight: "bold",
  fontSize: "19px",
});

export const KeepReading = styled(Link, {
  color: "$gray",
  textDecoration: "underline",
  fontFamily: "Open Sans",
  fontSize: "$md",
});

export const PreviewPostImageAndDescription = styled("div", {
  display: "flex",
  gap: "20px",
});

export const PreviewPostDescription = styled("div", {
  color: "$white",
  fontFamily: "Open Sans",
  fontWeight: "bold",
  fontSize: "$md",
  width: "100%",
  maxWidth: "300px",
});
