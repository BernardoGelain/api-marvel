import { styled } from "@/styles/theme";

export const NewsletterFormContainer = styled("form", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
});

export const NewsletterFormTitle = styled("h4", {
  fontSize: "$md",
  color: "$white",
  fontFamily: "Oswald",
  fontWeight: "bold",
  marginBottom: "16px",
});

export const InputAndButtonContainer = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  height: "92px",

  "@media (max-width: 600px)": {
    flexDirection: "column",
    height: "100%",
  },
});

export const SendButton = styled("button", {
  background: "$primary",
  color: "$white",
  fontFamily: "Open Sans",
  textTransform: "uppercase",
  fontWeight: "bold",
  border: 0,
  width: "120px",
  height: "61px",
  cursor: "pointer",
  fontSize: "$sm",
  alignSelf: "flex-end",

  "@media (max-width: 600px)": {
    width: "100%",
  },
});
