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
import { BUTTON_STYLES } from "@/components/Button/constants";
import { BREAKPOINTS } from "@/constants";
import { useState } from "react";

const Desert = ({ name, category, price, image }) => {
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
      <ImageContainer>
        <picture>
          <source
            media={`(min-width: ${BREAKPOINTS.desktop})`}
            srcSet={image.desktop}
          />
          <source
            media={`(min-width: ${BREAKPOINTS.tablet})`}
            srcSet={image.tablet}
          />
          <source
            media={`(min-width: ${BREAKPOINTS.mobile})`}
            srcSet={image.mobile}
          />
          <ImageStyled
            srcSet={image.mobile}
            src={image.mobile}
            alt="desert"
            priority
            width={100}
            height={100}
            $selected={selectedItemsCount}
          />
        </picture>
        <ButtonContainer>
          <Button
            selectedItemsCount={selectedItemsCount}
            selectItem={selectItem}
            incrementItem={incrementItem}
            decrementItem={decrementItem}
            style={BUTTON_STYLES.CART}
          >
            Add to Cart
          </Button>
        </ButtonContainer>
      </ImageContainer>
      <DesertInformation>
        <DesertName>{category}</DesertName>
        <DesertFullName>{name}</DesertFullName>
        <DesertPrice>${price.toFixed(2)}</DesertPrice>
      </DesertInformation>
    </DesertStyled>
  );
};

export default Desert;
