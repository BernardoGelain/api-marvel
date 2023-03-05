import "keen-slider/keen-slider.min.css";
import { KeenSliderOptions, useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { Children } from "react";
import {
  CarouselActionButton,
  CarouselActionButtonsContainer,
  CarouselHeader,
  CarouselTitle,
} from "./carousel-styles";

type Props = {
  children: React.ReactNode;
  sliderOptions: KeenSliderOptions;
  title: string;
};

export const Carousel = ({ children, sliderOptions, title }: Props) => {
  const [sliderRef, instanceRef] = useKeenSlider(sliderOptions);

  const handleClickNext = (e: any) => {
    e.stopPropagation();
    instanceRef?.current?.next();
  };

  const handleClickPrev = (e: any) => {
    e.stopPropagation();
    instanceRef?.current?.prev();
  };

  return (
    <>
      <CarouselHeader>
        <CarouselTitle>{title}</CarouselTitle>
        <CarouselActionButtonsContainer>
          <CarouselActionButton onClick={handleClickPrev}>
            <Image
              src="/images/icons/chevron-left.svg"
              width={30}
              height={30}
              alt="icon for slider pagination"
            />
          </CarouselActionButton>
          <CarouselActionButton onClick={handleClickNext}>
            <Image
              src="/images/icons/chevron-right.svg"
              width={30}
              height={30}
              alt="icon for slider pagination"
            />
          </CarouselActionButton>
        </CarouselActionButtonsContainer>
      </CarouselHeader>

      <div ref={sliderRef} className="keen-slider">
        {Children.map(children, (child) => (
          <div className="keen-slider__slide">{child}</div>
        ))}
      </div>
    </>
  );
};
