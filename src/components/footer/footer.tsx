import Image from "next/image";
import { MenuItems } from "../menu-items/menu-items";
import { NewsLetterForm } from "./components";
import { PreviewPostBadge } from "./components/preview-post-badge/preview-post-badge";
import { MARVEL_MENU_ITEMS, MEDIA_MENU_ITEMS } from "./constants";
import {
  FooterContainer,
  NewsletterCard,
  FooterContent,
  FooterNavigation,
  FooterNavigationRight,
  FooterNavigationLeft,
  SocialContent,
  FollowMarvelText,
  SocialItems,
} from "./footer-styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <NewsletterCard>Receba as novidades da Marvel</NewsletterCard>
        <NewsLetterForm />
      </FooterContent>
      <FooterNavigation>
        <FooterNavigationRight>
          <Image
            src="/images/icons/logo-marvel.svg"
            width={45}
            height={67}
            alt="Marvel's logo"
          />
          <MenuItems title="A Marvel" items={MARVEL_MENU_ITEMS} />
          <MenuItems title="Mídia" items={MEDIA_MENU_ITEMS} />
        </FooterNavigationRight>
        <FooterNavigationLeft>
          <PreviewPostBadge />
          <SocialContent>
            <FollowMarvelText>Siga a marvel</FollowMarvelText>
            <SocialItems>
              <Image
                src="/images/icons/facebook.svg"
                width={30}
                height={30}
                alt="Facebook logo"
              />
              <Image
                src="/images/icons/spotify.svg"
                width={30}
                height={30}
                alt="Spotify logo"
              />
              <Image
                src="/images/icons/instagram.svg"
                width={30}
                height={30}
                alt="Instagram logo"
              />
              <Image
                src="/images/icons/youtube.svg"
                width={30}
                height={30}
                alt="YouTube logo"
              />
            </SocialItems>
          </SocialContent>
        </FooterNavigationLeft>
      </FooterNavigation>
    </FooterContainer>
  );
};
