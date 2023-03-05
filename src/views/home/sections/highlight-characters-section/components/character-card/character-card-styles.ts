import NextImage from "@/components/image/image";
import { styled } from "@/styles/theme";
import Link from "next/link";

export const CardBottomText = styled(Link, {
  cursor: "pointer",
});

export const CardCenterText = styled(CardBottomText, {
  width: "250px",
  height: "330px",
});

export const CardDivider = styled("div", {
  background: "$primary",
  display: "block",
  height: 3,
  marginTop: -4,
});

export const CardDividerCenterText = styled(CardDivider, {
  width: "100%",
});

export const CardName = styled("span", {
  position: "absolute",
  bottom: 0,
  fontFamily: "Oswald",
  color: "$white",
  fontSize: "$md",
  left: "50%",
  transform: "translateX(-50%)",
  width: "100%",
  height: 50,
  textAlign: "center",
});

export const BottomTextWrapper = styled("span", {
  background: "$black",
  display: "flex",
  alignItems: "center",
  height: "80px",
  color: "$white",
  fontFamily: "Open Sans",
  fontSize: "$md",
  paddingLeft: "10px",
  width: "100%",
});

export const CardImageCenterText = styled("img", {
  boxShadow: "inset 0 0 10px 0 rgba(0, 0, 0, 0.5)",
  objectFit: "cover",
  width: "100%",
});

export const CardImageBottomText = styled("img", {
  width: "100%",
});
