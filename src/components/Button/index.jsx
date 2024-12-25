import Image from "next/image";
import cartIcon from "@/assets/icons/icon-add-to-cart.svg";
import incrementIcon from "@/assets/icons/icon-increment-quantity.svg";
import incrementHoverIcon from "@/assets/icons/icon-increment-quantity-hover.svg";
import decrementIcon from "@/assets/icons/icon-decrement-quantity.svg";
import decrementHoverIcon from "@/assets/icons/icon-decrement-quantity-hover.svg";
import { ButtonStyled, IconWrapper } from "./styles";
import { BUTTON_STYLES } from "./constants";
import { useState } from "react";

const Button = ({ children, style = BUTTON_STYLES.PRIMARY }) => {
  const [isActiveButton, setIsActiveButton] = useState(false);
  const [decrementSrc, setDecrementSrc] = useState(decrementIcon);
  const [incrementSrc, setIncrementSrc] = useState(incrementIcon);

  const toggleActiveButton = () => {
    setIsActiveButton((prev) => !prev);
  };

  const buttonStyle =
    isActiveButton && style === BUTTON_STYLES.CART
      ? BUTTON_STYLES.CART_ACTIVE
      : style;

  return (
    <ButtonStyled $style={buttonStyle} onClick={toggleActiveButton}>
      {buttonStyle === BUTTON_STYLES.CART && (
        <>
          <Image alt="cart" src={cartIcon} /> {children}
        </>
      )}
      {buttonStyle === BUTTON_STYLES.CART_ACTIVE && (
        <>
          <IconWrapper
            alt="decrement quantity"
            src={decrementSrc}
            onMouseEnter={() => setDecrementSrc(decrementHoverIcon)}
            onMouseLeave={() => setDecrementSrc(decrementIcon)}
          />
          1
          <IconWrapper
            alt="increment quantity"
            src={incrementSrc}
            onMouseEnter={() => setIncrementSrc(incrementHoverIcon)}
            onMouseLeave={() => setIncrementSrc(incrementIcon)}
          />
        </>
      )}
      {buttonStyle === BUTTON_STYLES.PRIMARY && children}
    </ButtonStyled>
  );
};

export default Button;
