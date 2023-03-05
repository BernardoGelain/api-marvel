import NextImage from "@/components/image/image";
import { styled } from "@/styles/theme";

export const MainBannerImage = styled(NextImage, {
  objectFit: "cover",
  width: "100%",
  height: "620px",
});

export const MainBannerContainer = styled("div", {
  position: "relative",
});

export const MainBannerTitle = styled("h1", {
  fontWeight: "bold",
  color: "$white",
  fontSize: "100px",
  fontFamily: "Oswald",
  textTransform: "uppercase",
  position: "absolute",
  top: 250,
  left: "350px",
  width: "100%",
  maxWidth: "520px",

  "@media (max-width: 768px)": {
    fontSize: "50px",
    left: "30px",
  },
});
