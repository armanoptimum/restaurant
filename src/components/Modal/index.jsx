import Image from "next/image";
import {
  ModalBackdrop,
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
} from "@/components/Cart/styles";
import { priceFormat } from "@/utils";
import Order from "@/components/Order";
import { ORDER_TYPE } from "@/components/Order/constants";
import { useEffect } from "react";

const Modal = ({ totalPrice, data, orders }) => {
  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  return (
    <>
      <ModalBackdrop />
      <ModalStyled>
        <Image alt="confirmed" src={confirmedIcon} />
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
    </>
  );
};

export default Modal;
