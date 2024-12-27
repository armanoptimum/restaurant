import Button from "@/components/Button";
import {
  CartHeader,
  CartMessage,
  CartStyled,
  EmptyCart,
  EmptyCardMessage,
  TotalPrice,
  TotalPriceMessage,
  TotalPriceWrapper,
  NonEmptyCard,
} from "./styles";
import { BUTTON_STYLES } from "../Button/constants";
import neutralIcon from "@/assets/icons/icon-carbon-neutral.svg";
import Image from "next/image";
import Order from "../Order";
import emptyIcon from "@/assets/icons/illustration-empty-cart.svg";

const Cart = ({ data, orders }) => {
  const totalPrice = orders.reduce((total, order) => {
    const dessert = data.find((item) => item.id === order.id);
    if (dessert) {
      return total + dessert.price * order.count;
    }
    return total;
  }, 0);

  return (
    <CartStyled>
      <CartHeader>Your Cart (0)</CartHeader>
      <NonEmptyCard>
        <Order />
        <Order />
        <Order />
        <TotalPriceWrapper>
          <TotalPriceMessage>Order Total</TotalPriceMessage>
          <TotalPrice>${totalPrice.toFixed(2)}</TotalPrice>
        </TotalPriceWrapper>
        <CartMessage>
          <Image src={neutralIcon} alt="neutral" /> This is a
          <b>carbon-neutral</b> delivery
        </CartMessage>
        <Button style={BUTTON_STYLES.PRIMARY}>Confirm Order</Button>
      </NonEmptyCard>
      <EmptyCart>
        <Image src={emptyIcon} alt="empty" />
        <EmptyCardMessage>Your added items will appear here</EmptyCardMessage>
      </EmptyCart>
    </CartStyled>
  );
};

export default Cart;
