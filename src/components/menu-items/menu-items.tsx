import {
  MenuItem,
  MenuItemsContainer,
  MenuItemsTitle,
} from "./menu-items-styles";

type Props = {
  title: string;
  items: Array<{
    href: string;
    text: string;
  }>;
};

export const MenuItems = ({ items, title }: Props) => {
  return (
    <MenuItemsContainer>
      <MenuItemsTitle>{title}</MenuItemsTitle>
      {items.map((item) => (
        <MenuItem href={item.href} key={item.href}>
          {item.text}
        </MenuItem>
      ))}
    </MenuItemsContainer>
  );
};
