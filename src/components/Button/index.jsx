import Image from "next/image";
import cartIcon from "@/assets/icons/icon-add-to-cart.svg";
import incrementIcon from "@/assets/icons/icon-increment-quantity.svg";
import incrementHoverIcon from "@/assets/icons/icon-increment-quantity-hover.svg";
import decrementIcon from "@/assets/icons/icon-decrement-quantity.svg";
import decrementHoverIcon from "@/assets/icons/icon-decrement-quantity-hover.svg";
import { ButtonStyled, IconWrapper } from "./styles";
import { BUTTON_STYLES } from "./constants";
import { useEffect, useState } from "react";

const Button = ({ children, style = BUTTON_STYLES.PRIMARY, selectItem, incrementItem, decrementItem, selectedItemsCount }) => {
  const [decrementSrc, setDecrementSrc] = useState(decrementIcon);
  const [incrementSrc, setIncrementSrc] = useState(incrementIcon);

  useEffect(() => {
    if (selectedItemsCount === 0) {
      setDecrementSrc(decrementIcon);
      setIncrementSrc(incrementIcon);
    }
  }, [selectedItemsCount]);

  const buttonStyle =
    selectedItemsCount && style === BUTTON_STYLES.CART
      ? BUTTON_STYLES.CART_ACTIVE
      : style;

  return (
    <ButtonStyled $style={buttonStyle} onClick={selectItem}>
      {buttonStyle === BUTTON_STYLES.CART && (
        <>
          <Image alt="cart" src={cartIcon} /> {children}
        </>
      )}
      {buttonStyle === BUTTON_STYLES.CART_ACTIVE && (
        <>
          <IconWrapper
            alt="decrement"
            src={decrementSrc}
            onMouseOver={() => setDecrementSrc(decrementHoverIcon)}
            onMouseOut={() => setDecrementSrc(decrementIcon)}
            onClick={decrementItem}
          />
          {selectedItemsCount}
          <IconWrapper
            alt="increment"
            src={incrementSrc}
            onMouseOver={() => setIncrementSrc(incrementHoverIcon)}
            onMouseOut={() => setIncrementSrc(incrementIcon)}
            onClick={incrementItem}
          />
        </>
      )}
      {buttonStyle === BUTTON_STYLES.PRIMARY && children}
    </ButtonStyled>
  );
};

export default Button;
