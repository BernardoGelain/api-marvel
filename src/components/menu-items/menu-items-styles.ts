import { styled } from "@/styles/theme";
import Link from "next/link";

export const MenuItemsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const MenuItemsTitle = styled("div", {
  color: "$white",
  fontFamily: "Oswald",
  fontSize: "19px",
  fontWeight: "semibold",
  marginBottom: "9px",
});

export const MenuItem = styled(Link, {
  color: "$gray",
  fontFamily: "Open Sans",
});
