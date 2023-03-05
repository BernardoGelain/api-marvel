import Image, { ImageProps } from "next/image";

type Props = ImageProps;

const NextImage = ({ alt, ...props }: Props) => {
  const url =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8Uw8AAh0BTZud3BwAAAAASUVORK5CYII=";

  return (
    <Image
      alt={alt}
      {...props}
      src={props.src ?? url}
      placeholder={"blur"}
      blurDataURL={url}
    />
  );
};

export default NextImage;
