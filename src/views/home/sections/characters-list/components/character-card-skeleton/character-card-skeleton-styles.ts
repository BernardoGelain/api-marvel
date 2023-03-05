import { keyframes, styled } from "@/styles/theme";

const shine = keyframes({
  to: {
    backgroundPosition: "170px 0",
  },
});

export const CardSkeletonContainer = styled("div", {
  background: "$gray",
  width: "170px",
  height: "273px",
  backgroundColor: "#e2e5e7",
  backgroundImage:
    "linear-gradient(90deg, #e2e5e7 0px, #e8e8e8 40px, #ddd 80px)",
  backgroundSize: "40px 100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "-170px 0",
  animation: `${shine} 1.6s ease infinite`,
});
