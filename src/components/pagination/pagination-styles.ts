import { styled } from "@/styles/theme";

export const PaginationContainer = styled("div", {
  ".pagination": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    listStyle: "none",
    marginTop: 30,
  },

  ".page-item": {
    cursor: "pointer",
    color: "$gray",
    fontFamily: "Open Sans",
    fontWeight: "semibold",
    fontSize: "16px",
  },

  ".page-item.active": {
    background: "$primary",
    color: "$white",
    width: "22px",
    height: "22px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px",
  },
});
