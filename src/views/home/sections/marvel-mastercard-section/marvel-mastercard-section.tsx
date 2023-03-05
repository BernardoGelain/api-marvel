import { Container } from "@/components";
import {
  CallToActionButton,
  MarvelMastercardSectionContainer,
  MarvelMastercardSectionDescription,
  MarvelMastercardSectionImage,
  MarvelMastercardSectionTitle,
  SectionFooterText,
} from "./marvel-mastercard-section-styles";

export const MarvelMastercardSection = () => {
  return (
    <Container>
      <MarvelMastercardSectionContainer>
        <MarvelMastercardSectionTitle>
          Marvel Mastercard
        </MarvelMastercardSectionTitle>
        <MarvelMastercardSectionDescription>
          Desbloqueie seus super poderes
        </MarvelMastercardSectionDescription>
        <MarvelMastercardSectionImage
          src="/images/cards-fan-desktop.png"
          width={1016}
          height={180}
          alt="Mastercards Marvel"
        />
        <CallToActionButton>Cadastre-se agora</CallToActionButton>
        <SectionFooterText>Entenda como funciona</SectionFooterText>
      </MarvelMastercardSectionContainer>
    </Container>
  );
};
