import Link from "next/link";
import NextImage from "../image/image";
import { MENU_ITEMS_LIST } from "./constants/menu-items-list-const";
import { Container, MenuItemsWrapper } from "./header-styles";

export const Header = () => {
  return (
    <Container>
      <Link href="/">
        <NextImage
          src="/images/icons/logo-marvel.svg"
          width={110}
          height={45}
          alt="Marvel Logo"
        />
      </Link>
      <MenuItemsWrapper>
        {MENU_ITEMS_LIST.map((menuItem) => (
          <Link href={menuItem.path} key={menuItem.name}>
            {menuItem.name}
          </Link>
        ))}
      </MenuItemsWrapper>
    </Container>
  );
};
