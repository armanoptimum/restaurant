import Button from "@/components/Button";
import {
  CartHeader,
  CartMessage,
  CartStyled,
  TotalPrice,
  TotalPriceMessage,
  TotalPriceWrapper,
} from "./styles";
import { BUTTON_STYLES } from "../Button/constants";
import neutralIcon from "@/assets/icons/icon-carbon-neutral.svg";
import Image from "next/image";

const Cart = () => {
  return (
    <CartStyled>
      <CartHeader>Your Cart (0)</CartHeader>
      <TotalPriceWrapper>
        <TotalPriceMessage>Order Total</TotalPriceMessage>
        <TotalPrice>$46.50</TotalPrice>
      </TotalPriceWrapper>
      <CartMessage>
        <Image src={neutralIcon} alt="neutral" /> This is a{" "}
        <b>carbon-neutral</b> delivery
      </CartMessage>
      <Button style={BUTTON_STYLES.PRIMARY}>Confirm Order</Button>
    </CartStyled>
  );
};

export default Cart;
