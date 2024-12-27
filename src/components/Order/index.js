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
import { priceFormat } from "../../utils";

const Order = ({ id, name, price, count, onCancelHandler }) => {
  const [cancelIconSrc, setcancelIconSrc] = useState(removeIcon);

  return (
    <OrderStyled>
      <OrderContent>
        <OrderName>{name}</OrderName>
        <OrderInfo>
          <OrderInfoCount>{count}x</OrderInfoCount>
          <OrderInfoPrice>@ ${priceFormat(price)}</OrderInfoPrice>
          <OrderInfoTotalPrice>
            ${priceFormat(price * count)}
          </OrderInfoTotalPrice>
        </OrderInfo>
      </OrderContent>
      <OrderCancelIconWrapper
        onClick={() => onCancelHandler(id)}
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
