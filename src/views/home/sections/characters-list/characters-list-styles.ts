import { styled } from "@/styles/theme";

export const CharactersListContainer = styled("section", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))",
  gap: "30px",

  "@media (max-width: 768px)": {
    padding: 30,
  },
});

export const CharactersListTitle = styled("h2", {
  color: "$black",
  textTransform: "uppercase",
  marginBottom: "50px",
  fontFamily: "Oswald",
  fontSize: "$xxl",
  paddingTop: "150px",
});
