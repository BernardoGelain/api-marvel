import { styled } from "@/styles/theme";

export const InputContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const InputLabel = styled("label", {
  display: "flex",
  flexDirection: "column",
  color: "$white",
  fontFamily: "Open Sans",
  fontWeight: "bold",
  fontSize: "$sm",
  textTransform: "uppercase",
});

export const Input = styled("input", {
  outline: "transparent",
  paddingLeft: "21px",
  border: 0,
  "&::placeholder": {
    color: "$gray",
    fontFamily: "Open Sans",
  },
});

export const ErrorMessageLabel = styled("span", {
  color: "$primary",
  fontFamily: "Open Sans",
});
