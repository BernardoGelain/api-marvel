import {
  MainBannerContainer,
  MainBannerTitle,
  MainBannerImage,
} from "./main-banner-section-styles";

export const MainBannerSection = () => {
  return (
    <MainBannerContainer>
      <MainBannerImage
        width={1440}
        height={300}
        src="/images/banner.jpg"
        alt="Avengers bannder"
        priority
        blurDataURL=""
      />
      <MainBannerTitle>Conheça nossos personagens</MainBannerTitle>
    </MainBannerContainer>
  );
};
