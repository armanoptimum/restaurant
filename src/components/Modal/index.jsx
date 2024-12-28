import Image from "next/image";
import {
  ModalMessage,
  ModalOrders,
  ModalStyled,
  ModalTextWrapper,
  ModalTitle,
} from "./styles";
import confirmedIcon from "@/assets/icons/icon-order-confirmed.svg";
import Button from "@/components/Button";
import { BUTTON_STYLES } from "@/components/Button/constants";
import {
  TotalPrice,
  TotalPriceMessage,
  TotalPriceWrapper,
} from "../Cart/styles";
import { priceFormat } from "../../utils";
import Order from "../Order";
import { ORDER_TYPE } from "../Order/constants";

const Modal = ({ totalPrice, data, orders }) => {
  return (
    <ModalStyled>
      <Image alt="confirmed sign" src={confirmedIcon} />
      <ModalTextWrapper>
        <ModalTitle>Order Confirmed</ModalTitle>
        <ModalMessage>We hope you enjoy your food!</ModalMessage>
      </ModalTextWrapper>
      <ModalOrders>
        {orders.map(({ id, count }) =>
          data
            .filter((item) => item.id === id)
            .map((item) => (
              <Order
                key={id}
                type={ORDER_TYPE.MODAL}
                id={id}
                {...item}
                count={count}
              />
            )),
        )}
        <TotalPriceWrapper $type={ORDER_TYPE.MODAL}>
          <TotalPriceMessage>Order Total</TotalPriceMessage>
          <TotalPrice>${priceFormat(totalPrice)}</TotalPrice>
        </TotalPriceWrapper>
      </ModalOrders>
      <Button style={BUTTON_STYLES.PRIMARY}>Start New Order</Button>
    </ModalStyled>
  );
};

export default Modal;
