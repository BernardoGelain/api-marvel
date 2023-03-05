import { styled } from "@/styles/theme";

export const FooterContainer = styled("footer", {
  background: "$black",
  display: "flex",
  height: "410px",
  paddingBottom: "200px",
  flexDirection: "column",
  gap: "150px",

  "@media (max-width: 1330px)": {
    height: "800px",
  },
});

export const FooterContent = styled("div", {
  display: "flex",
  gap: "72px",
  width: "100%",
  maxWidth: "1000px",
  margin: "0 auto",

  "@media (max-width: 1270px)": {
    padding: "0 32px",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export const NewsletterCard = styled("div", {
  background: "$primary",
  color: "$white",
  fontSize: "$3xl",
  fontFamily: "Oswald",
  fontWeight: "bold",
  width: "100%",
  maxWidth: "408px",
  padding: "38px",
  textTransform: "uppercase",
  marginTop: "-100px",

  "@media (max-width: 600px)": {
    maxWidth: "300px",
    fontSize: "40px",
    height: "100%",
  },
});

export const FooterNavigation = styled("div", {
  display: "flex",
  justifyContent: "space-around",
  background: "$footer",
  padding: "100px 0px",
  "@media (max-width: 1330px)": {
    flexDirection: "column",
    paddingLeft: "30px",
    gap: "30px",
  },
});

export const FooterNavigationRight = styled("div", {
  display: "flex",
  gap: "90px",
  "@media (max-width: 1330px)": {
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export const FooterNavigationLeft = styled("div", {
  display: "flex",
  "@media (max-width: 1330px)": {
    flexDirection: "column",
  },
});

export const SocialContent = styled("div", {
  marginLeft: "80px",

  "@media (max-width: 1330px)": {
    marginLeft: "0px",
  },
});

export const FollowMarvelText = styled("p", {
  color: "$white",
  fontFamily: "Oswald",
  fontSize: "19px",
  marginBottom: "16px",
});

export const SocialItems = styled("div", {
  display: "flex",
  gap: "17px",
});
