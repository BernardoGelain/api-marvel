import { styled } from "@/styles/theme";

export const PageLoadingContainer = styled("div", {
  background: "$black",
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "& > h1": {
    fontFamily: "Oswald",
    fontWeight: "bold",
    fontSize: "$3xl",
    color: "$primary",
    textTransform: "uppercase",
  },
});
