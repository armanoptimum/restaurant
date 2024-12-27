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
import { priceFormat } from "../../utils";

const Desert = ({ id, name, category, price, image, setOrders }) => {
  const [selectedItemsCount, setSelectedItemsCount] = useState(0);

  const selectItem = () => {
    if (selectedItemsCount === 0) {
      setSelectedItemsCount(1);
    }
    setOrders((prevOrders) => {
      const existingOrder = prevOrders.find((order) => order.id === id);
      if (existingOrder) {
        return prevOrders.map((order) =>
          order.id === id ? { ...order, count: 1 } : order,
        );
      } else {
        return [
          ...prevOrders,
          {
            id,
            count: 1,
          },
        ];
      }
    });
  };

  const incrementItem = () => {
    setSelectedItemsCount((prev) => prev + 1);
    setOrders((prevOrders) => {
      return prevOrders.map((order) =>
        order.id === id ? { ...order, count: order.count + 1 } : order,
      );
    });
  };

  const decrementItem = () => {
    setSelectedItemsCount((prev) => prev - 1);
    setOrders((prevOrders) => {
      return prevOrders.map((order) =>
        order.id === id ? { ...order, count: order.count - 1 } : order,
      ).filter((order) => order.count > 0);
    })
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
        <DesertPrice>${priceFormat(price)}</DesertPrice>
      </DesertInformation>
    </DesertStyled>
  );
};

export default Desert;
