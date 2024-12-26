import {
  OrderCancelIconWrapper,
  OrderContent,
  OrderInfo,
  OrderInfoCount,
  OrderInfoPrice,
  OrderInfoTotalPrice,
  OrderName,
  OrderStyled,
} from "./styles";
import removeIcon from "@/assets/icons/icon-remove-item.svg";
import removeHoverIcon from "@/assets/icons/icon-remove-item-hover.svg";
import { useState } from "react";

const Order = () => {
  const [cancelIconSrc, setcancelIconSrc] = useState(removeIcon);

  return (
    <OrderStyled>
      <OrderContent>
        <OrderName>Vanilla Panna Cotta</OrderName>
        <OrderInfo>
          <OrderInfoCount>2x</OrderInfoCount>
          <OrderInfoPrice>@ $6.50</OrderInfoPrice>
          <OrderInfoTotalPrice>$13.00</OrderInfoTotalPrice>
        </OrderInfo>
      </OrderContent>
      <OrderCancelIconWrapper
        onMouseOver={() => setcancelIconSrc(removeHoverIcon)}
        onMouseOut={() => setcancelIconSrc(removeIcon)}
        src={cancelIconSrc}
        alt="Remove"
        height={17}
        width={17}
      />
    </OrderStyled>
  );
};

export default Order;
