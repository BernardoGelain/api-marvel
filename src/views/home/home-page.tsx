import { Footer, Header } from "@/components";
import {
  CharactersList,
  HighlightCharactersSection,
  MainBannerSection,
  MarvelMastercardSection,
} from "./sections";

const HomePage = () => {
  return (
    <>
      <Header />
      <MainBannerSection />
      <HighlightCharactersSection />
      <CharactersList />
      <MarvelMastercardSection />
      <Footer />
    </>
  );
};

export default HomePage;
