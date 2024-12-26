import Button from "@/components/Button";
import {
  ButtonContainer,
  DesertFullName,
  DesertInformation,
  DesertName,
  DesertPrice,
  DesertStyled,
  ImageContainer,
  ImageStyled,
} from "./styles";
import desertDesktopImg from "@/assets/images/image-waffle-desktop.jpg";
import desertTabletImg from "@/assets/images/image-waffle-tablet.jpg";
import desertMobileImg from "@/assets/images/image-waffle-mobile.jpg";
import { BUTTON_STYLES } from "@/components/Button/constants";
import { BREAKPOINTS } from "@/constants";
import { useState } from "react";

const Desert = () => {
  const [selectedItemsCount, setSelectedItemsCount] = useState(0);

  const selectItem = () => {
    if (selectedItemsCount === 0) {
      setSelectedItemsCount(1);
    }
  };

  const incrementItem = () => {
    setSelectedItemsCount((prev) => prev + 1);
  };

  const decrementItem = () => {
    setSelectedItemsCount((prev) => prev - 1);
  };

  return (
    <DesertStyled>
      <ImageContainer  $selected={selectedItemsCount}>
        <picture>
          <source
            media={`(min-width: ${BREAKPOINTS.desktop})`}
            srcSet={desertDesktopImg.src}
          />
          <source
            media={`(min-width: ${BREAKPOINTS.tablet})`}
            srcSet={desertTabletImg.src}
          />
          <ImageStyled src={desertMobileImg} alt="desert" priority />
        </picture>
        <ButtonContainer>
          <Button selectedItemsCount={selectedItemsCount} selectItem={selectItem} incrementItem={incrementItem} decrementItem={decrementItem} style={BUTTON_STYLES.CART}>Add to Cart</Button>
        </ButtonContainer>
      </ImageContainer>
      <DesertInformation>
        <DesertName>Waffle</DesertName>
        <DesertFullName>Waffle with Berries</DesertFullName>
        <DesertPrice>$6.50</DesertPrice>
      </DesertInformation>
    </DesertStyled>
  );
};

export default Desert;
