import {
  OrderCancelIconWrapper,
  OrderContent,
  OrderInfo,
  OrderInfoCount,
  OrderInfoPrice,
  OrderInfoTotalPrice,
  OrderName,
  OrderStyled,
  OrderDescription,
  ThumbnailWrapper,
} from "./styles";
import removeIcon from "@/assets/icons/icon-remove-item.svg";
import removeHoverIcon from "@/assets/icons/icon-remove-item-hover.svg";
import { useState } from "react";
import { priceFormat } from "@/utils";
import { ORDER_TYPE } from "./constants";

const Order = ({
  id,
  name,
  price,
  count,
  onCancelHandler,
  type = ORDER_TYPE.PRIMARY,
  image: { thumbnail },
}) => {
  const [cancelIconSrc, setcancelIconSrc] = useState(removeIcon);
  return (
    <OrderStyled>
      <OrderDescription>
        {type === ORDER_TYPE.MODAL && (
          <ThumbnailWrapper
            alt="order"
            src={thumbnail}
            width={40}
            height={40}
          />
        )}
        <OrderContent>
          <OrderName>{name}</OrderName>
          <OrderInfo>
            <OrderInfoCount>{count}x</OrderInfoCount>
            <OrderInfoPrice>@ ${priceFormat(price)}</OrderInfoPrice>

            {type === ORDER_TYPE.PRIMARY && (
              <OrderInfoTotalPrice>
                ${priceFormat(price * count)}
              </OrderInfoTotalPrice>
            )}
          </OrderInfo>
        </OrderContent>
      </OrderDescription>

      {type === ORDER_TYPE.PRIMARY ? (
        <OrderCancelIconWrapper
          onClick={() => onCancelHandler(id)}
          onMouseOver={() => setcancelIconSrc(removeHoverIcon)}
          onMouseOut={() => setcancelIconSrc(removeIcon)}
          src={cancelIconSrc}
          alt="Remove"
          height={17}
          width={17}
        />
      ) : (
        <OrderInfoTotalPrice>${priceFormat(price * count)}</OrderInfoTotalPrice>
      )}
    </OrderStyled>
  );
};

export default Order;
