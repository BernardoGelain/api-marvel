import NextImage from "@/components/image/image";
import { styled } from "@/styles/theme";

export const MarvelMastercardSectionContainer = styled("section", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "150px 0",
});

export const MarvelMastercardSectionTitle = styled("h2", {
  fontSize: "$3xl",
  fontFamily: "Oswald",
  textTransform: "uppercase",
  color: "$black",
  margin: 0,
});

export const MarvelMastercardSectionDescription = styled("p", {
  fontSize: "$md",
  fontFamily: "Open Sans",
  color: "$gray",
});

export const CallToActionButton = styled("button", {
  background: "$primary",
  color: "$white",
  width: "100%",
  maxWidth: "324px",
  height: "61px",
  border: 0,
  fontSize: "$md",
  fontFamily: "Open Sans",
  fontWeight: "bold",
  textTransform: "uppercase",
  cursor: "pointer",
  transition: "filter 0.2s",

  "&:hover": {
    filter: "brightness(0.7)",
  },
});

export const SectionFooterText = styled("div", {
  color: "$primary",
  textTransform: "uppercase",
  fontSize: "$md",
  fontWeight: "bold",
  marginTop: "15px",
  cursor: "pointer",
});

export const MarvelMastercardSectionImage = styled(NextImage, {
  width: "100%",
  height: "auto",
  maxWidth: "1016px",
});
