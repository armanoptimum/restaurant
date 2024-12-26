import Image from "next/image";
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

const Order = () => {
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
        src={removeIcon}
        alt="Remove"
        height={17}
        width={17}
      />
    </OrderStyled>
  );
};

export default Order;
