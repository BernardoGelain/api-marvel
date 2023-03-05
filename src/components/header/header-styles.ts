import { styled } from "@/styles/theme";

export const Container = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "105px",
  background: "$black",
  padding: "0 32px",
});

export const MenuItemsWrapper = styled("nav", {
  display: "flex",
  gap: "36px",
  fontSize: "$sm",
  a: {
    color: "$white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: "Open Sans",
  },

  "@media (max-width: 600px)": {
    display: "none",
  },
});
