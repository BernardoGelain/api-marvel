import { styled } from "@/styles/theme";

export const CarouselActionButton = styled("button", {
  all: "unset",
  height: "41px",
  width: "41px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "3px solid $white",
  cursor: "pointer",

  "@media (max-width: 600px)": {
    marginBottom: "30px",
  },
});

export const CarouselActionButtonsContainer = styled("div", {
  display: "flex",
  gap: 10,

  "@media (max-width: 1250px)": {
    marginRight: 50,
  },
});

export const CarouselHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "30px",
  "@media (max-width: 600px)": {
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export const CarouselTitle = styled("h2", {
  color: "$white",
  textTransform: "uppercase",
  fontFamily: "Oswald",
  fontSize: "$xxl",
});
