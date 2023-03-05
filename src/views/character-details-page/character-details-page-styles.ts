import NextImage from "@/components/image/image";
import { styled } from "@/styles/theme";

export const CharacterDetailsContainer = styled("div", {
  background: "$black",
  width: "100vw",
  height: "100vh",
});

export const CharacterDetailsTitle = styled("div", {
  fontSize: "$3xl",
  color: "$white",
  fontFamily: "Oswald",
  fontWeight: "bold",
  textTransform: "uppercase",
});

export const CharacterDetailsDescription = styled("div", {
  fontFamily: "Open Sans",
  color: "$white",
  fontSize: "$lg",
});

export const CharacterDetailsImage = styled(NextImage, {
  maxWidth: "1200px",
  maxHeight: "600px",
  width: "100%",
  height: "auto",
  objectFit: "cover",
});
