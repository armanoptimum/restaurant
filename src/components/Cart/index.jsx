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
import { priceFormat } from "../../utils";

const Cart = ({ data, orders, setOrders, setSelectedItems }) => {
  let ordersCount = 0;
  const totalPrice = orders.reduce((total, order) => {
    const dessert = data.find((item) => item.id === order.id);
    if (dessert) {
      ordersCount += order.count;
      return total + dessert.price * order.count;
    }
    return total;
  }, 0);

  const onCancelHandler = (id) => {
    const newOrders = orders.filter((order) => order.id != id);
    setOrders(newOrders);
    setSelectedItems((prev) => {
      return prev.filter((item) => item.id != id);
    });
  };
  return (
    <CartStyled>
      <CartHeader>Your Cart ({ordersCount})</CartHeader>
      <NonEmptyCard $empty={!ordersCount}>
        {orders.map(({ id, count }) =>
          data
            .filter((item) => item.id === id)
            .map((item) => (
              <Order
                key={id}
                id={id}
                {...item}
                count={count}
                onCancelHandler={onCancelHandler}
              />
            )),
        )}
        <TotalPriceWrapper>
          <TotalPriceMessage>Order Total</TotalPriceMessage>
          <TotalPrice>${priceFormat(totalPrice)}</TotalPrice>
        </TotalPriceWrapper>
        <CartMessage>
          <Image src={neutralIcon} alt="neutral" /> This is a
          <b>carbon-neutral</b> delivery
        </CartMessage>
        <Button style={BUTTON_STYLES.PRIMARY}>Confirm Order</Button>
      </NonEmptyCard>
      <EmptyCart $empty={!ordersCount}>
        <Image src={emptyIcon} alt="empty" />
        <EmptyCardMessage>Your added items will appear here</EmptyCardMessage>
      </EmptyCart>
    </CartStyled>
  );
};

export default Cart;
